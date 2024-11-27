import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Raffle } from '../../../../../core/models/raffles/raffle';
import { RaffleDetailsComponent } from "../../../../admin/components/pages/admin-layout/raffle-management/raffle-details/raffle-details.component";
import { RaffleDescriptionComponent } from "./raffle-description/raffle-description.component";
import { ShareOrdersService } from '../../../../../core/services/orders/share-orders.service';
import { TicketsSelectorComponent } from './tickets-selector/tickets-selector.component';
import { ClientImagesComponent } from './client-images/client-images.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from "../../../../admin/components/shared/header/header.component";
import { FooterComponent } from "../../../../admin/components/shared/footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ClientImagesComponent, RaffleDetailsComponent, RaffleDescriptionComponent, TicketsSelectorComponent, CartComponent, HeaderComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  raffle: Raffle = 
    {
        id: 1,
        title: "Luxury Car Giveaway",
        description: "Win a brand new luxury car! Don't miss out on this amazing opportunity.",
        startDate: new Date("2024-11-01T00:00:00Z"),
        endDate: "2024-12-01T00:00:00Z",
        status: 'ACTIVE', // assuming RaffleStatus is an enum like: 'active', 'completed', etc.
        imageKeys: ['http://localhost:4202/assets/images/sample.png'],
        ticketPrice: 50,
        availableTickets: 5000,
        soldTickets: 1500,
        totalTickets: 5000,
        revenue: 75000, // 1500 tickets sold * 50 ticket price
        associationId: 101
    };

  constructor(
    private route: ActivatedRoute,
    private shareOrdersService: ShareOrdersService
  ) {}

  setRaffle() {
    this.route.data.subscribe({
      next: (data: Data) => {
        const raffle: Raffle = data['raffle'];
        if (!raffle) return;
        this.raffle = raffle;
        this.shareOrdersService.initOrderRequest(raffle.id);
      }
    });
  }

  ngOnInit() {
   this.setRaffle();
  }
}
