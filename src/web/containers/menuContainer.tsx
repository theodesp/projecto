import * as React from 'react';
import {Menu, Switch, Icon} from 'antd';
import {Link} from 'react-router-dom';
import {MenuTheme} from "antd/lib/menu";

export interface MenuContainerState {
    theme: MenuTheme
}

class MenuContainer extends React.PureComponent<{}, MenuContainerState> {

    constructor(props: any) {
        super(props);

        this.state = {
            theme: 'light'
        };
    }

    changeTheme = (value: boolean) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    render() {
        return (
            <nav>
                <Menu mode="horizontal" theme={this.state.theme}>
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="home"/> Home</Link>
                    </Menu.Item>
                    <Menu.Item key="tasks">
                        <Link to="/tasks"><Icon type="project"/> Tasks</Link>
                    </Menu.Item>
                    <Menu.Item key="account">
                        <Link to="/account"><Icon type="setting"/> Account</Link>
                    </Menu.Item>
                    <Menu.Item key="theme" className='pull-right'>
                        <Switch
                            checked={this.state.theme === 'dark'}
                            onChange={this.changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </Menu.Item>
                </Menu>
            </nav>
        )
    }
}

export default MenuContainer;
