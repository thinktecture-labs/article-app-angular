import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
})
export class TabPageComponent {
  @Input() header: string;

  @ViewChild(TemplateRef, { static: true }) template: TemplateRef<any>;
}
