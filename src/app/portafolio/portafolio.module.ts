import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';
import { SharedModule } from '../shared-modules';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    PortafolioComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class PortafolioModule { }
