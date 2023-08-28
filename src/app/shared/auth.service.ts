import { Injectable } from '@angular/core';
import { user, GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider,TwitterAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _AuthFirAuth:AngularFireAuth,private _Router:Router) { }
  // login
  login(email:string,password:string){
    this._AuthFirAuth.signInWithEmailAndPassword(email,password).then((res)=>{
      localStorage.setItem('token','true')
      if(res.user?.emailVerified==true){
        this._Router.navigate(['/dashboard'])
      }
      else{
        this._Router.navigate(['/varifyemail'])
      }
    },err=>{
      alert('Your Credentials is Worng')
      this._Router.navigate(['/login'])
    })
  }
  // register
  register(email:string,password:string){
    this._AuthFirAuth.createUserWithEmailAndPassword(email,password).then((res)=>{
      alert('Registeration successfull')
      this.SentVarificationMail(res.user)
      this._Router.navigate(['/login'])
    },err=>{
      alert(`something went wrong ${err.message}`)
      this._Router.navigate(['/register'])
    })
  }

  // sign out
  signout(){
    this._AuthFirAuth.signOut().then(()=>{
      localStorage.removeItem('token')
      alert('you signout successfully')
      this._Router.navigate(['/login'])
    },err=>{
      alert(`something went wrong ${err.message}`)
    })
  }
  // forgot password
  forgotpassword(email:string){
    this._AuthFirAuth.sendPasswordResetEmail(email).then(()=>{
      this._Router.navigate(['/varifyemail'])
      alert('link sent successfully')
    },err=>{
      alert(`something went wrong ${err.message}`)
    })
  }

  // SentVarificationMail
  SentVarificationMail(user:any){
    user.sendEmailVerification().then((res:any)=>{
       this._Router.navigate(['/varifyemail'])
       alert('link sent successfully')

    },(err:any)=>{
      alert(`something went wrong ${err.message}`)

    })
  }


  // sing in with google

  signWithGoogle(){
    this._AuthFirAuth.signInWithPopup(new GoogleAuthProvider).then(res=>{
      this._Router.navigate(['/dashboard'])
      localStorage.setItem('token',JSON.stringify(res.user?.uid))

    },err=>{
      alert(err.message)
    })
  }

}
