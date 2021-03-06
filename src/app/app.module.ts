import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ArticleTableComponent } from './article-table/article-table.component';
import { AppComponent } from './app.component';
import { DemoSelectorComponent } from './demo-selector/demo-selector.component';
import { BindingsComponent } from './bindings/bindings.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabControlComponent } from './tabs/tab-control/tab-control.component';
import { TabItemComponent } from './tabs/tab-item/tab-item.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleFilterTableComponent } from './article-filter-table/article-filter-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleThirdPartyTableComponent } from './article-third-party-table/article-third-party-table.component';
import { VatPipe } from './bindings/vat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoSelectorComponent,
    BindingsComponent,
    ArticleTableComponent,
    TabsComponent,
    TabControlComponent,
    TabItemComponent,
    ArticleDetailComponent,
    ArticleFilterTableComponent,
    ArticleThirdPartyTableComponent,
    VatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
