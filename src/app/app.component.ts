import {Component} from '@angular/core';
import {ContextMenuAction} from "./contextmenu/models/context-menu-action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  readonly data: Person[] = [{
    id: 1,
    name: 'Pepe',
    age: 20
  }, {
    id: 2,
    name: 'Maria',
    age: 30
  }, {
    id: 3,
    name: 'Laura',
    age: 15
  }]

  readonly contextMenuActions: ContextMenuAction<Person>[] = [{
    html: (item) => item.name,
    visible: (item) => {
      console.log("Visible", item);
      return true;
    },
    disabled: (item) => {
      console.log("Disabled", item);
      return false;
    },
    click: (item) => console.log(item),
    divider: false,
  }];

}

export interface Person {
  id: number;
  name: string;
  age: number;
}
