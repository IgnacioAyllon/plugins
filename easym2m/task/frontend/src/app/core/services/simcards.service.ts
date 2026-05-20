import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface SimCardPageInfo {
  size: number;
  index: number;
  resultSetSize: number;
  nextIndex: number;
  totalPages: number;
}

export interface SimCard {
  iccid: string;
  alias?: string;
  imsi?: string;
  msisdn?: string;
  imei?: string;
  apn?: string;
  ip?: string;
  ipAddress?: string;
  status?: string;
  simModel?: string;
  simType?: string;
  commModuleManufacturer?: string;
  commModuleModel?: string;
  deviceManufacturer?: string;
  deviceModel?: string;
  ipConnected?: boolean;
  ipStatus?: number;
  staticIP?: string;
  sgsnIP?: string;
  ggsnIP?: string;
  gprsConnected?: boolean;
  gprsStatus?: number;
  country?: string;
  automaticLocation?: { latitude: number; longitude: number };
  latitude?: number;
  longitude?: number;
  activationDate?: string;
  provider?: string;
  // Consumption — daily
  consumptionDailyVoiceLimit?: number;
  consumptionDailyVoiceValue?: number;
  consumptionDailyVoiceThresholdReached?: number;
  consumptionDailyVoiceEnabled?: boolean;
  consumptionDailySMSLimit?: number;
  consumptionDailySMSValue?: number;
  consumptionDailySMSThresholdReached?: number;
  consumptionDailySMSEnabled?: boolean;
  consumptionDailyDataLimit?: number;
  consumptionDailyDataValue?: number;
  consumptionDailyDataThresholdReached?: number;
  consumptionDailyDataEnabled?: boolean;
  // Consumption — monthly
  consumptionMonthlyVoiceLimit?: number;
  consumptionMonthlyVoiceValue?: number;
  consumptionMonthlyVoiceThresholdReached?: number;
  consumptionMonthlyVoiceEnabled?: boolean;
  consumptionMonthlySMSLimit?: number;
  consumptionMonthlySMSValue?: number;
  consumptionMonthlySMSThresholdReached?: number;
  consumptionMonthlySMSEnabled?: boolean;
  consumptionMonthlyDataLimit?: number;
  consumptionMonthlyDataValue?: number;
  consumptionMonthlyDataThresholdReached?: number;
  consumptionMonthlyDataEnabled?: boolean;
  // Expense overages — monthly
  expenseMonthlyVoiceOverLimit?: number;
  expenseMonthlyVoiceOverValue?: number;
  expenseMonthlyVoiceOverThresholdReached?: number;
  expenseMonthlySMSOverLimit?: number;
  expenseMonthlySMSOverValue?: number;
  expenseMonthlySMSOverThresholdReached?: number;
  expenseMonthlyDataOverLimit?: number;
  expenseMonthlyDataOverValue?: number;
  expenseMonthlyDataOverThresholdReached?: number;
  expenseMonthlyTotalOverLimit?: number;
  expenseMonthlyTotalOverValue?: number;
  expenseMonthlyTotalOverThresholdReached?: number;
  // Sensitive fields (individual endpoint only)
  pin1?: string;
  pin2?: string;
  puk1?: string;
  puk2?: string;
  idAlarm?: string;
  [key: string]: any;
}

export interface SimCardsResponse {
  info: SimCardPageInfo;
  data: SimCard[];
}

export interface UpdateSimCardPayload {
  lifeCycleStatus?: 'ACTIVE' | 'TEST' | 'ACTIVATION_READY' | 'SUSPENDED';
  alias?: string;
  idAlarm: string | null;
}

export interface Alarm {
  id: string;
  name: string;
  description?: string;
  [key: string]: any;
}

export interface AlarmsResponse {
  info: SimCardPageInfo;
  data: Alarm[];
}

export interface UsageRecord {
  timeStamp?: string;
  msisdn?: string;
  icc?: string;
  imsi?: string;
  operatorNetwork?: string;
  callDetailTypeOfCall?: string;
  callDetailDuration?: string;
  callDetailDurationRounded?: string;
  callDetailCalledCallingNumber?: string;
  callDetailZone?: string;
  smsDetailDestination?: string;
  smsDetailOriginZone?: string;
  dataDetailFinalization?: string;
  dataDetailApn?: string;
  dataDetailIp?: string;
  dataDetailZone?: string;
  dataDetailUploadedDataInBytes?: number | string;
  dataDetailDownloadedDataInBytes?: number | string;
  dataDetailTransferedDataInBytes?: number | string;
  dataDetailTransferedDataRoundedInBytes?: number | string;
  [key: string]: any;
}

export interface UsageResponse {
  info: SimCardPageInfo;
  data: UsageRecord[];
}

/** Aggregated monthly stats for a SIM card (not paginated — one object per month). */
export interface SimStats {
  seconds?: number;
  calls?: number;
  sms?: number;
  uploadedBytes?: number;
  downloadedBytes?: number;
  transferedBytes?: number;
  transmissions?: number;
}

export interface SimCardBalance {
  iccid?: string;
  balance: number;
}

export interface AccountBalance {
  balance: number;
}

export interface InvoiceItem {
  qty: number;
  detail: string;
  unitPrice: number;
  total: number;
}

export interface Invoice {
  number: string;
  billPeriod: string;
  date: string;
  items: InvoiceItem[];
}

export const SIM_STATUSES: { value: string; label: string }[] = [
  { value: 'INACTIVE_NEW', label: 'Inactive (New)' },
  { value: 'TEST', label: 'Test' },
  { value: 'ACTIVATION_READY', label: 'Activation Ready' },
  { value: 'ACTIVATION_PENDANT', label: 'Activation Pending' },
  { value: 'ACTIVE', label: 'Active' },
  { value: 'DEACTIVATED', label: 'Deactivated' },
  { value: 'SUSPENDED', label: 'Suspended' },
];

@Injectable({
  providedIn: 'root'
})
export class SimCardsService {
  constructor(private http: HttpClient) {}

  listSimCards(size: number, index: number, status?: string): Observable<SimCardsResponse> {
    let params = new HttpParams()
      .set('size', size.toString())
      .set('index', index.toString());
    if (status) {
      params = params.set('status', status);
    }
    return this.http.get<SimCardsResponse>('./simcards', { params });
  }

  getSimCard(iccid: string): Observable<SimCard> {
    return this.http.get<SimCard>(`./simcard/${iccid}`);
  }

  updateSimCard(iccid: string, payload: UpdateSimCardPayload): Observable<any> {
    return this.http.put(`./simcard/${iccid}`, payload);
  }

  // ── Usage / CDR records ───────────────────────────────────────────────────

  getSimCardUsage(
    iccid: string,
    year: number,
    month: number,
    service: 'data' | 'voice' | 'sms' = 'data',
    size = 20,
    page = 1
  ): Observable<UsageResponse> {
    const params = new HttpParams()
      .set('year', year.toString())
      .set('month', month.toString())
      .set('service', service)
      .set('size', size.toString())
      .set('page', page.toString());
    return this.http.get<UsageResponse>(`./simcard/${iccid}/usage`, { params });
  }

  // ── Statistics — aggregated monthly (Telefónica only) ─────────────────────

  getSimCardStatistics(iccid: string, year: number, month: number): Observable<SimStats> {
    const params = new HttpParams()
      .set('year', year.toString())
      .set('month', month.toString());
    return this.http.get<SimStats>(`./simcard/${iccid}/statistics`, { params });
  }

  // ── SIM Balance (Telefónica only) ──────────────────────────────────────────

  getSimCardBalance(iccid: string): Observable<SimCardBalance> {
    return this.http.get<SimCardBalance>(`./simcard/${iccid}/balance`);
  }

  // ── Diagnostics (Telefónica only) ─────────────────────────────────────────

  getSimCardDiagnostics(iccid: string, type: string = 'ping'): Observable<any> {
    const params = new HttpParams().set('type', type);
    return this.http.get<any>(`./simcard/${iccid}/diagnostics`, { params });
  }

  // ── Account level ─────────────────────────────────────────────────────────

  getAccountBalance(): Observable<AccountBalance> {
    return this.http.get<AccountBalance>('./balance');
  }

  listInvoices(year: number, month: number): Observable<Invoice[]> {
    const params = new HttpParams()
      .set('year', year.toString())
      .set('month', month.toString());
    return this.http.get<Invoice[]>('./invoices', { params });
  }

  // ── Alarms ─────────────────────────────────────────────────────────────────

  listAlarms(size = 100, index = 1): Observable<AlarmsResponse> {
    const params = new HttpParams()
      .set('size', size.toString())
      .set('index', index.toString());
    return this.http.get<AlarmsResponse>('./alarms', { params });
  }

  getAlarm(id: string): Observable<Alarm> {
    return this.http.get<Alarm>(`./alarm/${id}`);
  }

  createAlarm(payload: object): Observable<{ id: string }> {
    return this.http.post<{ id: string }>('./alarm', payload);
  }

  updateAlarm(id: string, payload: object): Observable<any> {
    return this.http.put(`./alarm/${id}`, payload);
  }

  deleteAlarm(id: string): Observable<any> {
    return this.http.delete(`./alarm/${id}`);
  }

}
