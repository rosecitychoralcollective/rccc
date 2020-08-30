import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@material-ui/core';
import translateString from '../utils/StringHelper';

const EventCard = ({ event, handleClick }) => {
  const t = translateString;

  const useStyles = makeStyles({
    card: {
      height: 'auto',
      maxHeight: 300,
      width: 'auto',
      maxWidth: 300,
      margin: '1rem',
      padding: '0.5rem',
      display: 'inline-block',
    },
  });

  const classes = useStyles();

  const maxDescLength = 75;
  const desc = event.description;
  let text = desc;
  if (desc.length > maxDescLength) {
    const mod = desc[maxDescLength - 1] === ' ' ? 1 : 0;
    text = `${desc.substring(0, maxDescLength - mod)}...`;
  }

  const cardId = `card-${event.title}`;

  return (
    <Card id={cardId} className={classes.card} onClick={() => handleClick(event.id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={t('Event-Card-Image-Error')}
          height="auto"
          src={event.image}
          title="A Cat"
        />
        <CardContent>
          <Typography id="card-title" gutterBottom variant="h6">
            {event.title}
          </Typography>
          <Typography id="card-description" variant="body2" color="textSecondary" component="h6">
            {text}
          </Typography>
          <Typography id="card-date" variant="subtitle2" color="textSecondary" component="p">
            {event.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
