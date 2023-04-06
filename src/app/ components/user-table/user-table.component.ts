import {Component, HostBinding, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit{
  dataSource: any[] = [
    { name: 'John Doe', age: 33, email: 'johndoe@example.com' },
    { name: 'Jane Smith', age: 27, email: 'janesmith@example.com' },
    { name: 'Bob Johnson', age: 55, email: 'bobjohnson@example.com' }
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers(1).subscribe(e => {
      console.log(e)
    })
  }
}
