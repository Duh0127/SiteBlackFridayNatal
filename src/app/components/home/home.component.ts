import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = "SSD NVME 2.0 Samsung EVO 2TB";
  nomeProduto2: string = "Memoria RAM DDR5";
  nomeProduto3: string = "Monitor Gamer 240Hz 0.5ms Gigabyte";
  //nome     tipo     nome da inicialização
  anuncio: string = `O ${this.nomeProduto} está acabando`;
  anuncio2: string = `O ${this.nomeProduto2} está acabando`;
  anuncio3: string = `O ${this.nomeProduto3} está acabando`;
  idProduto: number = 1;
  precoProduto: number = 2300.00;
  promocao: boolean = true;
  foto: string = "assets/img/samsung-970-plus-ssd-700x433.png";
  dataPromocao: string = "2021-12-27";


  constructor() {

    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

  }

  ngOnInit(): void {
  }

}
