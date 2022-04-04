import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export enum CommsButtonSizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  BLOCK = 'block',
}

@Component({
  selector: 'comms-button',
  templateUrl: './comms-button.component.html',
  styleUrls: ['./comms-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsButtonComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Input() primary? = false;
  @Input() menu? = false;
  @Input() active? = false;
  @Input() size? = CommsButtonSizeEnum.MEDIUM;
  @Input() text? = false;
  @Input() border? = true;

  @Output() click = new EventEmitter<Event>();
}
