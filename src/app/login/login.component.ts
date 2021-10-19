import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassdataService } from '../passdata.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:PassdataService,private authGuardService: AuthService) { }

  ngOnInit(): void {
  }

  username = "Vamsi1810"
  password = "password"

  onClickSubmit(data: { uname: string; pswd: string; }){
    if(data.uname===this.username && data.pswd===this.password){
      this.authGuardService.isLoggedIn = !this.authGuardService.isLoggedIn
      this.service.Username = this.username
      this.router.navigate(['/cart']);
    }
  }
  get loggedIn () {
    return this.authGuardService.isLoggedIn;
  };

}
