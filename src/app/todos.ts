export class Todo {
  id: number = 0;
  description: string = "";
  action: boolean = false;

  toString(): string{
    return "Id: " + this.id + " Description: " + this.description + " Action: " + this.action;
  }
}
  
export var todos: Array<Todo> = [];