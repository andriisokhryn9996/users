import {Component, HostBinding, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit{
  usersList: any[] = []

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers(1).subscribe(data => {
      this.usersList = data.results
      console.log(this.usersList)
    })
  }

  fullName(rowData: any): string{
    return `${rowData.name.first} ${rowData.name.last}`;
  }

  getPicture(rowData: any): string {
    return rowData.picture.large
  }

}
