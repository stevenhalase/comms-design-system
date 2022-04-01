import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum CommsInputTypeEnum {
  TEXT = 'text',
  NUMBER = 'number',
}

@Component({
  selector: 'comms-input',
  templateUrl: './comms-input.component.html',
  styleUrls: ['./comms-input.component.scss'],
})
export class CommsInputComponent {
  @Input() type = CommsInputTypeEnum.TEXT;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() value?: string;

  @Output() change = new EventEmitter<Event>();
}
