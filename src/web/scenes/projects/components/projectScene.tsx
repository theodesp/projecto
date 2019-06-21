import React from 'react';
import { Layout } from 'antd';
import ProjectSidebarContainer from '../containers/projectSidebarContainer';
import ProjectContentContainer from '../containers/projectContentContainer';
import './projectScene.scss';

export const ProjectScene: React.FC = (): JSX.Element => {
    return (
        <Layout className="main-container full-height project-scene">
            <ProjectSidebarContainer />
            <ProjectContentContainer />
        </Layout>
    )
};

export default ProjectScene;

