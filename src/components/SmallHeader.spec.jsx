import React from 'react';
import { shallow } from 'enzyme';
import { Menu, MenuItem, Tab, Tabs } from '@material-ui/core';
import SmallHeader from './SmallHeader';
import translateString from '../utils/StringHelper';

const t = translateString;

const tabs = [{ name: 'asdf', route: '/asdf' }, { name: 'fdsa', route: '/fdsa' }];
const tabIndex = 0;
const changeTabs = jest.fn();
const popperAnchorEl = null;
const classes = {};
const setStyle = jest.fn();
const handleFbClick = jest.fn();
const handleEmailClick = jest.fn();
const handlePhoneClick = jest.fn();
const props = {
  tabs,
  tabIndex,
  changeTabs,
  popperAnchorEl,
  classes,
  setStyle,
  handleFbClick,
  handleEmailClick,
  handlePhoneClick,
};
const OLD_ENV = process.env.NODE_ENV;

describe('Full header component', () => {
  let component;
  beforeEach(() => {
    jest.resetModules();
    process.env.NODE_ENV = OLD_ENV;
    component = shallow(<SmallHeader props={props} />);
  });

  afterEach(() => {
    process.env.NODE_ENV = OLD_ENV;
    handleFbClick.mockReset();
    handleEmailClick.mockReset();
    handlePhoneClick.mockReset();
  });

  it('Renders without crashing', () => {
    expect(component.html()).toMatchSnapshot();
  });
  it('Does not render the style menu', () => {
    expect(component.exists('#style-menu')).not.toBe(true);
  });
  it('Does not render any tabs', () => {
    expect(component.find(Tab)).toHaveLength(0);
    expect(component.find(Tabs)).toHaveLength(0);
  });
  it('Renders two Menu components', () => {
    expect(component.find(Menu)).toHaveLength(2);
  });
  it('Has a nav menu component', () => {
    expect(component.exists('#nav-menu')).toBe(true);
  })
  it('Has a contact menu component', () => {
    expect(component.exists('#contact-menu')).toBe(true);
  })
  it('Clicks the facebook button and no other buttons', () => {
    component.find('#facebook-button').simulate('click');
    expect(handleFbClick).toHaveBeenCalled();
    expect(handleEmailClick).not.toHaveBeenCalled();
    expect(handlePhoneClick).not.toHaveBeenCalled();
  });
  it('Can click the Email button', () => {
    component.find('#email-button').simulate('click');
    expect(handleFbClick).not.toHaveBeenCalled();
    expect(handleEmailClick).toHaveBeenCalled();
    expect(handlePhoneClick).not.toHaveBeenCalled();
  });
  it('Can click the Phone button', () => {
    component.find('#phone-button').simulate('click');
    expect(handleFbClick).not.toHaveBeenCalled();
    expect(handleEmailClick).not.toHaveBeenCalled();
    expect(handlePhoneClick).toHaveBeenCalled();
  });
  it('Displays a phone number', () => {
    expect(component.find('#phone-number').text()).toBe(t('Phone-Number'));
  });
  it('Clicks tabs when tab menu items are clicked', () => {
    component.find(MenuItem).first().simulate('click');
    expect(changeTabs).toHaveBeenCalled();
  });
});
