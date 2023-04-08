import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import {HttpClient} from "@angular/common/http";
import {GetUserResponseInterface} from "../types/get-user-response.interface";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }
  getUsers(page: number): Observable<GetUserResponseInterface> {
     const url = `https://randomuser.me/api/?results=10&seed=test&page=${page}`
     return this.http.get<GetUserResponseInterface>(url)
  }
}
