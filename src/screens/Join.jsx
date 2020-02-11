import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, FormHelperText, MenuItem, Select, TextField } from '@material-ui/core';
import MainContent from '../components/MainContent';
import translateString from '../utils/StringHelper';

const JoinScreen = () => {
  const t = translateString;

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pref: 'phone',
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

  return (
    <div>
      <MainContent
        header={t('Join-Screen-Header')}
        body={t('Join-Screen-Body')}
      />
      <form onSubmit={handleSubmit} noValidate autoComplete="off">

        <FormControl>
          <TextField required id="fname" name="firstName" label={t('JoinPage-Textfield-FirstName')} value={data.firstName} onChange={onChange} />
        </FormControl>
        <FormControl>
          <TextField required id="lname" name="lastName" label={t('JoinPage-Textfield-LastName')} value={data.lastName} onChange={onChange} />
        </FormControl>
        <FormControl>
          <TextField required id="email" name="email" label={t('JoinPage-Textfield-Email')} value={data.email} onChange={onChange} />
        </FormControl>
        <FormControl>
          <TextField required id="phone" name="phone" label={t('JoinPage-Textfield-Phone')} value={data.phone} onChange={onChange} />
        </FormControl>
        <FormControl>
          <Select required id="pref" name="pref" label="Preference" value={data.pref} onChange={onChange}>
            <MenuItem value="phone">{ t('JoinPage-Preference-Dropdown-Phone') }</MenuItem>
            <MenuItem value="email">{ t('JoinPage-Preference-Dropdown-Email') }</MenuItem>
          </Select>
          <FormHelperText>{ t('JoinPage-Preference-Dropdown-Helptext') }</FormHelperText>
        </FormControl>
        <FormControl>
          <TextField multiline id="info" name="info" label="Any additional information?" value={data.info} onChange={onChange} />
        </FormControl>
        <Button type="submit" value="Submit">
          { t('JoinPage-Submit-Button') }
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
