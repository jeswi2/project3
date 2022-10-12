import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datalink',
  templateUrl: './datalink.component.html',
  styleUrls: ['./datalink.component.css']
})
export class DatalinkComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewdata().subscribe(
      (data)=>{
        this.apidata=data
      }
    )
  }

  apidata:any=[]
 

  ngOnInit(): void {
  }

}
