import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum CommsButtonSizeEnum {
  SMALL = 'small',
  LARGE = 'large',
  BLOCK = 'block',
}

@Component({
  selector: 'comms-button',
  templateUrl: './comms-button.component.html',
  styleUrls: ['./comms-button.component.scss'],
})
export class CommsButtonComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Input() primary?: boolean;
  @Input() size?: CommsButtonSizeEnum;

  @Output() click = new EventEmitter<Event>();
}
