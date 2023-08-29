import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private _DataService:DataService , private _ActivatedRoute:ActivatedRoute) {
    this.getStudent(this.id)

  }
  id=this._ActivatedRoute.snapshot.paramMap.get('id')
  data:any={}
  ngOnInit(): void {
  }
  getStudent(id:string|null){
    this._DataService.getStudent(id).subscribe(
      res=>{
        this.data=res.data()
      }
    )
  }
}
