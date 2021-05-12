import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClientePagamentoComponent } from './components/cliente/cliente-pagamento/cliente-pagamento.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { HomeComponent } from './views/home/home.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { VendedorCrudComponent } from './views/vendedor-crud/vendedor-crud.component';
import { VendedorDeleteComponent } from './components/vendedor/vendedor-delete/vendedor-delete.component';
import { VendedorUpdateComponent } from './components/vendedor/vendedor-update/vendedor-update.component';
import { VendedorCreateComponent } from './components/vendedor/vendedor-create/vendedor-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "vendedor",
  component: VendedorCrudComponent
}, {
  path: "vendedor/create",
  component: VendedorCreateComponent
}, {
  path: "vendedor/update/:id",
  component: VendedorUpdateComponent
}, {
  path: "vendedor/delete/:id",
  component: VendedorDeleteComponent
}, {
  path: "cliente",
  component: ClienteCrudComponent
}, {
  path: "cliente/create",
  component: ClienteCreateComponent
}, {
  path: "cliente/update/:id",
  component: ClienteUpdateComponent
}, {
  path: "cliente/pagamento/:id",
  component: ClientePagamentoComponent
}, {
  path: "cliente/delete/:id",
  component: ClienteDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
