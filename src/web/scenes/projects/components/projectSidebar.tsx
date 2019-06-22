import React from 'react';
import {Divider, Layout, Icon} from 'antd';
import {Project} from '../models/project';
import './projectSidebar.scss';

const {Sider} = Layout;

export interface TaskSidebarProps {
    items: Project[]
    selectedProjectId: number;
    selectProject: (project: Project) => void;
}

export const ProjectSidebar: React.FC<TaskSidebarProps> = ({items, selectedProjectId, selectProject}: TaskSidebarProps): JSX.Element => {
    return (
        <Sider theme='light' className="project-list">
            <h1 className="title">Projects</h1>
            <Divider/>
            <ul className="draggable-list ant-list-items">
                {items.map((project, id) => (
                    <li className="ant-list-item list-item clickable" key={id} onClick={() => selectProject(project)}>
                        {
                            project.id === selectedProjectId ? <Icon type="right" className="selected-icon"/> : null
                        }
                        <div className="ant-list-item-content">
                            {project.text}
                        </div>
                    </li>
                ))}
            </ul>
        </Sider>
    )
};

export default ProjectSidebar;

