import { Component } from '@angular/core';
import { ListaComponent } from '../../features/lista.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ListaComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
