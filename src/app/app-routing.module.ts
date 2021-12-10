import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { IndexBlackComponent } from './components/index-black/index-black.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos',component:ListarProdutosComponent},
  {path:'produtos/cadastrar',component:CadastrarProdutoComponent},
  {path:'produtos/atualizar/:id', component:AtualizarProdutoComponent},
  {path:'index-black', component:IndexBlackComponent},
  {path:'carrinho', component:CarrinhoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
