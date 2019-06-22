import React from 'react';
import {Layout, Row, Col, Checkbox,  Button, Icon, Input} from 'antd';
import {SortableContainer, SortableElement, SortEndHandler} from 'react-sortable-hoc';
import {DragHandle} from './dragHandle';
import './projectContent.scss';
const InputGroup = Input.Group;

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
    inputValue: string;
    onSortEnd?: SortEndHandler;
    onAddTask: () => void;
    updateInput: (text: string) => void;
    tasks: string[]
}

export const ProjectContentList: React.FC<ProjectContentListProps> =
    ({onSortEnd, tasks, title, onAddTask, inputValue, updateInput}: ProjectContentListProps): JSX.Element => {
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
                        <form className="task-actions">
                            <InputGroup >
                                <Row gutter={8}>
                                    <Col span={4}>
                                        <Input
                                            onChange={e => updateInput(e.target.value)}
                                            value={inputValue}/>
                                    </Col>
                                    <Col span={4}>
                                        <Button type="primary" onClick={() => onAddTask()}>
                                            <Icon type="plus" />
                                            Add Task
                                        </Button>
                                    </Col>
                                </Row>
                            </InputGroup>
                        </form>
                    </Col>
                </Row>
            </Content>
        )
    };

export default ProjectContentList;

