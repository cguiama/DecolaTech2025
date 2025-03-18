import { Component, Input } from '@angular/core';
import {InsideSmallCardComponent} from '../../big-card/inside-small-card/inside-small-card.component';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [InsideSmallCardComponent],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
}
