import React from 'react';

import arrayMove from 'array-move';
import TaskSidebar from '../components/taskSidebar';

export interface TaskSideBarContainerState {
    items: string[]
}

export class TaskSideBarContainer extends React.PureComponent<{}, TaskSideBarContainerState> {
    state = {
        items: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'],
    };
    onSortEnd = ({oldIndex, newIndex}: any) => {
        this.setState(({items}: any) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    render() {
        const {items} = this.state;
        return (
            <TaskSidebar items={items} onSortEnd={this.onSortEnd}/>
        );
    }
}


export default TaskSideBarContainer;
