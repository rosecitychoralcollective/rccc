import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormControl, IconButton, MenuItem, Select, Snackbar, TextField,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
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
  formFieldUnvalidated: {
    width: '80%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    borderColor: '#f00',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#595',
    color: '#fff',
    margin: '10px',
    padding: '5px',
  },
  snackbar: {
    color: '#d00',
  },
});

const JoinScreen = () => {
  const t = translateString;
  useTitle(t('Join-Page-Title'));

  const classes = useStyles();

  const fieldDefault = [
    {
      id: 'fname',
      name: 'firstName',
      label: 'Join-Page-Textfield-FirstName',
      value: '',
      required: true,
      validated: true,
      visible: true,
    },
    {
      id: 'lname',
      name: 'lastName',
      label: 'Join-Page-Textfield-LastName',
      value: '',
      required: true,
      validated: true,
      visible: true,
    },
    {
      id: 'info',
      name: 'info',
      label: 'Join-Page-Textfield-Infofield',
      value: '',
      required: false,
      validated: true,
      visible: true,
    },
    {
      id: 'contact',
      name: 'contact',
      label: 'Join-Page-Textfield-Phone',
      value: '',
      required: true,
      validated: true,
      visible: false,
    },
  ];

  const [fields, setFields] = useState(fieldDefault);

  const getContactField = (value) => {
    const formFields = [...fields];
    const lastField = formFields.pop();
    switch (value) {
      case 'phone':
        lastField.label = 'Join-Page-Textfield-Phone';
        lastField.visible = true;
        break;
      case 'email':
        lastField.label = 'Join-Page-Textfield-Email';
        lastField.visible = true;
        break;
      default:
        break;
    }
    formFields.push(lastField);
    setFields(formFields);
  };

  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    if (name === 'pref') {
      getContactField(value);
    } else {
      const oldFields = [...fields];
      const field = oldFields.find((f) => f.name === name);
      const fieldIndex = oldFields.indexOf(field);
      field.value = value;
      oldFields[fieldIndex] = field;
      setFields(oldFields);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const adjustedFields = fields.map((field) => {
      const value = field.value.replace(/\s/g, '');
      const oldField = { ...field };
      oldField.validated = field.required ? value.length > 0 : true;
      return oldField;
    });
    const isFormComplete = adjustedFields.every((field) => field.validated);
    if (isFormComplete) {
      setOpen(true);
      setFields(fieldDefault);
    } else {
      setFields(adjustedFields);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <div style={{ padding: 25 }}>
      <h1>{ t('Join-Page-Header') }</h1>
      <h4>{ t('Join-Page-Body') }</h4>
      <form className="select" onSubmit={handleSubmit} noValidate autoComplete="off">
        {fields.find((field) => field.name === 'contact').visible ? (
          <div />
        ) : (
          <FormControl className={classes.formFieldUnvalidated}>
            <Select required id="pref" name="pref" label="Preference" value="helptext" onChange={onChange}>
              <MenuItem disabled value="helptext">{t('Join-Page-Preference-Dropdown-Helptext')}</MenuItem>
              <MenuItem value="phone">{ t('Join-Page-Preference-Dropdown-Phone') }</MenuItem>
              <MenuItem value="email">{ t('Join-Page-Preference-Dropdown-Email') }</MenuItem>
            </Select>
          </FormControl>
        )}
        {fields.map((field) => {
          if (field.visible) {
            return (
              <FormControl
                key={field.id}
                className={field.validated ? classes.formField : classes.formFieldUnvalidated}
              >
                <TextField
                  required={field.required}
                  id={field.id}
                  name={field.name}
                  label={t(field.label)}
                  value={field.value}
                  onChange={onChange}
                />
              </FormControl>
            );
          }
        })}
        <br />
        <Button className={classes.button} type="submit" value="Submit">
          { t('Join-Page-Submit-Button') }
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        // autoHideDuration={6000}
        onClose={handleSnackbarClose}
        className={classes.snackbar}
        message={t('Join-Page-Submitted-Toast')}
        action={(
          <>
            <IconButton size="large" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        )}
      />
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
