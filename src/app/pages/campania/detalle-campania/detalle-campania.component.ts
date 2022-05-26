import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaniaDetalle } from 'src/app/shared/models/campania-detalle';
import { ParametrosCamp } from 'src/app/shared/models/parametros-camp';
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
  paramet = [];
  

  constructor(  private parameterService : ParameterService,
                private modalService: ModalService,
                private router: Router,) { }

  ngOnInit() {
    this.getListParameterType();
  }

  closeModal(){
    this.modalService.closeModalCamp();
  }

  saveCamp(){
    this.campDetail.user_id = "63805630-d9e8-11ec-85cc-02a997c110f8";
    console.log('guardar usuario', this.campDetail);
    this.parameterService.insertCampaign(this.campDetail).subscribe(
      data => {
        console.log('se guardo campaña', data)
        this.closeModal();
        this.router.navigate(['/camp']);
        window.location.reload();
      }
    )
  }

  getListParameterType(){
    this.parameterService.listTypeParameter().subscribe(
      data => {
        this.paramTypeList = data.message.filter((item) => item.id !== 'c8e12aca-d9f5-11ec-ba04-06ffa341e858');;
        console.log('lista tipo de parametros', this.paramTypeList)
      }
    )

  }

  showParam(id: string){
    this.parameterService.listParameter(id).subscribe(
      data => {
        this.paramList = data.message;
        console.log('lista de parametros', this.paramList)
        

        //console.log('comparacion', this.filterFriendsFollowing());

      }
    )
  }

  filterFriendsFollowing() {
    let amigos_filtrados = this.paramList.filter(friend=>{
       let res = this.paramet.find((following)=>{
        console.log('comparacion gggg', following.parameter_id, friend.id, following.parameter_id === friend.id);
          
            friend = friend['checkParam'] = following.parameter_id === friend.id;
          
          
  
        });
    
     });
  }


  validarParam(value, param){
    console.log('check', value.target.checked, param);

    if(value.target.checked){
      let params = new ParametrosCamp();
      params.parameter_id = param.id;
      params.type_id = param.type.id;
      params.user_id = "63805630-d9e8-11ec-85cc-02a997c110f8";
      this.paramet.push(params);
      this.campDetail.parameters = this.paramet;
    }else{
      console.log('entro false', param);
      this.paramet = this.paramet.filter((item) => item.parameter_id !== param.id);
    }
    
    console.log('LISTA', this.paramet);
  }

}
