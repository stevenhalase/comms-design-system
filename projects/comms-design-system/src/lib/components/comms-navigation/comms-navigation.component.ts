import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommsButtonSizeEnum } from '../comms-button/comms-button.component';

export interface CommsNavigationMenuItem {
  label: string;
  icon: string;
  link: string;
  active: boolean;
}

@Component({
  selector: 'comms-navigation',
  templateUrl: './comms-navigation.component.html',
  styleUrls: ['./comms-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsNavigationComponent {
  CommsButtonSizeEnum = CommsButtonSizeEnum;

  private _menuOpen = new BehaviorSubject<boolean>(false);
  menuOpen$ = this._menuOpen.asObservable();

  @Input() menuItems: CommsNavigationMenuItem[] = [];

  openMenu() {
    this._menuOpen.next(true);
  }

  closeMenu() {
    this._menuOpen.next(false);
  }
}
