import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsTermosComponent } from "../cards-termos/cards-termos.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, CardsTermosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  
  itemAtivo: string = ''

  selecionarItem(item: string): void {
    this.itemAtivo = item;
  }

  termos = [
    { numero: 1, cor: '#D9F3D0' },
    { numero: 2, cor: '#F2E8D5' },
    { numero: 3, cor: '#B5E7B1' },
    { numero: 4, cor: '#B4E3B0' },
    { numero: 5, cor: '#FDF8C1' },
    { numero: 6, cor: '#B2C8AB' }
  ];
}
