import { Injectable } from '@angular/core';
import { Services } from '../models/services';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedService:Services = new Services();
  servicesList:AngularFireList<any>;
  service:Services;

  constructor( private data: AngularFireDatabase ) {  }

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
}
