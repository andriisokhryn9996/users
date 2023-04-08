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

  ngOnInit() {
    this.dataInitialize()
  }

  dataInitialize(){
    this.userSubscription = this.userService.getUsers().subscribe(data => {
      this.usersList = data.results
      console.log(this.usersList)
    })
  }

  fullName(rowData: any): string{
    return `${rowData.name.first} ${rowData.name.last}`;
  }

  getPicture(rowData: any): string { //todo
    return rowData.picture.large
  }

  filterEmmit($event: any): void {
    console.log($event)
    this.dataInitialize()
  }

  ngOnDestroy(): void {
    if(this.userSubscription) {
      this.userSubscription.unsubscribe()
    }
  }
}
