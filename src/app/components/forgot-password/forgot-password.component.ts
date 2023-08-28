import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email:string=''
  constructor(private _AngularFireAuth:AngularFireAuth,private _AuthService:AuthService) { }

  ngOnInit(): void {
  }
  forgotpassword(email:string){
    this._AuthService.forgotpassword(this.email)
  }
}
