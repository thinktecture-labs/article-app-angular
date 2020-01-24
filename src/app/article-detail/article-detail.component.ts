import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent implements OnInit {
  public article$: Observable<Article>;

  // TODO: Lookup
  // TODO: Dependent subcategories

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly articleService: ArticleService,
  ) {}

  public ngOnInit(): void {
    this.article$ = this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.articleService.get(id))
    );
  }
}
