import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export enum CommsBadgeTypeEnum {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

@Component({
  selector: 'comms-badge',
  templateUrl: './comms-badge.component.html',
  styleUrls: ['./comms-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsBadgeComponent {
  @Input() label: string = '';
  @Input() type? = CommsBadgeTypeEnum.DEFAULT;
}
