import { createReducer, on } from '@ngrx/store';
import { addTask, completeTask, deleteTask } from './task.actions';

export interface TaskState {
    tasks: { id: number; title: string; completed: boolean }[];
}

export const initialState: TaskState = {
    tasks: [],
};

export const taskReducer = createReducer(
    initialState,
    on(addTask, (state, { task }) => ({
        ...state,
        tasks: [...state.tasks, { id: Date.now(), title: task, completed: false }],
    })),
    on(completeTask, (state, { taskId }) => ({
        ...state,
        tasks: state.tasks.map(task =>
            task.id === taskId ? { ...task, completed: true } : task
        ),
    })),
    on(deleteTask, (state, { taskId }) => ({
        ...state,
        tasks: state.tasks.filter(task => task.id !== taskId),
    }))
);
