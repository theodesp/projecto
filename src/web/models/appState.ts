import {TaskState} from "../scenes/projects/models/taskState";
import {ProjectState} from "../scenes/projects/models/projectState";

export class AppState {
    tasks: TaskState;
    projects: ProjectState;

    constructor({tasks, projects}: Partial<AppState> = {}) {
        this.tasks = tasks || [];
        this.projects = projects || [];
    }
}
