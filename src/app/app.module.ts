import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ArticleTableComponent } from './article-table/article-table.component';
import { AppComponent } from './app.component';
import { DemoSelectorComponent } from './demo-selector/demo-selector.component';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoSelectorComponent,
    BindingsComponent,
    ArticleTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
