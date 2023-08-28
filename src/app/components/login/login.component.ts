import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string=''
  password:string=''
  constructor(private _AuthService:AuthService) { }
  login(){
    if(this.email==''){
      alert('pls enter email')
      return;
    }
    if(this.password==''){
      alert('pls enter password')
      return;
    }
    this._AuthService.login(this.email,this.password)
    this.email=''
    this.password=''
  }
  signWithGoogle(){
    this._AuthService.signWithGoogle()
  }

  ngOnInit(): void {
  }

}
