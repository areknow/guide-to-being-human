import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderAnimations } from './animation';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: LoaderAnimations
})
export class LoaderComponent {

  constructor(private router: Router) { }

  animDone() {
    this.router.navigate(['rule', '1']);
  }

}
