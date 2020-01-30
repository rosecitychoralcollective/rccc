import React from 'react';
import {
  Button, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions
} from '@material-ui/core';
import translateString from '../utils/StringHelper';

const EventCard = ({ image, handleClick }) => {
  const t = translateString;

  return (
    <Card style={{ display: 'inline-block', padding: 10 }} className="cat">
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
            Fall Concert
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {t('Event-Screen-Link')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
        Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
