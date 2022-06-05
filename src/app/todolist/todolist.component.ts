import { Component, Input, OnInit } from '@angular/core';

import { Todo, todos } from '../todos';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  @Input() todos = todos;

  constructor() {}

  ngOnInit(): void {
  }
}
