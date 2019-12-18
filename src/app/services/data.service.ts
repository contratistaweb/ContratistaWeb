import { Injectable } from '@angular/core';
import { Services } from '../models/services';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Users } from '../models/users';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedService:Services = new Services();
  servicesList:AngularFireList<any>;
  selectedUser:Users = new Users();
  usersList:AngularFireList<any>;
  service:Services;
  user:Users;

  constructor( 
    private data: AngularFireDatabase,
    private router: Router) {  }

  // ***   Funciones de Servicios   ***
  getServices(){
    return this.servicesList = this.data.list('services');
  }

  insertService(service:Services){
    this.servicesList.push({
      title: service.title,
      category: service.category,
      small_desc: service.small_desc,
      large_desc: service.large_desc,
      img: service.img,
      price: service.price
    });
  }

  updateService(service:Services){
    this.servicesList.update(service.$key, {
      title: service.title,
      category: service.category,
      small_desc: service.small_desc,
      large_desc: service.large_desc,
      img: service.img,
      price: service.price
    });
  }

  deleteService($key:string){
    this.servicesList.remove($key);
  }

  //   ***   Funciones de Usuario   ***
  getUsers(){
    return this.usersList = this.data.list('Users');
  }

  insertUser(user:Users){
    this.usersList.push({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role
    });
  }

  updateUser(user:Users){
    this.usersList.update(user.$id, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role
    });
  }
  
  deleteUser($id:string){
    this.usersList.remove($id);
  }
}
