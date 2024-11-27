import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRafflesResolver } from '../../core/resolvers/client-raffles.resolver';

const routes: Routes = [
  {
    path: 'raffle/:id',
    loadComponent: () => import('./components/pages/landing/landing.component').then(c => c.LandingComponent),
    // resolve: {
    //   raffle: ClientRafflesResolver
    // }
  },
  {
    path: 'payment',
    loadComponent: () => import('./components/pages/payment/payment.component').then(c => c.PaymentComponent),

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }