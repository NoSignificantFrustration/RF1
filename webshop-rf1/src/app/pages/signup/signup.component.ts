import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  async signup() {
    try {
      const userCredential = await this.authService.signup(
        this.email,
        this.password
      );
      // User successfully signed up
      console.log(userCredential);
      this.errorMessage = '';
    } catch (error) {
      // Handle signup errors
      console.error('Unknown error:', error);
      this.errorMessage = 'An unknown error occurred.';
    }
  }

}
