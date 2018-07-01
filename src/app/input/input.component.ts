import { Component } from '@angular/core';
import {TodoService} from "../services/service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent   {
  title: string ='';



  onSubmit( )
  {

   this.TodoService.createTodo(this.title);

  }


  constructor(private TodoService: TodoService) { }

  ngOnInit() {
  }

}
