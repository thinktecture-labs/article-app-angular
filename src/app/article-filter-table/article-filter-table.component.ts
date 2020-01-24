import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-filter-table',
  templateUrl: './article-filter-table.component.html',
})
export class ArticleFilterTableComponent implements OnInit {
  public searchQueryUpdated = new BehaviorSubject('');
  public articles$: Observable<Article[]>;

  constructor(private readonly articleService: ArticleService) { }

  public ngOnInit(): void {
    this.articles$ = this.searchQueryUpdated.pipe(
      debounceTime(500),
      switchMap(query => this.articleService.search(query)),
    );
  }
}
