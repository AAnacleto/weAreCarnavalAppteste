import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items = [ { "name": "Varejo 360",
               "img": "./assets/imagens/1.png",
               "data": " Qui, 09 Mar - 19:00",
               "local": "Sebrae - Recife"
            },
            { "name": "A Cor Purpura",
               "img": "./assets/imagens/2.png",
               "data": " Qui, 09 Mar - 19:00",
               "local": "Teatro do Parque - Recife"
            },
            { "name": "A Arte do Estoicismo",
              "img": "./assets/imagens/3.jpg",
              "data": " Qui, 09 Mar - 19:00",
              "local": "Online"
            },
            {  "name": "Terra por elas Convida",
               "img": "./assets/imagens/4.jpg",
               "data": " Qui, 09 Mar - 19:00",
               "local": "Sebrae - Recife"
            },
            { "name": "Match Hall",
               "img": "./assets/imagens/5.png",
               "data": " Qui, 09 Mar - 19:00",
               "local": "Sebrae - Recife"
            }
            ]

   programacao = [
    {
      "dia": "Quinta-feira"
    },
    {
      "dia": "Sexta-feira"
    },
    {
      "dia": "Sábado de Carnaval"
    },
    {
      "dia": "Domingo de Carnaval"
    },
    {
      "dia": "Segunda de Carnaval"
    },
    {
      "dia": "Terça feira Gorda"
    },
    {
      "dia": "Quarta-feira de Cinzas"
    }
  ]

  opts ={
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 10,
    freeMode: true
  }

  constructor() {}

}
