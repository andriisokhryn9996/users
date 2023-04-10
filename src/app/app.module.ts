import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import {DxBulletModule, DxTemplateModule, DxTreeListModule} from "devextreme-angular";
import {UserService} from "./services/user.service";
import { UserTableComponent } from './ components/user-table/user-table.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { AboutComponent } from './ components/about/about.component';
import {PersistanceService} from "./services/persistance.service";
import { FilterComponent } from './ components/filter/filter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './ components/header/header.component';

const routes: Routes = [
  { path: '', component: UserTableComponent },
  { path: 'about', component: AboutComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    AboutComponent,
    FilterComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxTreeListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, PersistanceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
