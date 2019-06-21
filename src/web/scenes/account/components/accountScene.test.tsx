import React from 'react';
import { shallow } from 'enzyme';
import AccountScene from './accountScene';

it('renders without crashing', () => {
    const checkbox = shallow(<AccountScene />);
    expect(checkbox).toMatchSnapshot();
});
