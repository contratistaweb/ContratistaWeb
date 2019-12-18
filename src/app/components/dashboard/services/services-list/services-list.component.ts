import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Services } from 'src/app/models/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  servicesList:Services[];

  constructor(private dataService: DataService, private toastr: ToastrService) { }

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

  onEdit(service:Services){
    this.dataService.selectedService = Object.assign({}, service);
  }
  
  onDelete($key:string){
    if(confirm('¿Esta seguro de querer eliminar este servicio?')){
      this.dataService.deleteService($key);
    this.toastr.success('Operacion Exitosa', 'El servicio se ha liminado correctamente');
    }
  }

}
