import React from 'react';
import {Action, Dispatch} from 'redux';

import arrayMove from 'array-move';
import ProjectContentList from "../components/projectContent";
import {AppState} from "../../../models/appState";
import {connect} from "react-redux";
import {addTask} from "../actions/taskActions";

export interface ProjectContentContainerProps {
    onAddTask: (text: string, projectId: number) => void;
}

export interface ProjectContentContainerState {
    inputValue: string;
    tasks: string[]
}

export class ProjectContentContainer extends React.PureComponent<ProjectContentContainerProps, ProjectContentContainerState> {
    state = {
        tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'],
        inputValue: ''
    };
    onSortEnd = ({oldIndex, newIndex}: any) => {
        this.setState(({tasks}: ProjectContentContainerState) => ({
            tasks: arrayMove(tasks, oldIndex, newIndex),
        }));
    };

    onAddTask = () => {
        this.props.onAddTask(this.state.inputValue, 0);
        this.setState({ inputValue: '' })
    };

    updateInput = (text: string) => {
        this.setState({inputValue: text })
    };

    render() {
        const {tasks, inputValue} = this.state;
        return (
            <ProjectContentList
                tasks={tasks}
                inputValue={inputValue}
                updateInput={this.updateInput}
                onSortEnd={this.onSortEnd}
                onAddTask={this.onAddTask}
                title={'Project'}
            />
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: any = {}) => ({
});


const mapDispatchToProps = (dispatch: Dispatch<Action | any>): any => ({
    onAddTask: (text: string, projectId: number) => dispatch(addTask(text, projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContentContainer);
