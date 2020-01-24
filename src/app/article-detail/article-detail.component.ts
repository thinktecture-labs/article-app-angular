import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Article } from '../models/article';
import { Category } from '../models/category';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent implements OnInit {
  public article$: Observable<Article>;
  public categories$: Observable<Category[]>;
  public subcategories$: Observable<Category[]>;
  public categoryChange = new ReplaySubject<string>(1);

  // TODO: Rx-ify

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly articleService: ArticleService,
    private readonly categoryService: CategoryService,
  ) {}

  public ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    this.subcategories$ = this.categoryChange.pipe(
      switchMap(id => this.categoryService.getSubcategories(id)),
    );

    this.article$ = this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.articleService.get(id)),
      tap(article => this.categoryChange.next(article.category)),
    );
  }
}
