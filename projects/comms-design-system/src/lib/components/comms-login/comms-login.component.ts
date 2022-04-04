import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((form) => {
      console.log('login form change:::', form);
      this.change.emit(form);
    });
  }
}
