import React from 'react';
import { shallow } from 'enzyme';
import TaskScene from './taskScene';

it('renders without crashing', () => {
    const checkbox = shallow(<TaskScene />);
    expect(checkbox).toMatchSnapshot();
});
