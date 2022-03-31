import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum CommsButtonSizeEnum {
  SMALL = 'small',
  LARGE = 'large',
}

@Component({
  selector: 'comms-button',
  templateUrl: './comms-button.component.html',
  styleUrls: ['./comms-button.component.scss'],
})
export class CommsButtonComponent {
  @Input() label: string = 'Button';
  @Input() backgroundColor?: string;
  @Input() primary?: boolean;
  @Input() size?: CommsButtonSizeEnum;

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
