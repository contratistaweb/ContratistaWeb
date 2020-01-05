import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
import { Services } from 'src/app/models/services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(public dataService:DataService, private toastr:ToastrService) { }

  ngOnInit() {
    this.dataService.getServices();
    this.resetForm(); 
  }

  onSubmit(serviceForm: NgForm){
    if(serviceForm.value.$key == null){
      this.dataService.insertService(serviceForm.value);
      this.toastr.success('Operacion Exitosa', 'Servicio Agregado Correctamente');
    }else{
      this.dataService.updateService(serviceForm.value);
      this.toastr.success('Operacion Exitosa', 'Servicio Actualizado Correctamente');
    }
    this.resetForm(serviceForm);
  
  }

  resetForm(serviceForm?: NgForm){
    if(serviceForm != null)
    serviceForm.reset(serviceForm);
    this.dataService.selectedService = new Services();
  }
}
