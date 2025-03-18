import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
})
export class CardComponent implements OnInit {
  produtos: string[] = [];

  constructor() {
    this.produtos = ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4'];
  }
  ngOnInit(): void {}
}
