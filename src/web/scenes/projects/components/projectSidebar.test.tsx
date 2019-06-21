import React from 'react';
import { shallow } from 'enzyme';
import ProjectSidebar from './projectSidebar';

it('renders without crashing', () => {
    const checkbox = shallow(<ProjectSidebar items={[]}/>);
    expect(checkbox).toMatchSnapshot();
});
