import { Component, OnInit } from '@angular/core';
import { UserDetalle } from 'src/app/shared/models/user-detalle.mdel';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ParameterService } from 'src/app/shared/services/parameter.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  userList = [];
  userSeleccionado: UserDetalle;

  constructor(  private parameterService : ParameterService,
                private modalService: ModalService,) { }

  ngOnInit() {
    this.userSeleccionado = new UserDetalle();
    this.getListUsers();
  }


  getListUsers(){
    this.parameterService.listUser().subscribe(
      data => {
        this.userList = data.message;
        console.log('lista de usuarios', this.userList)
      }
    )

  }

  openModal(user){
    this.modalService.openModal();
    console.log('usuario editar', user);
    if(user === null){
      this.userSeleccionado = new UserDetalle();
      console.log('entro usuario id');
    }else{
      this.userSeleccionado = user;
      this.userSeleccionado.state = true;
      console.log('entro usuario para enviar');
    }

    console.log('usuario editar seleccionado', this.userSeleccionado);
    
  }

}
