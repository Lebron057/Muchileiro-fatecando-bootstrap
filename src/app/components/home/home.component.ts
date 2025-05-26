import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

/* Eu fiz com base nos slides*/
  isAtivo = false;

  toggleAtivo(): void {
    this.isAtivo = !this.isAtivo
  }
  
/* ChatGPT */  
  itemAtivo: string = ''

  selecionarItem(item: string): void {
    this.itemAtivo = item;
  }
}
