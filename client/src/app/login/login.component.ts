import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/** TODO(Add Auth) **/
// import { AF } from "../firebase/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: any;

  // constructor(public afService: AF, private router: Router) {}
  constructor( private router: Router) {}
  login() {
    // this.afService.loginWithGoogle().then((data) => {
    //   this.router.navigate(['admin/dashboard']);
    // });
  }
}
