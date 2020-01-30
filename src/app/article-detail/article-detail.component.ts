import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
  public categoryChange$ = new Subject<string>();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly articleService: ArticleService,
    private readonly categoryService: CategoryService,
  ) {
  }

  public ngOnInit(): void {
    this.article$ = this.activatedRoute.params.pipe(
      switchMap(params => this.articleService.get(params.id)),
    );

    this.categories$ = this.categoryService.getCategories();

    const articleCategory$ = this.article$.pipe(map(article => article.category));
    this.subcategories$ = merge(articleCategory$, this.categoryChange$).pipe(
      switchMap(categoryId => this.categoryService.getSubcategories(categoryId)),
    );
  }

  public changeCategory(category: string): void {
    this.categoryChange$.next(category);
  }
}
