import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserLoginModel } from '@models/user';
import { AuthService } from '@service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [AuthService],
})
export class LoginComponent {
  validateForm!: FormGroup;
  userModel: UserLoginModel = {
    account: '',
    password: '',
    remember: true,
  };

  get loading() {
    return this.authService.isLoading;
  }

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
