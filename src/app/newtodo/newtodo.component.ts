import { Component, OnInit } from '@angular/core';

import { Todo, todos } from '../todos';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {
  private todoIndex: number = 1;
  todoValue : string = "";
  actionActive : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  AddTodo() : void{
    if (this.todoValue != "" && this.todoValue != null) {
      var todo = new Todo();
      todo.id = this.todoIndex;
      todo.description = this.todoValue;
      todo.action = this.actionActive;
      todos.push(todo);

      this.todoIndex++;
      this.todoValue = "";
      this.actionActive = false;

      document.getElementById("todoInput")?.focus();
    }

    // var todosStr:string = "";

    // for (let i = 0; i < todos.length; i++) {
    //   const el = todos[i];
    //   todosStr += el.toString() + "\n";
    // }

    // alert(todosStr);
  }
}
