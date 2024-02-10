// pagina-venda.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaVendaComponent } from './pagina-venda.component';

@NgModule({
  declarations: [PaginaVendaComponent],
  imports: [CommonModule], // Certifique-se de importar o CommonModule aqui
})
export class PaginaVendaModule {}
