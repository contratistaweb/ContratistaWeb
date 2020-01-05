import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError: any;
  constructor(
    private auth: AuthService,
    private title: Title,
    private seo: SeoService
    ) { }

  ngOnInit() {
    let t:string = "Contratista Web | Inicie Sesion";
    this.title.setTitle(t);

    this.seo.generateTags({
      title: "Contratista Web | Iniciar Sesion",
      description: "Inicie sesion en nuestro sitio",
      slug: "login"
    })
  

    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  login(loginForm: NgForm){
    this.auth.login(loginForm.value.email, loginForm.value.password);
  }

  
}
