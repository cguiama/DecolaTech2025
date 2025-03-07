import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cicle-hooks',
  imports: [],
  templateUrl: './life-cicle-hooks.component.html',
  styleUrl: './life-cicle-hooks.component.css'
})
export class LifeCicleHooksComponent implements OnInit, OnChanges{

@Input() nome:string = '';

constructor() {
	console.log('constructor');
}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('OnChanges');
	}

	ngOnInit(): void {
		console.log('OnInit');
	}
}
