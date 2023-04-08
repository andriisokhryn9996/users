import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import {DxBulletModule, DxTemplateModule} from "devextreme-angular";
import {UserService} from "./services/user.service";
import { UserTableComponent } from './ components/user-table/user-table.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: UserTableComponent },
  { path: 'about', component: UserTableComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
