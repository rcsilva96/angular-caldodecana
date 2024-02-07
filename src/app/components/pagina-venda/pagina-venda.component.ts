import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-venda',
  standalone: true,
  imports: [],
  templateUrl: './pagina-venda.component.html',
  styleUrl: './pagina-venda.component.css'
})
export class PaginaVendaComponent {

  quantidadeTeste: number = 0;

  // Função para incrementar a quantidade
  incrementarQuantidade() {
    this.quantidadeTeste++;
  }

  // Função para decrementar a quantidade
  decrementarQuantidade() {
    if (this.quantidadeTeste > 0) {
      this.quantidadeTeste--;
    }
  }

}
