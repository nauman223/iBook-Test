import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-draft-view',
  templateUrl: './user-draft-view.component.html',
  styleUrls: ['./user-draft-view.component.scss']
})
export class UserDraftViewComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
    let ele = localStorage.getItem('user_data');
    console.log('ele', JSON.parse(ele));
    this.user = JSON.parse(ele);
  }

}


export interface User {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}