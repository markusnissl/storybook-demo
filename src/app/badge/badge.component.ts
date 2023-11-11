import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'ds-badge',
  standalone: true,
  imports: [NgClass],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  host: {
    '[class]': `hostClass`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsBadge {

  @Input() label: string = 'LABEL';
  @Input() variant: 'primary' | 'secondary' = 'primary';

  get hostClass(): string {
    return `${this.variant}`;
  }
}
