import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { LeftCardComponent } from '../../components/left-card/left-card.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      MenuBarComponent,
      MenuTitleComponent,
      LeftCardComponent,
      BigCardComponent,
      ButtonComponent,
      SectionComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
