import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[Task] Add Task',
  props<{ task: string }>()
);

export const completeTask = createAction(
  '[Task] Complete Task',
  props<{ taskId: number }>()
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ taskId: number }>()
);
