import React from 'react';
import { useRoutes } from 'hookrouter';
import { makeStyles } from '@material-ui/styles';

import useStyle from './hooks/useStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './resources/routes';

export default function App() {
  const routeMatch = useRoutes(routes);

  const [style, setStyle] = useStyle();
  const useStyles = makeStyles({
    ...style,
  });
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Header classes={classes} setStyle={setStyle} />
      { routeMatch(classes) }
    </div>
  );
}
