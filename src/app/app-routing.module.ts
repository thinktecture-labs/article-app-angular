import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { DemoSelectorComponent } from './demo-selector/demo-selector.component';
import { ArticleTableComponent } from './article-table/article-table.component';


const routes: Routes = [{
  path: '',
  component: DemoSelectorComponent,
}, {
  path: 'bindings',
  component: BindingsComponent,
}, {
  path: 'articles',
  component: ArticleTableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
