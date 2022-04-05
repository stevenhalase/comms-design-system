import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { CommsButtonSizeEnum } from '../comms-button/comms-button.component';
import { CommsInputTypeEnum } from '../comms-input/comms-input.component';

@Component({
  selector: 'comms-sign-up',
  templateUrl: './comms-sign-up.component.html',
  styleUrls: ['./comms-sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsSignUpComponent implements OnInit {
  CommsInputTypeEnum = CommsInputTypeEnum;
  CommsButtonSizeEnum = CommsButtonSizeEnum;

  @Output() change = new EventEmitter<any>();
  @Output() signUp = new EventEmitter<any>();
  @Output() signIn = new EventEmitter<void>();

  signUpForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  ngOnInit(): void {
    this.signUpForm.valueChanges.subscribe((form) => this.change.emit(form));
  }

  handleSignUp() {
    this.signUpForm.valueChanges
      .pipe(take(1))
      .subscribe((form) => this.signUp.emit(form));
  }
}
