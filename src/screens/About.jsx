import React, { useState } from 'react';
import {
  Avatar, Button, Dialog, DialogTitle, Grid,
} from '@material-ui/core';
import _ from 'lodash';
import translateString from '../utils/StringHelper';
import Resources from '../resources/resources';
import useTitle from '../hooks/useTitle';

const About = ({ classes }) => {
  const t = translateString;
  const [dialogOpen, setDialogOpen] = useState(false);
  useTitle(t('About-Screen-Title'));

  const board = [
    {
      title: 'President',
      resource: 'molly',
      text: 'President-Description',
    },
    {
      title: 'Officer',
      resource: 'zosia',
      text: 'Zosia',
    },
    {
      title: 'Officer',
      resource: 'annie',
      text: 'Vice-President',
    },
  ];

  const [curMember, setCurMember] = useState(board[0]);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <h1 className={classes.preClick}>About Us</h1>
      <img src={Resources.performance} width="700" height="550" alt="group singing" />
      <h2 className={classes.postClick}>A note from our director:</h2>
      {_.range(1, 7).map((num) => (
        <p key={num}>
          {t(`About-Screen-Text${num}`)}
        </p>
      ))}
      <p>
        {t('About-Screen-Text7')}
        <br />
        {t('About-Screen-Text8')}
      </p>
      <h2>Our board of directors</h2>
      <div>
        <Grid container spacing={3}>
          {board.map((off, i) => (
            <Grid key={off.text} item xs={4}>
              <Button onClick={() => {
                setDialogOpen(true);
                setCurMember(board[i]);
              }}
              >
                <Avatar
                  alt={t(`About-Screen-${off.title}`)}
                  src={Resources[off.resource]}
                  style={{
                    width: '120px',
                    height: '120px',
                  }}
                >
                  {off.resource.substring(0, 1).toUpperCase()}
                </Avatar>
              </Button>
            </Grid>
          ))}
        </Grid>
        <Dialog
          onClose={handleDialogClose}
          open={dialogOpen}
        >
          <DialogTitle>{`${curMember.title} ${t(`About-Screen-${curMember.text}`)}`}</DialogTitle>
          <Avatar
            alt={t(`About-Screen-${curMember.title}`)}
            src={Resources[curMember.resource]}
            style={{
              width: '150px',
              height: '150px',
              padding: 20,
            }}
          >
            {curMember.resource.substring(0, 1).toUpperCase()}
          </Avatar>
          <div style={{maxWidth: 400, padding: 16}}>
            Thousands of years ago before the dawn of man as we knew him, there was Sir Santa of Claus, an ape-like creature making crude and pointless toys out of dinobones and his own waste, hurling them at chimp-like creatures with crinkled hands regardless of how they behaved the previous year. These so-called &quot;toys&quot; were buried as witches, and defecated upon, and hurled at predators when wakened by the searing grunts of children. It wasn&apos;t a holly jolly Christmas that year. For many were killed.
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default About;
