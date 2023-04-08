import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import {HttpClient} from "@angular/common/http";
import {GetUserResponseInterface} from "../types/get-user-response.interface";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'
import {environment} from "../../environments/environment";
import {PersistanceService} from "./persistance.service";

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private persistanceService: PersistanceService) {
  }

  getUrlWithFilter(): string {
    const gender = this.persistanceService.get('gender')
    return gender ? `&gender=${gender}` : '&seed=test'
  }
  getUsers(): Observable<GetUserResponseInterface> {
    // gender=male
     const url = `${environment.apiUrl}?results=${environment.limit}${this.getUrlWithFilter()}`
     return this.http.get<GetUserResponseInterface>(url)
  }
}
