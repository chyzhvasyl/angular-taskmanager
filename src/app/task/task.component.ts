import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {variables} from "../shara/todo";



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
@Input() todo: variables  ;
  @Output() delete = new EventEmitter();
  selector ( ){
    this.todo.completed = !this.todo.completed;

  }
ondelete()
{

this.delete.emit(this.todo);
}


  ngOnInit() {
  }


}
