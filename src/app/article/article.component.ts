import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor() {}

  @Input() article: Article = new Article('default', 'default', -1);

  ngOnInit(): void {}

  upVote() {
    this.article.upVote();
  }

  downVote() {
    this.article.downVote();
  }
}
