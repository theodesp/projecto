import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {Menu, Icon} from 'antd';
import App from './App';
import AccountScene from './scenes/account/components/accountScene';
import TaskScene from './scenes/tasks/components/taskScene';

export const Routes: React.FC = (): JSX.Element => {
    return (
        <Router>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link to="/"><Icon type="home" /> Home</Link>
                </Menu.Item>
                <Menu.Item key="tasks">
                    <Link to="/tasks"><Icon type="project" /> Tasks</Link>
                </Menu.Item>
                <Menu.Item key="account">
                    <Link to="/account"><Icon type="setting" /> Account</Link>
                </Menu.Item>
            </Menu>
            <Route exact path="/" component={App}/>
            <Route path="/tasks" component={TaskScene}/>
            <Route path="/account" component={AccountScene}/>
        </Router>
    )
};

export default Routes;
