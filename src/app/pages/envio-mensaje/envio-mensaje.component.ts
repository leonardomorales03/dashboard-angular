import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendMessage } from 'src/app/shared/models/send-message';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ParameterService } from 'src/app/shared/services/parameter.service';

@Component({
  selector: 'app-envio-mensaje',
  templateUrl: './envio-mensaje.component.html',
  styleUrls: ['./envio-mensaje.component.css']
})
export class EnvioMensajeComponent implements OnInit {

  sendMessage: SendMessage;

  constructor(  private parameterService : ParameterService,
                private modalService: ModalService,
                private router: Router,) { }

  ngOnInit() {
    this.sendMessage = new SendMessage();
    this.modalService.openModalMensaje();
  }

  closeModal(){
    this.modalService.closeModalMensaje();
    this.router.navigate(['/bells']);
  }

  sendMess(){
    console.log('mensaje', this.sendMessage);
    this.parameterService.sendMessage(this.sendMessage).subscribe(
      data => {
        console.log('respuesta de envio de mensaje', data);
        this.router.navigate(['/bells']);
      }
    )
  }

}
