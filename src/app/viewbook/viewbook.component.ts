import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.getData=data

      }
    )
  }
  getData:any=[]

  ngOnInit(): void {
  }

}
