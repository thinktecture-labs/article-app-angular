import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './bindings.component.html',
})
export class BindingsComponent {
  public helloWorldText = 'Hello World!';
  public price = 100;
}
