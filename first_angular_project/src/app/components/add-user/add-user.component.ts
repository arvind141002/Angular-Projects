import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../user';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{
  
  @Output() onAddUser: EventEmitter<User> = new EventEmitter()
  name!: string;
  username!: string;
  phone!: string;
  status: boolean = false;
  showAddUser!: boolean;
  subscription: Subscription;

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showAddUser = value)
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.name){
      alert('Name field cannot be empty');
      return;
    }

    const newUser = {
      name : this.name,
      username : this.username,
      phone : this.phone,
      status : this.status,
    }

    this.onAddUser.emit(newUser);

    this.name = '';
    this.username = '';
    this.phone = '';
    this.status = false;
  }
}
