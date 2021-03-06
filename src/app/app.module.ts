import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//imports do ngx-toastr
import { ToastrModule } from 'ngx-toastr';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';//imports do ngx-toastr
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IndexBlackComponent } from './components/index-black/index-black.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';



registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListarProdutosComponent,
    CadastrarProdutoComponent,
    AtualizarProdutoComponent,
    IndexBlackComponent,
    CarrinhoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,//imports do ngx-toastr
    ToastrModule.forRoot(),//imports do ngx-toastr
    SweetAlert2Module.forRoot()
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
