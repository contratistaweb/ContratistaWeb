import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeoService } from 'src/app/services/seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private title: Title,
    private seo: SeoService
    ) { }

  ngOnInit() {
    let t:string = "Contratista Web | Contactenos";
    this.title.setTitle(t);

    this.seo.generateTags({
      title: "Contratista Web | Contactenos",
      description: "Contactenos y permitanos conocer las necesidades de su proyecto web",
      slug: "contact"
    })
  }

  contact(contactForm: NgForm){}
}
