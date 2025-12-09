import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RouterModule, CommonModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})

export class SignUp {
  seePassword: boolean = false;
  seeConfirm: boolean = false;

  togglePassword() {
    this.seePassword = !this.seePassword;
  }

  toggleConfirm() {
    this.seeConfirm = !this.seeConfirm;
  }

}
