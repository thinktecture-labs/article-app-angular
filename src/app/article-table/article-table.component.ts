import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
})
export class ArticleTableComponent implements OnInit {
  public articles: Article[];

  constructor(private readonly articleService: ArticleService) {
  }

  async ngOnInit(): Promise<void> {
    this.articles = await this.articleService.getAll();
  }
}
