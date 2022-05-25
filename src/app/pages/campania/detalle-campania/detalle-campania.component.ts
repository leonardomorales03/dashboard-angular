import { Component, Input, OnInit } from '@angular/core';
import { CampaniaDetalle } from 'src/app/shared/models/campania-detalle';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ParameterService } from 'src/app/shared/services/parameter.service';

@Component({
  selector: 'app-detalle-campania',
  templateUrl: './detalle-campania.component.html',
  styleUrls: ['./detalle-campania.component.css']
})
export class DetalleCampaniaComponent implements OnInit {

  @Input() campDetail: CampaniaDetalle; 

  paramTypeList = [];
  paramList = [];

  constructor(  private parameterService : ParameterService,
                private modalService: ModalService,) { }

  ngOnInit() {
    this.getListParameterType();
  }

  closeModal(){
    this.modalService.closeModalCamp();
  }

  saveCamp(){
    this.campDetail.user_id = "63805630-d9e8-11ec-85cc-02a997c110f8";
    console.log('guardar usuario', this.campDetail);
  }

  getListParameterType(){
    this.parameterService.listTypeParameter().subscribe(
      data => {
        this.paramTypeList = data.message;
        console.log('lista tipo de parametros', this.paramTypeList)
      }
    )

  }

  showParam(id: string){
    this.parameterService.listParameter(id).subscribe(
      data => {
        this.paramList = data.message;
        console.log('lista de parametros', this.paramList)
      }
    )
  }

}
