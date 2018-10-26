import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-lst-articles',
  templateUrl: './lst-articles.component.html',
  styleUrls: ['./lst-articles.component.scss']
})
export class LstArticlesComponent implements OnInit {

  @Input() lstArticles: Article;

  constructor() { }

  ngOnInit() {
  }

}
