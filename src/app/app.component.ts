import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FrontdSms';
  isLoginPage = false;

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.validateLogin();
    console.log('variable componen', this.isLoginPage);
  }

  validateLogin(){
    if (!localStorage.getItem('token')) {
      this.isLoginPage = false
    }else{
      this.isLoginPage = true
    }

  }

  public viewAsLoginPage(isLoginPage) {
    this.isLoginPage = isLoginPage;
  }

















}
