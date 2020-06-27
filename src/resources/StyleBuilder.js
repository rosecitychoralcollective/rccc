/* eslint-disable no-underscore-dangle */
const fieldDefault = {
  width: '80%',
  padding: '12px',
  border: '1px solid',
  borderRadius: '4px',
  boxSizing: 'border-box',
  resize: 'vertical',
};

export default class StyleBuilder {
  constructor() {
    this.avatar = {
      padding: '2rem',
      width: '10rem',
      height: '10rem',
    };
    this.formField = {
      width: '80%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      resize: 'vertical',
    };
    this.formFieldUnvalidated = {
      width: '80%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      borderColor: '#f00',
      resize: 'vertical',
    };
    this.button = {
      backgroundColor: '#595',
      color: '#fff',
      margin: '15px',
      padding: '10px',
    };
  }

  field(color) {
    this._formField = {
      ...fieldDefault,
      borderColor: color,
    };
    return this;
  }

  invalidField(color) {
    this._invalidField = {
      ...fieldDefault,
      borderColor: color,
    };
    return this;
  }

  header(background, text) {
    this._header = {
      background,
      color: text,
    };
    return this;
  }

  indicator(color) {
    this._indicator = {
      backgroundColor: color,
    };
    return this;
  }

  body(background, text) {
    this._body = {
      backgroundColor: background,
      color: text,
      padding: '3rem',
      paddingLeft: '2rem',
      maxWidth: '50rem',
    };
    return this;
  }

  primaryHeading(color) {
    this._primaryHeading = { color };
    return this;
  }

  secondaryHeading(color) {
    this._secondaryHeading = { color };
    return this;
  }

  link(color) {
    this._link = { color };
    return this;
  }

  build() {
    return {
      header: this._header,
      indicator: this._indicator,
      body: this._body,
      link: this._link,
      primary: this._primaryHeading,
      secondary: this._secondaryHeading,
      avatar: this._avatar,
      formField: this.formField,
      formFieldUnvalidated: this.formFieldUnvalidated,
      button: this.button,
      field: this._formField,
      invalidField: this._invalidField,
    };
  }
}
