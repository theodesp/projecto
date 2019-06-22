import {handleActions} from 'redux-actions';
import {ProjectState} from "../models/projectState";
import {Project} from "../models/project";

const initialState: ProjectState = [{
    text: 'Project 1',
    id: 2,
}, {
    text: 'Project 2',
    id: 1,
}, {
    text: 'Project 3',
    id: 3,
}];

export default handleActions<ProjectState, Project>({}, initialState)
