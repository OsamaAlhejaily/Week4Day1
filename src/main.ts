import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { taskReducer } from './app/state/task.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ tasks: taskReducer }),  
  ],
}).catch(err => console.error(err));
