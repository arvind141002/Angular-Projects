import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Json data for the User profiles
  title = 'Task-1';
  profiles = [
    {
      fname: 'John', 
      lname:'Brista',
      role: 'Developer', 
      img: 'https://picsum.photos/130/130?image=1027', 
      fb: 'https://www.facebook.com', 
      twitter: 'https://www.twitter.com',
      google:'https://www.google.com', 
      linkedIn: 'https://www.linkedIn.com'
    },
    {
      fname: 'Patrick',
      lname:'Knott', 
      role: 'Tester', 
      img: 'https://picsum.photos/130/130?image=839', 
      fb: 'https://www.facebook.com', 
      twitter: 'https://www.twitter.com',
      google:'https://www.google.com', 
      linkedIn: 'https://www.linkedIn.com'
    },
    {
      fname: 'James',
      lname:'Ramos', 
      role: 'QA Team', 
      img: 'https://picsum.photos/130/130?image=856',  
      fb: 'https://www.facebook.com', 
      twitter: 'https://www.twitter.com',
      google:'https://www.google.com', 
      linkedIn: 'https://www.linkedIn.com'
    },
    {
      fname: 'Mary',
      lname: 'Huntly', 
      role: 'Dev atEAM', 
      img: 'https://picsum.photos/130/130?image=836', 
      fb: 'https://www.facebook.com', 
      twitter: 'https://www.twitter.com', 
      google:'https://www.google.com',
      linkedIn: 'https://www.linkedIn.com'
    },
  ]
}
