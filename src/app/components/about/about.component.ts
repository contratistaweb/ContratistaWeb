import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Services } from 'src/app/models/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  servicesList:Services[];
  constructor(private dataService:DataService) { }

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
