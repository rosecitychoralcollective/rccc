import React from 'react';
import { shallow } from 'enzyme';
import Resources from '../resources/resources';

import EventCard from './EventCard';

const event = {
  description: 'asdf',
  id: 0,
  title: 'soter',
  date: '10/31/20 7:00pm',
  image: Resources.placeholderCat,
};

describe('Event Card Component', () => {
  it('Renders without crashing', () => {
    const component = shallow(<EventCard event={event} />);
    expect(component).toMatchSnapshot();
  });
  it('handles clicks', () => {
    const handleClick = jest.fn();
    const component = shallow(<EventCard event={event} handleClick={handleClick} />);
    component.find('#card').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
