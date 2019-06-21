import React from 'react';

import arrayMove from 'array-move';
import ProjectContentList from "../components/projectContent";

export interface ProjectContentContainerState {
    tasks: string[]
}

export class ProjectContentContainer extends React.PureComponent<{}, ProjectContentContainerState> {
    state = {
        tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'],
    };
    onSortEnd = ({oldIndex, newIndex}: any) => {
        this.setState(({tasks}: ProjectContentContainerState) => ({
            tasks: arrayMove(tasks, oldIndex, newIndex),
        }));
    };

    render() {
        const {tasks} = this.state;
        return (
            <ProjectContentList tasks={tasks} onSortEnd={this.onSortEnd} title={'Project'}/>
        );
    }
}


export default ProjectContentContainer;
