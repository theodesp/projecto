import React from 'react';

import arrayMove from 'array-move';
import ProjectSidebar from '../components/projectSidebar';

export interface ProjectSidebarContainerState {
    items: string[]
}

export class ProjectSidebarContainer extends React.PureComponent<{}, ProjectSidebarContainerState> {
    state = {
        items: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'],
    };
    onSortEnd = ({oldIndex, newIndex}: any) => {
        this.setState(({items}: ProjectSidebarContainerState) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    render() {
        const {items} = this.state;
        return (
            <ProjectSidebar items={items} onSortEnd={this.onSortEnd}/>
        );
    }
}


export default ProjectSidebarContainer;
