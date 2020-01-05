import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Services } from 'src/app/models/services';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servicesList:Services[];
  
  constructor(
    private dataService:DataService,
    private title: Title,
    private seo: SeoService
    ) { 
  }

  ngOnInit() {
    let t:string = "Contratista Web | Pagina Principal";
    this.title.setTitle(t);

    this.seo.generateTags({
      title: "Contratista Web | Pagina Principal",
      description: "Encuentre todos los servicios que tenemos disponibles en el area de Desarrollo Web, tanto para particulares como para empresas",
      slug: "home"
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
