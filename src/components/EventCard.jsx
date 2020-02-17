import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions
} from '@material-ui/core';
import translateString from '../utils/StringHelper';

const EventCard = ({ image, handleClick, data }) => {
  const t = translateString;

  const useStyles = makeStyles({
    root: {
      height: 300,
      width: 325,
    },
  });

  const classes = useStyles();

  return (
    <Card style={{ display: 'inline-block', padding: 10 }} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="your image didn't render, dummy"
          height="140"
          image={image}
          title="A Cat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h6">
            {data.description}
          </Typography>
          <Typography variant="h7" color="textSecondary" component="p">
            {data.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleClick(data.id)}>
          {t('EventList-Screen-Link')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
