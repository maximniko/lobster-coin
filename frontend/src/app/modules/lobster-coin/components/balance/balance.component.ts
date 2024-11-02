import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {routeCreator} from '../../lobster-coin.routes';
import {TwaService} from '../../../../common/services/twa.service';
import {Router} from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MainComponent],
  templateUrl: './balance.component.html',
})
export class BalanceComponent implements OnInit, OnDestroy {
  constructor(
    private twa: TwaService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.twa.backButtonOnClick(() => this.goBack())
  }

  ngOnDestroy() {
    this.twa.offBackButton(() => this.goBack())
  }

  goBack() {
    this.router.navigate([routeCreator.main()])
  }
}
