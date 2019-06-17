import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap, Router, NavigationEnd } from '@angular/router';
import { switchMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  routeId: number;

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
    this.router.navigate([
      'rule',
      this.routeId + (direction === 'desc' ? -1 : +1)
    ]);
  }

}
