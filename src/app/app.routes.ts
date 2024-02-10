import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { PaginaVendaComponent } from './components/pagina-venda/pagina-venda.component';
import { ChecklistComponent } from './components/checklist/checklist.component';

const routes: Routes = [
    { path: 'vendas', component: PaginaVendaComponent },
    { path: 'checklist', component: ChecklistComponent }
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })


export default routes;
