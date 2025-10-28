import { Component } from '@angular/core';
import { BalanceCard } from './features/home/components/balance-card/balance-card';

@Component({
  selector: 'app-home',
  imports: [BalanceCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
