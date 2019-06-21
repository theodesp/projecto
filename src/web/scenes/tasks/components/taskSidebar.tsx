import React from 'react';
import {Divider, Icon, Layout} from 'antd';
import {SortableContainer, SortableElement, SortableHandle, SortEndHandler} from "react-sortable-hoc";
import './taskSidebar.scss';

const { Sider } = Layout;
const DragHandle = SortableHandle(() => <span className="ant-typography"><Icon type="drag" /></span>);

const ProjectListItem = SortableElement(({value}: any) => (
    <li className="ant-list-item project-list-item">
        <DragHandle />
        <div className="ant-list-item-content">
            {value}
        </div>
    </li>
));

const ProjectListContainer = SortableContainer(({children}: any) => {
    return <ul className="ant-list-items">{children}</ul>;
});

export interface TaskSidebarProps {
    onSortEnd?: SortEndHandler;
    items: string[]
}

export const TaskSidebar: React.FC<TaskSidebarProps> = ({onSortEnd, items}: TaskSidebarProps): JSX.Element => {
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

export default TaskSidebar;

