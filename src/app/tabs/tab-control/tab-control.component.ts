import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab-control',
  templateUrl: './tab-control.component.html',
  styleUrls: ['./tab-control.component.css'],
})
export class TabControlComponent {
  @Input() selectedIndex = 0;

  @ContentChildren(TabItemComponent) pages: QueryList<TabItemComponent>;
}
