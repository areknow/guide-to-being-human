import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FadeInAnimation } from '../shared/animations/fade-in';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: FadeInAnimation
})
export class InfoComponent {

  constructor(public appService: AppService) { }
}
