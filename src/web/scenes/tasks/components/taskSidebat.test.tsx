import React from 'react';
import { shallow } from 'enzyme';
import TaskSidebar from "./taskSidebar";

it('renders without crashing', () => {
    const checkbox = shallow(<TaskSidebar items={[]}/>);
    expect(checkbox).toMatchSnapshot();
});
