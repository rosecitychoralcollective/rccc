import React from 'react';
import { shallow } from 'enzyme';
import { IconButton, Tab, Tabs } from '@material-ui/core';
import FullHeader from './FullHeader';
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
    component = shallow(<FullHeader props={props} />);
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
  it('Does not render the style selector when env is not development', () => {
    expect(component.exists('#menu')).not.toBe(true);
    process.env.NODE_ENV = 'production';
    const devComponent = shallow(<FullHeader props={props} />);
    expect(devComponent.exists('#menu')).not.toBe(true);
  });
  it('Renders the style selector when env is development', () => {
    process.env.NODE_ENV = 'development';
    const devComponent = shallow(<FullHeader props={props} />);
    expect(devComponent.exists('#menu')).toBe(true);
  });
  it('Renders the same number of tabs as given in props', () => {
    expect(component.find(Tab)).toHaveLength(tabs.length);
  });
  it('Sets the name of a tab to the name given', () => {
    expect(component.find(Tab).some('[label="asdf"]')).toBe(true);
    expect(component.find(Tab).some('[label="fdsa"]')).toBe(true);
  });
  it('Calls changetabs when onChange state changes', () => {
    component.find(Tabs).simulate('change');
    expect(changeTabs).toHaveBeenCalled();
  });
  it('Renders three IconButton components', () => {
    expect(component.find(IconButton)).toHaveLength(3);
  });
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
});
