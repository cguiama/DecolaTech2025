import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { LifeCicleHooksComponent } from './life-cicle-hooks/life-cicle-hooks.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TitleComponent, LifeCicleHooksComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'life-cicle';
}
