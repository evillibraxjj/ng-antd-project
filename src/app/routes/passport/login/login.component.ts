import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService, UserModel } from '@service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  validateForm!: FormGroup;
  userModel: UserModel = {
    account: '',
    password: '',
    remember: true,
  };

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.authService.logout();
    this.validateForm = this.fb.group(this.userModel);
  }

  submitForm(): void {
    const { valid, value, controls } = this.validateForm;
    if (valid) return this.authService.login(value);
    Object.values(controls).forEach((control) => {
      if (!control.invalid) return;
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    });
  }
}
