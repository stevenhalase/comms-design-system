import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'comms-search',
  templateUrl: './comms-search.component.html',
  styleUrls: ['./comms-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommsSearchComponent {
  @Input() placeholder?: string;
  @Input() value?: string;
  @Input() icon?: string;

  @Output() change = new EventEmitter<Event>();
}
