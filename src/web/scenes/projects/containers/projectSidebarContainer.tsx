import React from 'react';
import { connect } from 'react-redux';

import ProjectSidebar from '../components/projectSidebar';
import {AppState} from '../../../models/appState';
import {Project} from '../models/project';

export interface ProjectSidebarContainerProps {
    projects: Project[];
}

export interface ProjectSidebarContainerState {
    selectedProjectId: number;
}


export class ProjectSidebarContainer extends React.PureComponent<ProjectSidebarContainerProps, ProjectSidebarContainerState> {
    state = {
        selectedProjectId: 0
    };
    componentDidMount(): void {
        this.setState({
            selectedProjectId: this.props.projects[0].id
        });
    }

    selectProject = (project: Project) => {
        this.setState({
            selectedProjectId: project.id
        });
    };

    render() {
        const {projects} = this.props;
        return (
            <ProjectSidebar items={projects} selectedProjectId={this.state.selectedProjectId} selectProject={this.selectProject}/>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: any = {}) => ({
    projects: state.projects
});

export default connect(mapStateToProps, {})(ProjectSidebarContainer);

