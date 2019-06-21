import React from 'react';
import {Layout, Row, Col, Checkbox,  Button, Icon} from 'antd';
import {SortableContainer, SortableElement, SortEndHandler} from 'react-sortable-hoc';
import {DragHandle} from './dragHandle';
import './projectContent.scss';

const {Content} = Layout;

const ProjectContentListItem = SortableElement(({value}: any) => (
    <li className="ant-list-item list-item">
        <DragHandle/>
        <div className="ant-list-item-content">
            <Checkbox>{value}</Checkbox>
        </div>
    </li>
));

const ProjectContentListContainer = SortableContainer(({children}: any) => {
    return <ul className="draggable-list ant-list-items">{children}</ul>;
});

export interface ProjectContentListProps {
    title: string;
    onSortEnd?: SortEndHandler;
    tasks: string[]
}

export const ProjectContentList: React.FC<ProjectContentListProps> =
    ({onSortEnd, tasks, title}: ProjectContentListProps): JSX.Element => {
        return (
            <Content className="project-content-container">
                <Row>
                    <Col span={23} offset={1}>
                        <h1>{title} Tasks</h1>
                        <ProjectContentListContainer onSortEnd={onSortEnd} useDragHandle>
                            {tasks.map((value, index) => (
                                <ProjectContentListItem key={`item-${index}`} index={index} value={value}/>
                            ))}
                        </ProjectContentListContainer>
                        <div className="task-actions">
                            <Button type="primary">
                                <Icon type="plus" />
                                    Add Task
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Content>
        )
    };

export default ProjectContentList;

