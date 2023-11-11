import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  host: {
    '[class]': `hostClass`,
  },
})
export class DsCounter {

  @Input() variant: 'primary' | 'secondary' = 'primary';

  get hostClass(): string {
    return `${this.variant}`;
  }
}
