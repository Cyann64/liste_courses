import {Component} from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lstArticles = [
    {article: new Article('beurre doux', 1, 3.55)},
    {article: new Article('yahourts', 8, 2.92)},
    {article: new Article('pâtes', 1, 1.98)}
  ];
}
