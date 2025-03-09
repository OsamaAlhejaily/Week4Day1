import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, provideStore } from '@ngrx/store';
import { addTask, completeTask, deleteTask } from './state/task.actions';
import { Observable } from 'rxjs';
import { selectAllTasks } from './state/task.selectors';
import { taskReducer } from './state/task.reducer';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule, ReactiveFormsModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoForm: FormGroup;
  tasks$: Observable<any>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    });
    this.tasks$ = this.store.select(selectAllTasks);
  }

  addTask() {
    if (this.todoForm.valid) {
      this.store.dispatch(addTask({ task: this.todoForm.value.task }));
      this.todoForm.reset();
    }
  }

  completeTask(taskId: number) {
    this.store.dispatch(completeTask({ taskId }));
  }

  deleteTask(taskId: number) {
    this.store.dispatch(deleteTask({ taskId }));
  }
}
