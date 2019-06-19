import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppService } from 'src/app/app.service.js';
import rulesData from '../../../../data/rules.json';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Output() route = new EventEmitter <number>();

  firstRoute = 1;
  lastRoute = rulesData.rules.length;

  /**
   * constructor
   * @param appService - application singleton
   * @param router - navigation and url data
   */
  constructor(
    public appService: AppService,
    private router: Router
  ) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects.split('/')[1] === 'rule') {
        this.appService.routeNumber = Number(event.urlAfterRedirects.split('/')[2]);
      }
    });
  }

  /**
   * pagination action
   * @param direction - which way the router should go
   */
  paginate(direction: string) {
    const routeNumber = this.appService.routeNumber + (direction === 'desc' ? -1 : +1);
    // Send route number to parent component
    this.route.emit(routeNumber);
  }

}
