import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable, Subject } from 'rxjs';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  list$: Subject<User[]> = this.userService.list$;
  
  columns: {key: string, title: string}[] = [
    {key: 'id', title: 'ID'},
    { key: 'isActive', title: 'Active'},
    { key: 'age', title: 'Age'},
    // { key: 'name', subKey: 'first', title: 'FirstName'},
    // { key: 'name', subKey: 'last', title: 'LastName'},
    { key: 'name', title: 'Name'},
    { key: 'company', title: 'Company'},
    { key: 'email', title: 'Email'},
    { key: 'address', title: 'Address'}
  ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.get();
  }

  delete(user: User) {
    this.userService.delete(user).subscribe(
      response => console.log(response)
    );
  }

}
