import React from 'react';
import { shallow } from 'enzyme';
import MainDashboardScene from './mainDashboardScene';

it('renders without crashing', () => {
    const checkbox = shallow(<MainDashboardScene />);
    expect(checkbox).toMatchSnapshot();
});
