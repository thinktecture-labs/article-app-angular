import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { DemoSelectorComponent } from './demo-selector/demo-selector.component';


const routes: Routes = [{
  path: '',
  component: DemoSelectorComponent,
}, {
  path: 'bindings',
  component: BindingsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
