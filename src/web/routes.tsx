import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AccountScene from './scenes/account/components/accountScene';
import ProjectScene from './scenes/projects/components/projectScene';
import MainDashboardScene from "./scenes/dashboard/components/mainDashboardScene";
import MenuContainer from './containers/menuContainer';

export const Routes: React.FC = (): JSX.Element => {
    return (
        <Router>
            <MenuContainer />
            <Route exact path="/" component={MainDashboardScene}/>
            <Route path="/projects" component={ProjectScene}/>
            <Route path="/account" component={AccountScene}/>
        </Router>
    )
};

export default Routes;
