import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimCardsService, Invoice, AccountBalance } from '../../core/services/simcards.service';
import { ErrorNotificationService } from '../../core/services/error-notification.service';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFileInvoiceDollar, faWallet, faRotateRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invoices',
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzTableModule,
    NzButtonModule,
    NzSpinModule,
    NzStatisticModule,
    NzToolTipModule,
    NzDividerModule,
    NzEmptyModule,
    NzAlertModule,
    NzSelectModule,
    FontAwesomeModule,
  ],
  templateUrl: './invoices.component.html',
})
export class InvoicesComponent implements OnInit {
  protected faFileInvoiceDollar = faFileInvoiceDollar;
  protected faWallet = faWallet;
  protected faRotateRight = faRotateRight;

  // Account balance
  balance: AccountBalance | null = null;
  balanceLoading = false;
  balanceError: string | null = null;

  // Invoices
  invoices: Invoice[] = [];
  invoicesLoading = false;
  invoicesError: string | null = null;
  invoicesYear = new Date().getFullYear();
  invoicesMonth = new Date().getMonth() + 1;

  expandedRows: Set<string> = new Set();

  constructor(
    private simCardsService: SimCardsService,
    private errorNotification: ErrorNotificationService,
  ) {}

  ngOnInit(): void {
    this.loadBalance();
    this.loadInvoices();
  }

  loadBalance(): void {
    this.balanceLoading = true;
    this.balanceError = null;
    this.simCardsService.getAccountBalance().subscribe({
      next: (res) => {
        this.balance = res;
        this.balanceLoading = false;
      },
      error: (err) => {
        this.balanceLoading = false;
        const body = err.error ?? {};
        this.balanceError = body.cause || body.message || err.message || `HTTP ${err.status}`;
      }
    });
  }

  loadInvoices(): void {
    this.invoicesLoading = true;
    this.invoicesError = null;
    this.expandedRows.clear();
    this.simCardsService.listInvoices(this.invoicesYear, this.invoicesMonth).subscribe({
      next: (res) => {
        this.invoices = Array.isArray(res) ? res : [];
        this.invoicesLoading = false;
      },
      error: (err) => {
        this.invoicesLoading = false;
        const body = err.error ?? {};
        this.invoicesError = body.cause || body.message || err.message || `HTTP ${err.status}`;
      }
    });
  }

  onInvoicePeriodChange(): void {
    this.loadInvoices();
  }

  refresh(): void {
    this.loadBalance();
    this.loadInvoices();
  }

  toggleRow(number: string): void {
    if (this.expandedRows.has(number)) {
      this.expandedRows.delete(number);
    } else {
      this.expandedRows.add(number);
    }
  }

  isExpanded(number: string): boolean {
    return this.expandedRows.has(number);
  }

  invoiceTotal(invoice: Invoice): number {
    return (invoice.items ?? []).reduce((sum, item) => sum + (item.total ?? 0), 0);
  }
}
