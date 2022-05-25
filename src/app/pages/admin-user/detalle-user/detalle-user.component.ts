import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetalle } from 'src/app/shared/models/user-detalle.mdel';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ParameterService } from 'src/app/shared/services/parameter.service';

@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.component.html',
  styleUrls: ['./detalle-user.component.css']
})
export class DetalleUserComponent implements OnInit {

  @Input() userDetail: UserDetalle; 

  constructor(  private modalService: ModalService,
                private parameterService : ParameterService,
                private router: Router,) { }

  ngOnInit() {
    //console.log('usuario', this.userDetail.user_id);
  }

  closeModal(){
    this.modalService.closeModal();
  }

  saveUser(){
    console.log('guardar usuario', this.userDetail);
    this.parameterService.setUser(this.userDetail).subscribe(
      data => {
        console.log('se guardo usuario', data)
        this.closeModal();
        this.router.navigate(['/adminUser']);
        window.location.reload();
      }
    )
  }


}
