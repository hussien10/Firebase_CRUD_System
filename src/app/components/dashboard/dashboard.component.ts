import { Route, Router } from '@angular/router';
import { DataService } from './../../shared/data.service';
import { Student } from './../../model/student';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
students!:Student[]
studentObj:Student={
  id : '',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
}
id!:string;
firstName!:string;
lastName!:string;
email!:string;
phone!:string;
  constructor(private _AuthService:AuthService, private _DataService:DataService, private _router:Router) { }

  ngOnInit(): void {
    this.getAllStudents()
  }
  logout(){
    this._AuthService.signout()
  }
  getAllStudents(){
    this._DataService.getAllStudents().subscribe(res=>{
      this.students=res.map((student : any)=>{
        const data=student.payload.doc.data()
        data.id=student.payload.doc.id
        return data
      })
    },err=>{
      return err.message
    })
  }
  resetForm(){
    this.studentObj.id=''
    this.studentObj.firstName=''
    this.studentObj.lastName=''
    this.studentObj.email=''
    this.studentObj.phone=''
  }
  addStudent(){

   if(this.firstName==''||this.lastName==''||this.email==''|| this.phone==''){
    alert('fill all fields')
    return;
   }
   this.studentObj.id=''
   this.studentObj.firstName=this.firstName
   this.studentObj.lastName=this.lastName
   this.studentObj.email=this.email
   this.studentObj.phone=this.phone
   this._DataService.addStudent(this.studentObj)
this.resetForm()
  }

  // updateStudent(student:Student){
  //   this.deleteStudent(student)
  //   this.addStudent()
  // }
  deleteStudent(student:Student){
    if(window.confirm(`you sure you want to delete ${student.firstName + "" +student.lastName + "?"}`)){
      this._DataService.deleteStudent(student)
    }
  }

  singleStudent(id:string){
    this._router.navigate(["student",id])
  }
}
