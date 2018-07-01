import {todos} from "../shara/tasks"
import {variables} from "../shara/todo"


export class TodoService {
todos: variables[]=todos;

getTodos(): variables[]{

  return this.todos;
}



createTodo(title:string)
{

let todo = new variables(title);
  this.todos.push(todo);
}
deleTodo(todo: variables)
{
  let id = this.todos.indexOf(todo);
  if(id> -1)
  {
    this.todos.splice(id, 1)

  }

}
  selectortodo ( todo: variables){
   todo.completed = !todo.completed;

  }
}
