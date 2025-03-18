import { Component } from '@angular/core';
import { SmallCardComponent } from './small-card/small-card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [SmallCardComponent, ButtonComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {}
