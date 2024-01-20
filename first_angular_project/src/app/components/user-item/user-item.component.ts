import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import {User} from '../../user'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit{
  
  @Input() user: User | any;
  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter();
  @Output() onToggleStatus: EventEmitter<User> = new EventEmitter();
  faTimes = faTimes;

  constructor(){}

  ngOnInit(): void {
  }

  onDelete(user: any){
    this.onDeleteUser.emit(user);
  }

  onToggle(user: any){
    this.onToggleStatus.emit(user);
  }

}
