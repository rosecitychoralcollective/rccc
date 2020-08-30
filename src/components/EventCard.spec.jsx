import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';
import Resources from '../resources/resources';

import EventCard from './EventCard';

const chance = new Chance();

describe('Event Card Component defaults', () => {
  const event = {
    description: 'asdf',
    id: 0,
    title: 'soter',
    date: '10/31/20 7:00pm',
    image: Resources.placeholderCat,
  };
  let component;
  const handleClick = jest.fn();
  beforeAll(() => {
    component = shallow(<EventCard event={event} handleClick={handleClick} />);
  });
  it('Renders without crashing', () => {
    expect(component).toMatchSnapshot();
  });
  it('handles clicks', () => {
    component.find(`#card-${event.title}`).simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
  it('has a title', () => {
    expect(component.find('#card-title').text()).toBe(event.title);
  });
  it('has a description', () => {
    expect(component.find('#card-description').text()).toBe(event.description);
  });
  it('has a date', () => {
    expect(component.find('#card-date').text()).toBe(event.date);
  });
});

describe('Event card component boundaries', () => {
  const event = {
    description: chance.string({ length: 78 }),
    id: 0,
    title: 'soter',
    date: '10/31/20 7:00pm',
    image: Resources.placeholderCat,
  };
  it('truncates the description and adds an ellipsis', () => {
    const component = shallow(<EventCard event={event} />);
    const modifiedDescription = `${event.description.slice(0, 75)}...`;
    expect(component.find('#card-description').text()).toBe(modifiedDescription);
  });
  it('removes ending space if one is present before truncation', () => {
    event.description = `${event.description.slice(0, 74)} `;
    const component = shallow(<EventCard event={event} />);
    expect(component.find('#card-description').text()).toBe(event.description);
  });
});
