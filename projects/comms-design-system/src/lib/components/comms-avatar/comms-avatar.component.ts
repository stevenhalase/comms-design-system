import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export enum CommsAvatarSizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

@Component({
  selector: 'comms-avatar',
  templateUrl: './comms-avatar.component.html',
  styleUrls: ['./comms-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsAvatarComponent {
  @Input() imageUrl: string = '';
  @Input() size = CommsAvatarSizeEnum.LARGE;
}
