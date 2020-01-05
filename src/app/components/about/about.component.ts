import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Services } from 'src/app/models/services';
import { SeoService } from 'src/app/services/seo.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  servicesList:Services[];
  constructor(
    private dataService:DataService,
    private title: Title,
    private seo: SeoService
    ) { }

  ngOnInit() {
    let t:string = "Contratista Web | ¿Quienes Somos?";
    this.title.setTitle(t);

    this.seo.generateTags({
      title: "Contratista Web | ¿Quienes Somos?",
      description: "Conozca la historia, mision y vision de nuestra empresa",
      slug: "about"
    })

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
