import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }
  getUsers(page: number) {
     const url = `https://randomuser.me/api/?results=10&seed=test&page=${page}`
    return  this.http.get(url)
  }
}
