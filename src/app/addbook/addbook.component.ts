import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private myapi: ApiService) { }

  name = ""
  author = ""
  rDate = ""
  stock = ""

  readValue = () => {
    let data = {
      "name": this.name,
      "author": this.author,
      "rDate": this.rDate,
      "stock": this.stock

    }
    console.log(data)
    this.myapi.addData(data).subscribe(
      (responce) => {
        console.log(responce)
      }
    )
    alert("ADDED")
    this.name = ""
    this.author = ""
    this.rDate = ""
    this.stock = ""
  }

  ngOnInit(): void {
  }

}
