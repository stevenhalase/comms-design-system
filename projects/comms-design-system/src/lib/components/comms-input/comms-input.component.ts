import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum CommsInputTypeEnum {
  TEXT = 'text',
  NUMBER = 'number',
  PASSWORD = 'password',
}

@Component({
  selector: 'comms-input',
  templateUrl: './comms-input.component.html',
  styleUrls: ['./comms-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CommsInputComponent,
    },
  ],
})
export class CommsInputComponent implements ControlValueAccessor, OnInit {
  @Input() type = CommsInputTypeEnum.TEXT;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() value?: string;
  @Input() icon?: string;

  touched = false;
  disabled = false;

  ngOnInit(): void {
    this.registerOnChange(this.onChange);
    this.registerOnTouched(this.onTouched);
  }

  change(event: any) {
    this.markAsTouched();
    this.onChange(event.target.value);
  }

  onChange(value: any) {}
  onTouched() {}

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
