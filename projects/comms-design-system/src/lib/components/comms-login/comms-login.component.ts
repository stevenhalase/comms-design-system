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
  selector: 'comms-login',
  templateUrl: './comms-login.component.html',
  styleUrls: ['./comms-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsLoginComponent implements OnInit {
  CommsInputTypeEnum = CommsInputTypeEnum;
  CommsButtonSizeEnum = CommsButtonSizeEnum;

  @Output() change = new EventEmitter<any>();
  @Output() signIn = new EventEmitter<any>();
  @Output() signUp = new EventEmitter<void>();

  loginForm = new FormGroup({
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
    this.loginForm.valueChanges.subscribe((form) => {
      console.log('login form change:::', form);
      this.change.emit(form);
    });
  }

  handleSignIn() {
    this.loginForm.valueChanges
      .pipe(take(1))
      .subscribe((form) => this.signIn.emit(form));
  }
}
