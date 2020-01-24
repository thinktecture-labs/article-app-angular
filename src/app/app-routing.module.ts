import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoSelectorComponent } from './demo-selector/demo-selector.component';


const routes: Routes = [{
  path: '',
  component: DemoSelectorComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
