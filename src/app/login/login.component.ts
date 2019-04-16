import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/model/user';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private _admin = new User('admin', 'admin');
  private _guest = new User('guest', 'guest');

  userForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  });


  constructor(private _router:Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  onSubmit(){
    if(this.userForm.get('username').value === this._admin.getUsername() && this.userForm.get('password').value === this._admin.getPassword()){
      this._router.navigate(['home']);
    }
    if(this.userForm.get('username').value === this._guest.getUsername() && this.userForm.get('password').value === this._guest.getPassword()){
      this._router.navigate(['home']);
    }
  }

}
