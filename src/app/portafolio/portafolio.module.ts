import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';
import { SharedModule } from '../shared-modules';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BioComponent } from './bio/bio.component';


@NgModule({
  declarations: [
    PortafolioComponent,
    BioComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class PortafolioModule { }
