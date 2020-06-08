import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './portafolio.component';
import { BioComponent } from './bio/bio.component';


const routes: Routes = [
  {
    path: '',
    component: PortafolioComponent
  },
  {
    path: 'bio',
    component: BioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
