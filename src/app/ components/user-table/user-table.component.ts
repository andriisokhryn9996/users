import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, OnDestroy{
  userSubscription: Subscription | undefined
  usersList: any[] = []

  constructor(private userService: UserService) {
  }
  customizeColumns (columns: any) {
    columns[0].width = 80;
  }

  ngOnInit(): void {}

  filterEmmit($event: any): void {
    this.dataInitialize($event)
  }

  dataInitialize(x: string | undefined): void{
    this.userSubscription = this.userService.getUsers(x).subscribe(data => {
      this.usersList = data.results
    })
  }

  fullName(rowData: any): string{
    return `${rowData.name.first} ${rowData.name.last}`;
  }

  ngOnDestroy(): void {
    if(this.userSubscription) {
      this.userSubscription.unsubscribe()
    }
  }
}
