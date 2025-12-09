import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, RouterModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  seePassword: boolean = false;
  togglePassword() {
    this.seePassword = !this.seePassword;
  }
}
