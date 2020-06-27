import React, { useState } from 'react';
import {
  Avatar, Button, Dialog, DialogTitle, Grid,
} from '@material-ui/core';
import _ from 'lodash';
import translateString from '../utils/StringHelper';
import Resources from '../resources/resources';
import useTitle from '../hooks/useTitle';
import board from '../resources/officers';

const About = ({ classes }) => {
  const t = translateString;
  const [dialogOpen, setDialogOpen] = useState(false);
  useTitle(t('About-Screen-Title'));

  const [curMember, setCurMember] = useState(board[0]);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <h1 className={classes.primary}>About Us</h1>
      <img src={Resources.performance} width="100%" height="auto" alt="group singing" />
      <h2 className={classes.secondary}>A note from our director:</h2>
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
      <h2 className={classes.secondary}>Our board of directors</h2>
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
                  alt={curMember.text}
                  src={Resources[off.thumb]}
                  style={{
                    maxWidth: '100px',
                    width: 'auto',
                    maxHeight: '100px',
                    height: 'auto',
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
          <DialogTitle>{`${curMember.title} ${curMember.text}`}</DialogTitle>
          <Avatar
            alt={t(`About-Screen-${curMember.title}`)}
            src={Resources[curMember.resource]}
            style={{
              width: 'auto',
              height: 'auto',
              padding: '5rem',
            }}
          >
            {curMember.resource.substring(0, 1).toUpperCase()}
          </Avatar>
          <div style={{maxWidth: 'auto', padding: '5rem'}}>
            {curMember.bio}
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default About;
