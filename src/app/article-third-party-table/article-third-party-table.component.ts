import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-third-party-table',
  templateUrl: './article-third-party-table.component.html',
})
export class ArticleThirdPartyTableComponent implements OnInit {
  public articles: Article[];
  public readonly displayedColumns = ['title', 'manufacturer', 'price'];

  constructor(private readonly articleService: ArticleService) {
  }

  public async ngOnInit(): Promise<void> {
    this.articles = await this.articleService.getAll();
  }
}
