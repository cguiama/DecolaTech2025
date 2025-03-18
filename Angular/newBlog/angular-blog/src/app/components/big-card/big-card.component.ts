import { Component } from '@angular/core';
import {InsideSmallCardComponent} from './inside-small-card/inside-small-card.component';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [InsideSmallCardComponent],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {}
