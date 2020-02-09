import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab-item',
  templateUrl: './tab-item.component.html',
})
export class TabItemComponent {
  @Input() header: string;

  @ViewChild(TemplateRef, { static: true }) template: TemplateRef<any>;
}
