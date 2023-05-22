import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-btn-add-task',
  templateUrl: './btn-add-task.component.html',
  styleUrls: ['./btn-add-task.component.scss']
})
export class BtnAddTaskComponent {

  @Output() emitTaskItem = new EventEmitter

  public addTaskItem = "";


  public submitTakItem() {
    this.addTaskItem.trim()
    if (this.addTaskItem) {
      this.emitTaskItem.emit(this.addTaskItem)
      this.addTaskItem = ""
    }
  }

}
