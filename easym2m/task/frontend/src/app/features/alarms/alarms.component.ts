import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimCardsService, Alarm } from '../../core/services/simcards.service';
import { ErrorNotificationService } from '../../core/services/error-notification.service';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell, faPlus, faPenToSquare, faTrash, faRotateRight
} from '@fortawesome/free-solid-svg-icons';

const PERCENTAGES = [50, 60, 80, 90, 100] as const;
type Pct = typeof PERCENTAGES[number];

@Component({
  selector: 'app-alarms',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzPopconfirmModule,
    NzSpinModule,
    NzTagModule,
    NzToolTipModule,
    NzDividerModule,
    NzEmptyModule,
    NzDescriptionsModule,
    FontAwesomeModule,
  ],
  templateUrl: './alarms.component.html',
})
export class AlarmsComponent implements OnInit {
  protected faBell = faBell;
  protected faPlus = faPlus;
  protected faPenToSquare = faPenToSquare;
  protected faTrash = faTrash;
  protected faRotateRight = faRotateRight;

  readonly percentages = PERCENTAGES;

  alarms: Alarm[] = [];
  loading = false;
  totalItems = 0;
  pageIndex = 1;
  pageSize = 20;

  modalVisible = false;
  modalTitle = '';
  modalSaving = false;
  editingId: string | null = null;

  detailVisible = false;
  selectedAlarm: Alarm | null = null;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private simCardsService: SimCardsService,
    private errorNotification: ErrorNotificationService,
    private message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadAlarms();
  }

  private buildForm(): void {
    const group: Record<string, any> = {
      name: ['', Validators.required],
      description: [''],
    };
    for (const period of ['daily', 'monthly'] as const) {
      for (const service of ['Data', 'Voice', 'Sms'] as const) {
        for (const pct of PERCENTAGES) {
          group[`${period}${service}Threshold${pct}`] = [null];
        }
      }
    }
    this.form = this.fb.group(group);
  }

  loadAlarms(): void {
    this.loading = true;
    this.simCardsService.listAlarms(this.pageSize, this.pageIndex).subscribe({
      next: (res) => {
        this.alarms = res?.data ?? [];
        this.totalItems = res?.info?.resultSetSize ?? 0;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorNotification.showHttpError('Error loading alarms', error);
      }
    });
  }

  onPageChange(index: number): void {
    this.pageIndex = index;
    this.loadAlarms();
  }

  openCreate(): void {
    this.editingId = null;
    this.modalTitle = 'Create alarm profile';
    this.form.reset();
    this.modalVisible = true;
  }

  openEdit(alarm: Alarm): void {
    this.editingId = alarm.id;
    this.modalTitle = `Edit alarm: ${alarm.name}`;
    this.form.patchValue(alarm);
    this.modalVisible = true;
  }

  openDetail(alarm: Alarm): void {
    this.selectedAlarm = alarm;
    this.detailVisible = true;
    // Load full alarm detail
    this.simCardsService.getAlarm(alarm.id).subscribe({
      next: (full) => { this.selectedAlarm = full; },
      error: (err) => this.errorNotification.showHttpError('Error loading alarm detail', err)
    });
  }

  saveAlarm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.modalSaving = true;
    const payload = this.buildPayload();

    const op$ = this.editingId
      ? this.simCardsService.updateAlarm(this.editingId, payload)
      : this.simCardsService.createAlarm(payload);

    op$.subscribe({
      next: () => {
        this.modalSaving = false;
        this.modalVisible = false;
        this.message.success(this.editingId ? 'Alarm updated successfully' : 'Alarm created successfully');
        this.loadAlarms();
      },
      error: (error) => {
        this.modalSaving = false;
        this.errorNotification.showHttpError(
          this.editingId ? 'Error updating alarm' : 'Error creating alarm',
          error
        );
      }
    });
  }

  deleteAlarm(alarm: Alarm): void {
    this.simCardsService.deleteAlarm(alarm.id).subscribe({
      next: () => {
        this.message.success(`Alarm "${alarm.name}" deleted. Any SIM cards assigned to it now have no alarm.`);
        this.loadAlarms();
      },
      error: (error) => {
        this.errorNotification.showHttpError('Error deleting alarm', error);
      }
    });
  }

  private buildPayload(): Record<string, any> {
    const v = this.form.getRawValue();
    const payload: Record<string, any> = {
      name: v.name,
      description: v.description || undefined,
    };
    for (const period of ['daily', 'monthly'] as const) {
      for (const service of ['Data', 'Voice', 'Sms'] as const) {
        for (const pct of PERCENTAGES) {
          const key = `${period}${service}Threshold${pct}`;
          if (v[key] !== null && v[key] !== undefined && v[key] !== '') {
            payload[key] = Number(v[key]);
          }
        }
      }
    }
    return payload;
  }

  thresholdLabel(period: string, service: string, pct: number): string {
    return `${period === 'daily' ? 'Daily' : 'Monthly'} ${service} ${pct}%`;
  }

  alarmDetailEntries(): { key: string; value: any }[] {
    if (!this.selectedAlarm) return [];
    const skip = new Set(['id', 'name', 'description']);
    return Object.entries(this.selectedAlarm)
      .filter(([k, v]) => !skip.has(k) && v !== null && v !== undefined)
      .map(([k, v]) => ({ key: k, value: v }));
  }
}
