import { Component, Input } from '@angular/core';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input()
  profile: {
[x: string]: any;
    fname: string,
    lname: string, 
    role: string, 
    img: string, 
    fb: string, 
    twitter: string, 
    google:string,
    linkedIn: string
  };
}
