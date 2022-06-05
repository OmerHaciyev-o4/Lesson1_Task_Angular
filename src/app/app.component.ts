import { Component } from '@angular/core';
import { todos } from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Todos = todos;

  AllOrSimple(state: boolean){
    if (!state) {
      var tempTodos = Array.from(todos);
      this.Todos = tempTodos.splice(0, 3);
    }
    else{
      this.Todos =todos;
    }
  }
}