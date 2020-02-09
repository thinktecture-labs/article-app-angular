import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './bindings.component.html',
})
export class BindingsComponent {
  helloWorldText = 'Hello World!';
  price = 100;
}
