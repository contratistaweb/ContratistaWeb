import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList:Users[];

  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.dataService.getUsers()
    .snapshotChanges()
    .subscribe(item =>{
      this.usersList = [];
      item.forEach(element =>{
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.usersList.push(y as Users);
      })
    })
  }

  onEdit(user:Users){
    this.dataService.selectedUser = Object.assign({}, user);
  }
  
  onDelete($key:string){
    if(confirm('¿Esta seguro de querer eliminar este usuario?')){
      this.dataService.deleteUser($key);
    this.toastr.success('Operacion Exitosa', 'El usuario se ha liminado correctamente');
    }
  }

}
