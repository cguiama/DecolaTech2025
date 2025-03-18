import { Component,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked

 } from '@angular/core';

@Component({
  selector: 'app-check-events-lifecicle',
  imports: [],
  templateUrl: './check-events-lifecicle.component.html',
  styleUrl: './check-events-lifecicle.component.css'
})
export class CheckEventsLifecicleComponent
implements
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked {

	quantidade: number = 0;

	adicionar() {
		this.quantidade++;
	}
	subtrair() {
		this.quantidade--;
	}

	constructor() { }

	ngOnInit(): void {
		console.log('ngOnInit');
	}

	ngDoCheck(): void {
		console.log('ngDoCheck');
	}



	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}

	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}

	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}

	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}

}
