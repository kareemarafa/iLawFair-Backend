import { Component } from '@angular/core'

@Component({
  selector: 'ionhour-prices-a',
  templateUrl: './prices-a.component.html',
  styleUrls: ['./prices-a.component.scss']
})
export class PricesAComponent {
  componentData = {
    title: 'Pricing',
    description:
      'Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.',
    items: [
      {
        title: 'Free',
        price: '$0',
        per: 'mo',
        features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
        button: {
          text: 'Sign up for free',
          action: '#',
          cssClass: 'btn-outline-primary'
        }
      },
      {
        title: 'Pro',
        price: '$15',
        per: 'mo',
        features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
        button: {
          text: 'Get started',
          action: '#',
          cssClass: 'btn-primary'
        }
      },
      {
        title: 'Enterprise',
        price: '$29',
        per: 'mo',
        features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
        button: {
          text: 'Contact us',
          action: '#',
          cssClass: 'btn-primary'
        }
      }
    ]
  }
}
