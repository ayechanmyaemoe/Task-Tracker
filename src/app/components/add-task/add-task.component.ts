import { Component, Output, EventEmitter } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  text!:string;
  date!:string;
  reminder:boolean = false;
  showAddTask!:boolean;
  subscription!:Subscription;

  @Output()
  onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle()
    .subscribe( value => (this.showAddTask = value));
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      date: this.date,
      reminder: this.reminder
    }
    
    this.onAddTask.emit(newTask);

    this.text = '';
    this.date = '';
    this.reminder = false;
  }

}
