import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shiping',
  templateUrl: './shiping.component.html',
  styleUrls: ['./shiping.component.css']
})

export class ShipingComponent {
  shippingCosts!: Observable<{type: string, price: number } []>;

  ngOnInit() :void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  constructor(
    private cartService: CartService,
    ) {}
}
