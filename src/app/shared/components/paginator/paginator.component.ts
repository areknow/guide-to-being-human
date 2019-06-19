import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import rulesData from '../../../../data/rules.json';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Output() route = new EventEmitter <number>();

  routeId: number;
  firstRoute = 1;
  lastRoute = rulesData.rules.length;

  /**
   * constructor
   * @param router - navigation and url data
   */
  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.routeId = Number(event.urlAfterRedirects.split('/')[2]);
    });
  }

  /**
   * pagination action
   * @param direction - which way the router should go
   */
  paginate(direction: string) {
    const routeNumber = this.routeId + (direction === 'desc' ? -1 : +1);
    // Send route number to parent component
    this.route.emit(routeNumber);
  }

}
