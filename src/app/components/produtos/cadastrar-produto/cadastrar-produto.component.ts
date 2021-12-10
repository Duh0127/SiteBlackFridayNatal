import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: IProduto = {
    nome: "",
    dataPromocao: new Date(),
    precoProduto: 0,
    qtdade: 0
  };



  constructor(private produtosService: ProdutosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema', //titulo
        `${this.produto.nome} foi cadastrado!, ID: ${this.produto.id}`, //mensagem
        'toast-success' //tipo
      );
    });
    this.router.navigate(['/produtos']);
  }

}
