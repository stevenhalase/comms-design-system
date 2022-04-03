import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export enum CommsLogoSizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

@Component({
  selector: 'comms-logo',
  templateUrl: './comms-logo.component.html',
  styleUrls: ['./comms-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsLogoComponent {
  @Input() logoUrl: string = '';
  @Input() size = CommsLogoSizeEnum.LARGE;
}
