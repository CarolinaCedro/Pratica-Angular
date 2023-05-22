import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {TodoListModel} from "../../models/TodoListModel";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{

  public taskList: Array<TodoListModel> = []

  ngOnInit() {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }

  deleteTask(posicao: number) {
    this.taskList.splice(posicao, 1)
  }

  deleteAll() {
    this.taskList = []
  }


  addItemOnList($event: string) {
    this.taskList.push({
      description: $event,
      checked: false
    })
  }
}
