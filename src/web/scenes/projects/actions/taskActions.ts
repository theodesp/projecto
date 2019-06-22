import { createAction } from 'redux-actions';
import {Task} from '../models/task';
import {ADD_TASK} from './taskActionTypes';

export const addTask = createAction<Task, string, number>(
    ADD_TASK,
    (text: string, projectId: number) => ({ text: text, done: false, projectId: projectId})
);
