import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public admin = new User('admin', 'admin');
  public guest = new User('guest', 'guest');

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {}

}
