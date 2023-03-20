import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardExpansivoComponent } from './components/card-expansivo/card-expansivo.component';
import { IonicModule } from '@ionic/angular';
import { EventosService } from './components/card-expansivo/servico/eventos.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [ CardExpansivoComponent ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [CardExpansivoComponent],
  providers: [EventosService],

})
export class SharedModule { }
