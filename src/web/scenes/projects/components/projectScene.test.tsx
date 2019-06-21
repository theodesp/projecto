import React from 'react';
import { shallow } from 'enzyme';
import ProjectScene from './projectScene';

it('renders without crashing', () => {
    const checkbox = shallow(<ProjectScene />);
    expect(checkbox).toMatchSnapshot();
});
