import { NgModule } from '@angular/core';
import { ContextMenuModule, ContextMenuService } from '@perfectmemory/ngx-contextmenu';
import { ContextMenuWrapperComponent } from './components/context-menu-wrapper/context-menu-wrapper.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    ContextMenuModule,
  ],
  declarations: [
    ContextMenuWrapperComponent
  ],
  exports: [
    ContextMenuModule,
    ContextMenuWrapperComponent
  ],
  providers: [
    ContextMenuService
  ]
})
export class MyContextMenuModule { }
