import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string ='';
  @Output() add = new EventEmitter();


  onSubmit( )
  {

   this.add.emit(this.title);

  }


  constructor() { }

  ngOnInit() {
  }

}
