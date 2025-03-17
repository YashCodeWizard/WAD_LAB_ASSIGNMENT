import { Component } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private router: Router) {}
  Show(){
    this.router.navigate(['login']);
}
}