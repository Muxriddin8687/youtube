import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidators } from '../../middleware/password-validators';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm: FormGroup = this.forumBuilder.group({
    login: ['', [ Validators.required, Validators.email ]],
    password: [
      '',
      [
        Validators.required,
        Validators.compose([
          Validators.minLength(8),
          PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), { requiresDigit: true }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), { requiresUppercase: true }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), { requiresLowercase: true }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), { requiresSpecialChars: true }),
        ])
      ]
    ],
  });

  constructor(private loginService: LoginService,
              private router: Router,
              private forumBuilder: FormBuilder
  ) { }

  ngOnInit(): void { }


  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value);
      this.router.navigate(['main']);
      this.loginForm.reset();
    }
  }

}
