import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { LifeCicleHooksComponent } from './life-cicle-hooks/life-cicle-hooks.component';
import {CheckEventsLifecicleComponent} from './check-events-lifecicle/check-events-lifecicle.component';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		//TitleComponent,
		//LifeCicleHooksComponent,
		CheckEventsLifecicleComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'life-cicle';
}
