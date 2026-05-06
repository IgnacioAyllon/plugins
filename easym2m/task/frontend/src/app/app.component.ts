import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { SettingsComponent } from "./features/settings/settings.component";
import { SimCardsComponent } from "./features/simcards/simcards.component";
import { AlarmsComponent } from "./features/alarms/alarms.component";
import { InvoicesComponent } from "./features/invoices/invoices.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    SettingsComponent,
    SimCardsComponent,
    AlarmsComponent,
    InvoicesComponent,
    NzSpaceModule,
    NzTabsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
}
