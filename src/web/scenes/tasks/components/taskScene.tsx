import React from 'react';
import { Layout } from 'antd';
import TaskSideBarContainer from "../containers/taskSideBarContainer";

const { Content } = Layout;

export const TaskScene: React.FC = (): JSX.Element => {
    return (
        <Layout className="main-container full-height">
            <TaskSideBarContainer />
            <Layout>
                <Content>Content</Content>
            </Layout>
        </Layout>
    )
};

export default TaskScene;

