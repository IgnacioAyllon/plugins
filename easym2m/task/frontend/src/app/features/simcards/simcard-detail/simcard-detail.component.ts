import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  SimCard, SIM_STATUSES, SimCardsService,
  Alarm, UsageRecord, UsageResponse, SimStats, SimCardBalance
} from '../../../core/services/simcards.service';
import { ErrorNotificationService } from '../../../core/services/error-notification.service';
import { HttpErrorResponse } from '@angular/common/http';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEye, faEyeSlash, faCircleCheck, faCircleXmark,
  faFloppyDisk, faPenToSquare, faRotateRight,
  faTriangleExclamation, faChartLine, faWallet,
  faStethoscope, faDatabase
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simcard-detail',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzDescriptionsModule,
    NzTagModule,
    NzDividerModule,
    NzSpinModule,
    NzButtonModule,
    NzEmptyModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzAlertModule,
    NzTableModule,
    NzProgressModule,
    NzStatisticModule,
    FontAwesomeModule,
  ],
  templateUrl: './simcard-detail.component.html',
})
export class SimCardDetailComponent implements OnChanges {
  @Input() simCard: SimCard | null = null;
  @Input() loading = false;
  @Output() simUpdated = new EventEmitter<SimCard>();

  // icons
  protected faEye = faEye;
  protected faEyeSlash = faEyeSlash;
  protected faCircleCheck = faCircleCheck;
  protected faCircleXmark = faCircleXmark;
  protected faSave = faFloppyDisk;
  protected faPenToSquare = faPenToSquare;
  protected faRotateRight = faRotateRight;
  protected faTriangleExclamation = faTriangleExclamation;
  protected faChartLine = faChartLine;
  protected faWallet = faWallet;
  protected faStethoscope = faStethoscope;
  protected faDatabase = faDatabase;

  readonly statuses = SIM_STATUSES;
  readonly editableStatuses = [
    { value: 'ACTIVE', label: 'Active' },
    { value: 'TEST', label: 'Test' },
    { value: 'ACTIVATION_READY', label: 'Activation Ready' },
    { value: 'SUSPENDED', label: 'Suspended' },
  ];

  // ── Overview ──────────────────────────────────────────────────────────────
  sensitivesVisible = false;

  // ── Usage (CDR records) ───────────────────────────────────────────────────
  usageLoading = false;
  usageLoaded = false;
  usageRecords: UsageRecord[] = [];
  usageTotal = 0;
  usagePageSize = 10;
  usagePageIndex = 1;
  usageYear = new Date().getFullYear();
  usageMonth = new Date().getMonth() + 1;
  usageService: 'data' | 'voice' | 'sms' = 'data';
  usageError: string | null = null;

  // ── Statistics — aggregated monthly (Telefónica only) ────────────────────
  statsLoading = false;
  statsLoaded = false;
  statsData: SimStats | null = null;
  statsYear = new Date().getFullYear();
  statsMonth = new Date().getMonth() + 1;
  statsError: string | null = null;

  // ── Balance per SIM (Telefónica only) ─────────────────────────────────────
  balanceLoading = false;
  balanceLoaded = false;
  simBalance: SimCardBalance | null = null;
  balanceError: string | null = null;

  // ── Diagnostics (Telefónica only) ─────────────────────────────────────────
  diagLoading = false;
  diagLoaded = false;
  diagData: Record<string, any> | null = null;
  diagType = 'ping';
  diagError: string | null = null;

  readonly diagTypes = [
    { value: 'ping', label: 'Ping — connectivity test' },
    { value: 'location', label: 'Location — cell tower position' },
  ];

  // ── Edit ──────────────────────────────────────────────────────────────────
  editForm: FormGroup;
  saving = false;
  alarms: Alarm[] = [];
  alarmsLoading = false;
  alarmsLoaded = false;

  constructor(
    private fb: FormBuilder,
    private simCardsService: SimCardsService,
    private errorNotification: ErrorNotificationService,
    private message: NzMessageService,
  ) {
    this.editForm = this.fb.group({
      alias: [''],
      lifeCycleStatus: [null],
      idAlarm: [null],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['simCard'] && this.simCard) {
      this.resetState();
      this.patchEditForm();
    }
  }

  private resetState(): void {
    this.sensitivesVisible = false;
    this.usageLoaded = false;
    this.usageRecords = [];
    this.usageError = null;
    this.usagePageIndex = 1;
    this.statsLoaded = false;
    this.statsData = null;
    this.statsError = null;
    this.balanceLoaded = false;
    this.simBalance = null;
    this.balanceError = null;
    this.diagLoaded = false;
    this.diagData = null;
    this.diagError = null;
    this.alarmsLoaded = false;
    this.alarms = [];
  }

  private patchEditForm(): void {
    if (!this.simCard) return;
    this.editForm.patchValue({
      alias: this.simCard.alias ?? '',
      lifeCycleStatus: null,
      idAlarm: this.simCard.idAlarm ?? null,
    });
  }

  onTabChange(index: number): void {
    // Tabs: 0=Overview, 1=Usage, 2=Statistics, 3=Balance, 4=Diagnostics, 5=Edit
    switch (index) {
      case 1: if (!this.usageLoaded) this.loadUsage(); break;
      case 2: if (!this.statsLoaded && this.isTelefonica) this.loadStatistics(); break;
      case 3: if (!this.balanceLoaded && this.isTelefonica) this.loadBalance(); break;
      case 4: if (!this.diagLoaded && this.isTelefonica) this.loadDiagnostics(); break;
      case 5: if (!this.alarmsLoaded) this.loadAlarms(); break;
    }
  }

  get isTelefonica(): boolean {
    return (this.simCard?.provider ?? '').toLowerCase() === 'telefonica';
  }

  get providerName(): string {
    return this.simCard?.provider ?? 'Unknown';
  }

  // ── Usage ─────────────────────────────────────────────────────────────────

  loadUsage(): void {
    if (!this.simCard) return;
    this.usageLoading = true;
    this.usageError = null;
    this.simCardsService
      .getSimCardUsage(this.simCard.iccid, this.usageYear, this.usageMonth, this.usageService, this.usagePageSize, this.usagePageIndex)
      .subscribe({
        next: (res: UsageResponse) => {
          this.usageRecords = res?.data ?? [];
          this.usageTotal = res?.info?.resultSetSize ?? 0;
          this.usageLoaded = true;
          this.usageLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.usageLoading = false;
          this.usageLoaded = true;
          this.usageError = this.extractErrorMessage(err);
        }
      });
  }

  onUsagePageChange(index: number): void {
    this.usagePageIndex = index;
    this.loadUsage();
  }

  onUsageFilterChange(): void {
    this.usagePageIndex = 1;
    this.usageLoaded = false;
    this.loadUsage();
  }

  // ── Statistics ────────────────────────────────────────────────────────────

  loadStatistics(): void {
    if (!this.simCard) return;
    this.statsLoading = true;
    this.statsError = null;
    this.statsData = null;
    this.simCardsService.getSimCardStatistics(this.simCard.iccid, this.statsYear, this.statsMonth).subscribe({
      next: (res: SimStats) => {
        this.statsData = res;
        this.statsLoaded = true;
        this.statsLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.statsLoading = false;
        this.statsLoaded = true;
        this.statsError = this.extractErrorMessage(err);
      }
    });
  }

  onStatsFilterChange(): void {
    this.statsLoaded = false;
    this.loadStatistics();
  }

  // ── Balance ───────────────────────────────────────────────────────────────

  loadBalance(): void {
    if (!this.simCard) return;
    this.balanceLoading = true;
    this.balanceError = null;
    this.simCardsService.getSimCardBalance(this.simCard.iccid).subscribe({
      next: (res: SimCardBalance) => {
        this.simBalance = res;
        this.balanceLoaded = true;
        this.balanceLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.balanceLoading = false;
        this.balanceLoaded = true;
        this.balanceError = this.extractErrorMessage(err);
      }
    });
  }

  // ── Diagnostics ───────────────────────────────────────────────────────────

  loadDiagnostics(): void {
    if (!this.simCard) return;
    this.diagLoading = true;
    this.diagError = null;
    this.diagData = null;
    this.simCardsService.getSimCardDiagnostics(this.simCard.iccid, this.diagType).subscribe({
      next: (res: any) => {
        this.diagData = res;
        this.diagLoaded = true;
        this.diagLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.diagLoading = false;
        this.diagLoaded = true;
        this.diagError = this.extractErrorMessage(err);
      }
    });
  }

  // ── Edit ──────────────────────────────────────────────────────────────────

  private loadAlarms(): void {
    this.alarmsLoading = true;
    this.simCardsService.listAlarms(100, 1).subscribe({
      next: (res) => {
        this.alarms = res?.data ?? [];
        if (this.alarms.length === 1 && !this.editForm.value.idAlarm) {
          this.editForm.patchValue({ idAlarm: this.alarms[0].id });
        }
        this.alarmsLoaded = true;
        this.alarmsLoading = false;
      },
      error: () => {
        this.alarmsLoading = false;
        this.alarmsLoaded = true;
      }
    });
  }

  saveSimCard(): void {
    if (!this.simCard) return;
    this.saving = true;

    const v = this.editForm.value;
    const payload: any = {};
    if (v.alias !== null && v.alias !== undefined) payload.alias = v.alias;
    if (v.lifeCycleStatus) payload.lifeCycleStatus = v.lifeCycleStatus;
    payload.idAlarm = v.idAlarm ?? null;

    this.simCardsService.updateSimCard(this.simCard.iccid, payload).subscribe({
      next: () => {
        this.simCardsService.getSimCard(this.simCard!.iccid).subscribe({
          next: (updated) => {
            this.saving = false;
            this.message.success('SIM card updated successfully');
            this.simUpdated.emit(updated);
          },
          error: () => {
            this.saving = false;
            this.message.success('SIM card updated. Reload to see changes.');
          }
        });
      },
      error: (error) => {
        this.saving = false;
        this.errorNotification.showHttpError('Error updating SIM card', error);
      }
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private extractErrorMessage(err: HttpErrorResponse): string {
    if (err.status === 0) return 'Cannot connect to the plugin backend.';
    const body = err.error ?? {};
    return body.cause || body.message || err.message || `HTTP ${err.status}`;
  }

  formatBytes(bytes: number | string | undefined): string {
    const n = Number(bytes);
    if (bytes === undefined || bytes === null || isNaN(n)) return '—';
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    if (n < 1024 * 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(2)} MB`;
    return `${(n / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }

  formatSeconds(sec: number | undefined): string {
    if (sec === undefined || sec === null) return '—';
    if (sec < 60) return `${sec}s`;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return s > 0 ? `${m}min ${s}s` : `${m}min`;
  }

  getPercent(value: number | undefined, limit: number | undefined): number {
    if (!value || !limit || limit === 0) return 0;
    return Math.min(Math.round((value / limit) * 100), 100);
  }

  getProgressStatus(value: number | undefined, limit: number | undefined): 'success' | 'normal' | 'exception' {
    const pct = this.getPercent(value, limit);
    if (pct >= 100) return 'exception';
    if (pct >= 80) return 'normal';
    return 'success';
  }

  diagEntries(): { key: string; value: any }[] {
    if (!this.diagData) return [];
    return Object.entries(this.diagData).map(([key, value]) => ({ key, value }));
  }

  getStatusColor(status: string | undefined): string {
    const colors: Record<string, string> = {
      ACTIVE: 'green',
      INACTIVE_NEW: 'default',
      TEST: 'blue',
      ACTIVATION_READY: 'gold',
      ACTIVATION_PENDANT: 'orange',
      DEACTIVATED: 'red',
      SUSPENDED: 'volcano',
    };
    return colors[status ?? ''] ?? 'default';
  }

  getStatusLabel(status: string | undefined): string {
    return this.statuses.find(s => s.value === status)?.label ?? status ?? '—';
  }

  getExtraFields(): string[] {
    if (!this.simCard) return [];
    const knownFields = new Set([
      'iccid', 'alias', 'imsi', 'msisdn', 'imei', 'apn', 'ip', 'ipAddress', 'status',
      'simModel', 'simType', 'commModuleManufacturer', 'commModuleModel',
      'deviceManufacturer', 'deviceModel',
      'ipConnected', 'ipStatus', 'staticIP', 'sgsnIP', 'ggsnIP',
      'gprsConnected', 'gprsStatus',
      'country', 'automaticLocation', 'latitude', 'longitude',
      'activationDate', 'provider',
      'pin1', 'pin2', 'puk1', 'puk2', 'idAlarm',
      // Consumption daily
      'consumptionDailyVoiceLimit', 'consumptionDailyVoiceValue',
      'consumptionDailyVoiceThresholdReached', 'consumptionDailyVoiceEnabled',
      'consumptionDailySMSLimit', 'consumptionDailySMSValue',
      'consumptionDailySMSThresholdReached', 'consumptionDailySMSEnabled',
      'consumptionDailyDataLimit', 'consumptionDailyDataValue',
      'consumptionDailyDataThresholdReached', 'consumptionDailyDataEnabled',
      // Consumption monthly
      'consumptionMonthlyVoiceLimit', 'consumptionMonthlyVoiceValue',
      'consumptionMonthlyVoiceThresholdReached', 'consumptionMonthlyVoiceEnabled',
      'consumptionMonthlySMSLimit', 'consumptionMonthlySMSValue',
      'consumptionMonthlySMSThresholdReached', 'consumptionMonthlySMSEnabled',
      'consumptionMonthlyDataLimit', 'consumptionMonthlyDataValue',
      'consumptionMonthlyDataThresholdReached', 'consumptionMonthlyDataEnabled',
      // Expense overages
      'expenseMonthlyVoiceOverLimit', 'expenseMonthlyVoiceOverValue', 'expenseMonthlyVoiceOverThresholdReached',
      'expenseMonthlySMSOverLimit', 'expenseMonthlySMSOverValue', 'expenseMonthlySMSOverThresholdReached',
      'expenseMonthlyDataOverLimit', 'expenseMonthlyDataOverValue', 'expenseMonthlyDataOverThresholdReached',
      'expenseMonthlyTotalOverLimit', 'expenseMonthlyTotalOverValue', 'expenseMonthlyTotalOverThresholdReached',
    ]);
    return Object.keys(this.simCard).filter(k => !knownFields.has(k));
  }

  getExtraObject(): Record<string, any> {
    if (!this.simCard) return {};
    return this.getExtraFields().reduce((acc, key) => {
      acc[key] = this.simCard![key];
      return acc;
    }, {} as Record<string, any>);
  }

  hasSensitiveData(): boolean {
    return !!(this.simCard?.pin1 || this.simCard?.pin2 || this.simCard?.puk1 || this.simCard?.puk2);
  }

  hasConsumptionData(): boolean {
    if (!this.simCard) return false;
    return !!(
      this.simCard.consumptionDailyDataLimit ||
      this.simCard.consumptionMonthlyDataLimit ||
      this.simCard.consumptionDailyVoiceLimit ||
      this.simCard.consumptionMonthlyVoiceLimit
    );
  }

  hasExpenseData(): boolean {
    if (!this.simCard) return false;
    return !!(
      this.simCard.expenseMonthlyTotalOverLimit ||
      this.simCard.expenseMonthlyDataOverLimit
    );
  }
}
