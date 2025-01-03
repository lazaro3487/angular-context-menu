import {Component, Input, ViewChild} from '@angular/core';
import {ContextMenuComponent, ContextMenuService} from '@perfectmemory/ngx-contextmenu';
import {ContextMenuAction} from "../../models/context-menu-action";

@Component({
  selector: 'context-menu-wrapper',
  templateUrl: './context-menu-wrapper.component.html',
})
export class ContextMenuWrapperComponent {

  @Input()
  contextMenuActions: ContextMenuAction<any>[] = [];

  @ViewChild('contextMenuComponent')
  private contextMenuComponent: ContextMenuComponent<unknown>;

  constructor(private contextMenuService: ContextMenuService<unknown>) {
  }

  show(value: any, event: MouseEvent) {

    this.contextMenuService.show(this.contextMenuComponent,  {
      x: event.x,
      y: event.y,
      value: value
    });

    event.preventDefault();
    event.stopPropagation();

  }

}
