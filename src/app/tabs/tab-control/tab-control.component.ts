import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TabPageComponent } from '../tab-page/tab-page.component';

@Component({
  selector: 'app-tab-control',
  templateUrl: './tab-control.component.html',
})
export class TabControlComponent {
  @Input() selectedIndex = 0;

  @ContentChildren(TabPageComponent) pages: QueryList<TabPageComponent>;
}
