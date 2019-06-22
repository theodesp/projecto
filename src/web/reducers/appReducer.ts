import { combineReducers } from 'redux';

import projects from '../scenes/projects/reducers/projectsReducer';

const appReducer = combineReducers({
    projects
});

export default appReducer;
