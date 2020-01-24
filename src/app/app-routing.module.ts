import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleThirdPartyTableComponent } from './article-third-party-table/article-third-party-table.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DemoSelectorComponent } from './demo-selector/demo-selector.component';
import { ArticleTableComponent } from './article-table/article-table.component';
import { TabsComponent } from './tabs/tabs.component';


const routes: Routes = [{
  path: '',
  component: DemoSelectorComponent,
}, {
  path: 'bindings',
  component: BindingsComponent,
}, {
  path: 'tabs',
  component: TabsComponent,
}, {
  path: 'articles',
  component: ArticleTableComponent,
}, {
  path: 'articles/:id',
  component: ArticleDetailComponent,
}, {
  path: 'articles-third-party',
  component: ArticleThirdPartyTableComponent,
}, {
  path: 'articles-third-party/:id',
  component: ArticleDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
