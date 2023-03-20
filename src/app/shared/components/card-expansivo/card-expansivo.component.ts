import { Evento } from './../../models/evento';
import { Component, Input, OnInit } from '@angular/core';
import { EventosService } from '../card-expansivo/servico/eventos.service'
import { EventosNaoEncontradosException} from '../../errors/EventosNaoEncontradosException'

@Component({
  selector: 'app-card-expansivo',
  templateUrl: './card-expansivo.component.html',
  styleUrls: ['./card-expansivo.component.scss'],
})
export class CardExpansivoComponent implements OnInit {

  @Input() titulo: string = " ";

  expandirCard: boolean = false;
  spinnerShow: boolean = true;
  listEventos: Evento[] = [];

  constructor(private eventoService: EventosService) { }

  ngOnInit() {}

  expandirCardContent(){
    this.expandirCard = !this.expandirCard;;
  }

  buscarEventosPorCidade(cidade: string){
     this.eventoService.buscarEventosPorCidade(cidade).subscribe( data => {
      const eventosEncontrados = (data as Evento[]);
      if (eventosEncontrados.length === 0) {
        throw new EventosNaoEncontradosException('Nenhum evento encontrado para a cidade especificada.');
      }
      this.listEventos = eventosEncontrados;
      console.log(this.listEventos)
      this.spinnerShow = false;
     })
  }



}
