import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'comms-radio',
  templateUrl: './comms-radio.component.html',
  styleUrls: ['./comms-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsRadioComponent {
  @Input() label?: string;
  @Input() value?: boolean = false;

  @Output() change = new EventEmitter<Event>();

  localValue = this.value;

  @HostListener('click', ['$event'])
  onClick() {
    this.localValue = !this.localValue;
  }
}
