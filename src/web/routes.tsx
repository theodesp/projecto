import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import AccountScene from './scenes/account/components/accountScene';
import TaskScene from './scenes/tasks/components/taskScene';
import MenuContainer from './containers/menuContainer';

export const Routes: React.FC = (): JSX.Element => {
    return (
        <Router>
            <MenuContainer />
            <Route exact path="/" component={App}/>
            <Route path="/tasks" component={TaskScene}/>
            <Route path="/account" component={AccountScene}/>
        </Router>
    )
};

export default Routes;
