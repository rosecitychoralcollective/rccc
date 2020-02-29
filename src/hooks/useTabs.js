import { useEffect, useState } from 'react';
import { navigate, usePath } from 'hookrouter';
import translateString from '../utils/StringHelper';

const useTabs = () => {
  const t = translateString;
  const [tabIndex, setIndex] = useState(0);
  const TITLE_SUFFIX = `| ${t('Organization-Name')}`;
  const [title, setTitle] = useState(`${t('Home-Page-Title')} ${TITLE_SUFFIX}`);

  const tabs = [
    {
      name: 'home',
      route: '/',
      title: t('Home-Page-Title'),
    },
    {
      name: 'join',
      route: '/join',
      title: t('Join-Page-Title'),
    },
    {
      name: 'events',
      route: '/events',
      title: t('EventList-Page-Title'),
    },
    {
      name: 'about',
      route: '/about',
      title: t('About-Page-Title'),
    },
    {
      name: 'support',
      route: '/support',
      title: t('Support-Page-Title'),
    },
    {
      name: 'contact',
      route: '/contact',
      title: t('Contact-Page-Title'),
    },
  ];

  const changeTabs = (_, index) => {
    const newTab = tabs[index];
    navigate(newTab.route);
    setIndex(index);
    setTitle(`${newTab.title} ${TITLE_SUFFIX}`);
  };

  useEffect(() => {
    document.title = title;
  });

  const currentPath = usePath(false);

  const adjustHighlighting = () => {
    const routeIndex = tabs.findIndex((t) => t.route === currentPath);
    setIndex(routeIndex);
    setTitle(`${tabs[routeIndex].title} ${TITLE_SUFFIX}`);
  };

  /** This ensures that the nav bar has the correct highlighting when the back button is pressed */
  window.onpopstate = () => {
    adjustHighlighting();
  };

  return [tabs, tabIndex, changeTabs];
};

export default useTabs;
