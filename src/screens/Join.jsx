import React, { useState } from 'react';
import fetch from 'node-fetch';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import {
  Button, FormControl, MenuItem, Select, Snackbar, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import translateString from '../utils/StringHelper';
import useTitle from '../hooks/useTitle';

const live = false;

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
    margin: '15px',
    padding: '10px',
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

  const [open, setOpen] = useState(false);

  const [isErr, setErr] = useState(false);

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

  const sendEmail = async (templateParams, templateId) => {
    const url = live
      ? 'https://api.emailjs.com/api/v1.0/email/send'
      : 'https://localhost/';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({
      service_id: 'default_service',
      template_id: templateId,
      // please don't steal this. we're a tiny organization :(
      user_id: 'user_GWNAtDymSTgcWylixxY5G',
      template_params: templateParams,
    });
    return fetch(url, {
      method: 'POST',
      headers,
      body,
    }).then((res) => {
      setErr(res.status > 299);
      setOpen(true);
    });
  };

  const sendThanksEmail = (params) => {
    const templateParams = {
      senderName: `${params.firstName} ${params.lastName}`,
      fromEmail: `${params.contact}`,
    };
    return sendEmail(templateParams, 'thanks');
  };

  const sendContactEmail = (params) => {
    const templateParams = {
      senderName: `${params.firstName} ${params.lastName}`,
      senderContact: params.contact,
      additionalInfo: params.info,
    };
    return sendEmail(templateParams, 'template_1Zw2xRI9');
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
      const firstName = adjustedFields.find((f) => f.name === 'firstName').value;
      const lastName = adjustedFields.find((f) => f.name === 'lastName').value;
      const contact = adjustedFields.find((f) => f.name === 'contact');
      const info = adjustedFields.find((f) => f.name === 'info').value;
      sendContactEmail({
        firstName, lastName, contact: contact.value, info,
      });
      if (contact.label.includes('Email')) {
        sendThanksEmail({ firstName, lastName, contact: contact.value });
      }
      setFields(fieldDefault);
    } else {
      setFields(adjustedFields);
    }
  };

  const handleSnackbarClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <div>
      <h1>{ t('Join-Page-Header') }</h1>
      <h4>{ t('Join-Page-Body') }</h4>
      <h5>{ t('Join-Page-Body-2') }</h5>
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
          return null;
        })}
        <br />
        <Button className={classes.button} type="submit" value="Submit">
          { t('Join-Page-Submit-Button') }
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert variant="filled" severity={isErr ? 'error' : 'success'}>
          {t(`Join-Page-${isErr ? 'Error' : 'Submitted'}-Toast`)}
        </Alert>
      </Snackbar>
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
