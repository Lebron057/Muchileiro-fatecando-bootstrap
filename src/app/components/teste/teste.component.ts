import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  imports: [CommonModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})

export class TesteComponent {
  visibilidadeSenha = false;
  mostrarTexto = false;

  mostrarSenha(): void {
    this.visibilidadeSenha = !this.visibilidadeSenha;
  }

  tornarTextoVisivel(): void {
    this.mostrarTexto = !this.mostrarTexto;
  }

  /*  nomeLista = [
        {variavel: valor_variavel},
        {variavel: valor_variavel}
      ]
  */

  alunos = [
    {nome: 'joao', idade: 15},
    {nome: 'bia', idade: 20},
    {nome: 'jesus', idade: 2025}
  ]

  isAtivo = false;

  toggleAtivo(): void {
    this.isAtivo = !this.isAtivo;
  }

}
