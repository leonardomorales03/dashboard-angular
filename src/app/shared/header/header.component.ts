import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(  private authService: AuthService,
                private router: Router,) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear(); 
    //window.location.href = "/#/login";
    //this.router.navigate(['/login'])
    this.authService.logout();
  }

}
