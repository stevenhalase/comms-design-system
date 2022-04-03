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
  DEFAULT_SIZE = CommsButtonSizeEnum.MEDIUM;

  @Input() label?: string;
  @Input() icon?: string;
  @Input() primary?: boolean;
  @Input() size?: CommsButtonSizeEnum;
  @Input() text?: boolean;

  @Output() click = new EventEmitter<Event>();
}
