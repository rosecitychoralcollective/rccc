import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions
} from '@material-ui/core';
import translateString from '../utils/StringHelper';

const EventCard = ({ image, handleClick, data }) => {
  const t = translateString;

  const useStyles = makeStyles({
    card: {
      height: 300,
      width: 300,
      margin: 4,
      padding: 10,
      display: 'inline-block',
    },
  });

  const classes = useStyles();

  const maxDescLength = 75;
  const desc = data.description;
  let text = desc;
  if (desc.length > maxDescLength) {
    const mod = desc[maxDescLength - 1] === ' ' ? 1 : 0;
    text = `${desc.substring(0, maxDescLength - mod)}...`;
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="your image didn't render, dummy"
          height="120"
          image={image}
          title="A Cat"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h6">
            {text}
          </Typography>
          <Typography variant="h7" color="textSecondary" component="p">
            {data.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleClick(data.id)}>
          {t('EventList-Page-Link')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
