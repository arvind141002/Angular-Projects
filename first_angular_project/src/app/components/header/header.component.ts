import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  title: string = 'UserData-Collector';
  showAddUser: boolean = false;
  subscription!: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showAddUser = value)
  }

  ngOnInit(): void {
  }

  toggleAddData(){
    this.uiService.toggleAddUser();
  }

}
