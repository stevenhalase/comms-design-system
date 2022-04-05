import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommsAvatarSizeEnum } from '../comms-avatar/comms-avatar.component';

export enum CommsMessageTypeEnum {
  OUTGOING = 'outgoing',
  INCOMING = 'incoming',
}

@Component({
  selector: 'comms-message',
  templateUrl: './comms-message.component.html',
  styleUrls: ['./comms-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsMessageComponent {
  CommsMessageTypeEnum = CommsMessageTypeEnum;
  CommsAvatarSizeEnum = CommsAvatarSizeEnum;

  @Input() userImageUrl = '';
  @Input() text? = '';
  @Input() date?: Date;
  @Input() type? = CommsMessageTypeEnum.OUTGOING;
}
