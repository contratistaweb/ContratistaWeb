import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Services } from 'src/app/models/services';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servicesList:Services[];
  
  constructor(private dataService:DataService) { 
  }

  ngOnInit() {
    this.dataService.getServices()
    .snapshotChanges()
    .subscribe(item =>{
      this.servicesList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.servicesList.push(x as Services);
      })
    })
  }

 

}
