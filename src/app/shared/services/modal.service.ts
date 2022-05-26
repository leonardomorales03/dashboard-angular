import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  modal: boolean = false;
  modalCamp: boolean = false;
  modalMensaje: boolean = false;

  constructor() { }

  openModal(){
    this.modal = true;
    console.log('entro al servicio', this.modal);
  }

  closeModal(){
    this.modal = false;
  }

  openModalCamp(){
    this.modalCamp = true;
    console.log('entro al servicio', this.modal);
  }

  closeModalCamp(){
    this.modalCamp = false;
  }

  openModalMensaje(){
    this.modalMensaje = true;
    console.log('entro al servicio mensaje', this.modal);
  }

  closeModalMensaje(){
    this.modalMensaje = false;
  }
}
