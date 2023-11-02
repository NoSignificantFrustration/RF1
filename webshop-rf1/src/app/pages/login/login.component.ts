import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoggedIn = false;
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService){}

  async login(){
    if (this.email && this.password) {
      try {
        const userCredential = await this.authService.login(
          this.email,
          this.password
        );
        this.isLoggedIn = true;
        console.log(userCredential);
        this.errorMessage = '';
      } catch (error) {
        // Handle login errors
        console.error('Unknown error:', error);
        this.errorMessage = 'An unknown error occurred.';
      }
      this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser))
      this.router.navigateByUrl('/');

    }, error => {
      localStorage.setItem('user', JSON.stringify('null'))
      console.error(error);
    })
    }



  }

}
