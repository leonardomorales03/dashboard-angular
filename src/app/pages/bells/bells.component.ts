import { Component, OnInit } from '@angular/core';
import { ParameterService } from 'src/app/shared/services/parameter.service';

@Component({
  selector: 'app-bells',
  templateUrl: './bells.component.html',
  styleUrls: ['./bells.component.css']
})
export class BellsComponent implements OnInit {

  paramTypeList = [];
  paramList = [];

  constructor(  private parameterService : ParameterService) { }

  ngOnInit() {

    
    this.getListParameterType();
  }

  

  getListParameterType(){
    this.parameterService.listTypeParameter().subscribe(
      data => {
        this.paramTypeList = data.message;
        console.log('lista tipo de parametros', this.paramTypeList)
      }
    )

  }


  getListParameter(id){
    this.parameterService.listParameter(id).subscribe(
      data => {
        this.paramList = data.message;
        console.log('lista de parametros', this.paramList)
      }
    )
  }









}
