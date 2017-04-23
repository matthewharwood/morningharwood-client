import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from "../firebase/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;


  constructor(public afService: AF, private router: Router) {}
  login() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      console.log('data', data);
      this.router.navigate(['admin/dashboard']);
    });
  }
  ngOnInit() {
  }

}
