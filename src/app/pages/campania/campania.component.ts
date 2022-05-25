import { Component, OnInit } from '@angular/core';
import { CampaniaDetalle } from 'src/app/shared/models/campania-detalle';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ParameterService } from 'src/app/shared/services/parameter.service';

@Component({
  selector: 'app-campania',
  templateUrl: './campania.component.html',
  styleUrls: ['./campania.component.css']
})
export class CampaniaComponent implements OnInit {

  campaingList = [];
  campSeleccionado: CampaniaDetalle;

  constructor(  private parameterService : ParameterService,
                private modalService: ModalService,) { }

  ngOnInit() {
    this.campSeleccionado = new CampaniaDetalle();
    this.getListCampaing();
  }


  getListCampaing(){
    this.parameterService.getListCampaign().subscribe(
      data => {
        this.campaingList = data;
        console.log('lista de campañas', data);
      }
    )

  }

  openModal(){
    this.modalService.openModalCamp();
  }

}
