import React from 'react';
import { shallow } from 'enzyme';
import ProjectContent from './projectContent';

it('renders without crashing', () => {
    const checkbox = shallow(<ProjectContent />);
    expect(checkbox).toMatchSnapshot();
});
