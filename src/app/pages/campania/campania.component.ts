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
    //this.campSeleccionado = new CampaniaDetalle();
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

  openModal(campId){
    this.modalService.openModalCamp();
    if(campId === null){
      this.campSeleccionado = new CampaniaDetalle();
    }else{
      this.parameterService.getCampign(campId).subscribe(
        data => {
          console.log('campaña seleccionada', data)
          this.campSeleccionado = data;
          this.campSeleccionado.initial_date = data.initial_date.split('T')[0];
          this.campSeleccionado.end_date = data.end_date.split('T')[0];
          console.log('campaña seleccionada final', this.campSeleccionado)
        }
      )
    }
  }

}
