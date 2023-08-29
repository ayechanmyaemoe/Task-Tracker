import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent {

  faTimes = faTimes;
  
  @Input()
  task!:Task;

  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output()
  onToggleReminder: EventEmitter<Task> = new EventEmitter();

  onDelete(task:Task):void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task):void {
    this.onToggleReminder.emit(task);
  }

}
