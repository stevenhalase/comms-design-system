import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface CommsNavigationMenuItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'comms-navigation',
  templateUrl: './comms-navigation.component.html',
  styleUrls: ['./comms-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsNavigationComponent {
  @Input() menuItems: CommsNavigationMenuItem[] = [];
}
