import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';
import FullHeader from './FullHeader';

const chance = new Chance();

describe('Full header component details', () => {
  it('Renders without crashing', () => {
    const component = shallow(<FullHeader />);
    expect(component).toMatchSnapshot();
  });
});