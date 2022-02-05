import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../_helpers/must-match.validator';

@Component({
  selector: 'app-user-draft',
  templateUrl: './user-draft.component.html',
  styleUrls: ['./user-draft.component.scss']
})
export class UserDraftComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router:Router) {
    this.formGroup = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  ngOnInit(): void {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    localStorage.setItem('user_data', JSON.stringify(this.formGroup.value, null, 2))
    this.router.navigateByUrl('user-draft-view')
    console.log(JSON.stringify(this.formGroup.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.formGroup.reset();
  }
}