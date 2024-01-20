import { Component, OnInit } from '@angular/core';
import {User} from '../../user'
import { UserService } from '../../services/user.service';
import { NgForOf } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgForOf, UserItemComponent, AddUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUserData().
    subscribe((users) => (this.users = users));
  }

  deleteUser(user: User){
    this.userService.deleteUser(user).
    subscribe(() => (this.users = this.users.filter(u => u.id !== user.id)));
  }

  toggleStatus(user: User){
    user.status = !user.status;
    this.userService.updateUserStatus(user).subscribe()
  }

  addUser(user: User){
    this.userService.addUser(user).
    subscribe((users) => (this.users.push(user)));
  }
}
