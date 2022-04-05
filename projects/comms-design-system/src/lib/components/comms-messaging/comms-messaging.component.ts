import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommsMessageTypeEnum } from '../comms-message/comms-message.component';

export interface CommsMessageInterface {
  userImageUrl: string;
  text: string;
  date: Date;
  type: CommsMessageTypeEnum;
}

@Component({
  selector: 'comms-messaging',
  templateUrl: './comms-messaging.component.html',
  styleUrls: ['./comms-messaging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsMessagingComponent {
  @Input() messages: CommsMessageInterface[] = [];
}
