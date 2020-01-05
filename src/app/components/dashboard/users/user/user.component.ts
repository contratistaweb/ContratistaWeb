import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor(public dataService:DataService, private toastr:ToastrService) { }

  ngOnInit() {
    this.dataService.getUsers();
    this.resetForm(); 
  }

  onSubmit(userForm: NgForm){
    if(userForm.value.$key == null){
      this.dataService.insertUser(userForm.value);
      this.toastr.success('Operacion Exitosa', 'Usuario Agregado Correctamente');
    }else{
      this.dataService.updateUser(userForm.value);
      this.toastr.success('Operacion Exitosa', 'Usuario Actualizado Correctamente');
    }
    this.resetForm(userForm);
  
  }

  resetForm(userForm?: NgForm){
    if(userForm != null)
    userForm.reset(userForm);
    this.dataService.selectedUser = new Users();
  }
}
