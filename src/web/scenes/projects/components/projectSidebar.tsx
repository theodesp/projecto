import React from 'react';
import {Divider, Layout} from 'antd';
import {SortableContainer, SortableElement, SortEndHandler} from 'react-sortable-hoc';
import {DragHandle} from './dragHandle';

const { Sider } = Layout;

const ProjectListItem = SortableElement(({value}: any) => (
    <li className="ant-list-item list-item">
        <DragHandle />
        <div className="ant-list-item-content">
            {value}
        </div>
    </li>
));

const ProjectListContainer = SortableContainer(({children}: any) => {
    return <ul className="draggable-list ant-list-items">{children}</ul>;
});

export interface TaskSidebarProps {
    onSortEnd?: SortEndHandler;
    items: string[]
}

export const ProjectSidebar: React.FC<TaskSidebarProps> = ({onSortEnd, items}: TaskSidebarProps): JSX.Element => {
    return (
        <Sider theme='light' className="project-list">
            <h1>Projects</h1>
            <Divider />
            <ProjectListContainer onSortEnd={onSortEnd} useDragHandle>
                {items.map((value, index) => (
                    <ProjectListItem key={`item-${index}`} index={index} value={value}/>
                ))}
            </ProjectListContainer>
        </Sider>
    )
};

export default ProjectSidebar;

