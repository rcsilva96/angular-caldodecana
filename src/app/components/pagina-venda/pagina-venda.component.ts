import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-venda',
  standalone: true,
  imports: [],
  templateUrl: './pagina-venda.component.html',
  styleUrl: './pagina-venda.component.css'
})
export class PaginaVendaComponent {

  quantidadeTeste1: number = 0;
  quantidadeTeste2: number = 0; 
  quantidadeTeste3: number = 0; 
  quantidadeTeste4: number = 0;  

  precoUnitario1: number = 3.00; 
  precoUnitario2: number = 4.00; 
  precoUnitario3: number = 5.00; 
  precoUnitario4: number = 6.00; 

  totalGeral: number = 0;
  

  incrementarQuantidade1() {
    this.quantidadeTeste1++;
    this.atualizarTotalGeral();
  }

  incrementarQuantidade2() {
    this.quantidadeTeste2++;
    this.atualizarTotalGeral();
  }

  incrementarQuantidade3() {
    this.quantidadeTeste3++;
    this.atualizarTotalGeral();
  }

  incrementarQuantidade4() {
    this.quantidadeTeste4++;
    this.atualizarTotalGeral();
  }

  // decrementarQuantidade() {
  //   if (this.quantidadeTeste > 0) {
  //     this.quantidadeTeste--;
  //   }
  // }

  private atualizarTotalGeral() {
    this.totalGeral = (this.quantidadeTeste1 * this.precoUnitario1) + (this.quantidadeTeste2 * this.precoUnitario2) +(this.quantidadeTeste3 * this.precoUnitario3) +(this.quantidadeTeste4 * this.precoUnitario4);
  }

}
