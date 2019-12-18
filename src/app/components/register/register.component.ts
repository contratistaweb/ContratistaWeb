import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  role:string = 'user';
  authError: any;

  constructor(
    private auth: AuthService,
    private dataService:DataService
    ) { }

  ngOnInit() {
    this.dataService.getUsers();
    this.auth.eventAuthError$.subscribe( data =>{
      this.authError = data;
    })
  }

  register(frm){
    this.auth.register(frm.value);
  }

  onSubmit(registerForm: NgForm){
      this.dataService.insertUser(registerForm.value);
  }
  

}
