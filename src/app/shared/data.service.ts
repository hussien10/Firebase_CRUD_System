import { Student } from './../model/student';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _AngularFirestore:AngularFirestore) { }

  // add student
  addStudent(student:Student){
    // make product id

    student.id=this._AngularFirestore.createId()
    return this._AngularFirestore.collection('/students').add(student);
  }

  // get all students

  getAllStudents(){
    return this._AngularFirestore.collection('/students').snapshotChanges();
  }
  // delete student
  deleteStudent(student:Student){
    return this._AngularFirestore.doc(`/students/${student.id}`).delete();
  }
  // update student

  updateStudent(student:Student){
    this.deleteStudent(student)
    this.addStudent(student)
  }
}
