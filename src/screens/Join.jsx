import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormControl, FormHelperText, MenuItem, Select, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import translateString from '../utils/StringHelper';
import useTitle from '../hooks/useTitle';

const useStyles = makeStyles({
  formField: {
    width: '80%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#595',
    color: '#fff',
    margin: '10px',
    padding: '5px',
  },
});

const JoinScreen = () => {
  const t = translateString;
  useTitle(t('Join-Page-Title'));

  const classes = useStyles();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    pref: 'helptext',
    info: '',
  });

  const onChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    const oldData = { ...data };
    oldData[name] = value;
    setData(oldData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  const getContactField = () => {
    switch (data.pref) {
      case 'phone':
        return (
          <FormControl className={classes.formField}>
            <TextField required id="phone" name="phone" label={t('Join-Page-Textfield-Phone')} value={data.phone} onChange={onChange} />
          </FormControl>
        );
      case 'email':
        return (
          <FormControl className={classes.formField}>
            <TextField required id="email" name="email" label={t('Join-Page-Textfield-Email')} value={data.email} onChange={onChange} />
          </FormControl>
        );
      default:
        break;
    }
    return (<div />);
  };

  return (
    <div style={{ padding: 25}}>
      <h1>{ t('Join-Page-Header') }</h1>
      <h4>{ t('Join-Page-Body') }</h4>
      <form className="select" onSubmit={handleSubmit} noValidate autoComplete="off">

        <FormControl className={classes.formField}>
          <TextField required id="fname" name="firstName" label={t('Join-Page-Textfield-FirstName')} value={data.firstName} onChange={onChange} />
        </FormControl>
        <FormControl className={classes.formField}>
          <TextField required id="lname" name="lastName" label={t('Join-Page-Textfield-LastName')} value={data.lastName} onChange={onChange} />
        </FormControl>
        <FormControl className={classes.formField}>
          <Select required id="pref" name="pref" label="Preference" value={data.pref} onChange={onChange}>
            <MenuItem disabled value="helptext">{t('Join-Page-Preference-Dropdown-Helptext')}</MenuItem>
            <MenuItem value="phone">{ t('Join-Page-Preference-Dropdown-Phone') }</MenuItem>
            <MenuItem value="email">{ t('Join-Page-Preference-Dropdown-Email') }</MenuItem>
          </Select>
        </FormControl>
        { getContactField() }
        <FormControl className={classes.formField}>
          <TextField multiline id="info" name="info" label="Any additional information?" value={data.info} onChange={onChange} />
        </FormControl>
        <br />
        <Button className={classes.button} type="submit" value="Submit">
          { t('Join-Page-Submit-Button') }
        </Button>
      </form>
    </div>
  );
};

JoinScreen.propTypes = {
  style: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    action1: PropTypes.string,
    action2: PropTypes.string,
    action3: PropTypes.string,
  }).isRequired,
};

export default JoinScreen;
