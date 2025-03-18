import { Component } from "@angular/core";
import { InputComponent } from '../features/lista/input/input.component';
import { ViewComponent } from '../features/lista/view/view.component';

@Component({
  selector: "app-lista",
  standalone: true,
  template: `
  <app-input></app-input>
  <app-view></app-view>
  `,
  imports: [InputComponent, ViewComponent]
})

export class ListaComponent {}
