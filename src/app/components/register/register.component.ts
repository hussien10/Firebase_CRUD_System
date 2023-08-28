import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string=''
  password:string=''
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
  }
  register(){
    if(this.email==''){
      alert('pls enter email')
      return;
    }
    if(this.password==''){
      alert('pls enter password')
      return;
    }
    this._AuthService.register(this.email,this.password)
    this.email=''
    this.password=''
  }
}
