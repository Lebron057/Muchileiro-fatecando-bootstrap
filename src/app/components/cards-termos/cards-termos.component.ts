import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-termos',
  imports: [CommonModule],
  templateUrl: './cards-termos.component.html',
  styleUrl: './cards-termos.component.css'
})

export class CardsTermosComponent {
@Input() numeroTermo!: number;
@Input() corFundo!: string;
}
