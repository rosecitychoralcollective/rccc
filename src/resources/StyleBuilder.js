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
    this.button = {
      backgroundColor: '#595',
      color: '#fff',
      margin: '15px',
      padding: '10px',
    };
    this._phonePopover = {
      padding: '1rem',
    };
    this._tabs = {
      flexGrow: 1,
    };
    this._contactButtons = {
      flexDirection: 'row-reverse',
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
    this._indicator = color;
    return this;
  }

  body(background, text) {
    this._body = {
      backgroundColor: background,
      color: text,
      marginTop: '5rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      maxWidth: '70rem',
    };
    this._phonePopover.backgroundColor = background;
    this._phonePopover.color = text;
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
      indicatorColor: this._indicator,
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
      phonePopover: this._phonePopover,
      contactButtons: this._contactButtons,
      tabs: this._tabs,
    };
  }
}
