/* eslint-disable no-underscore-dangle */
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

  preClick(color) {
    this._preClick = { color };
    return this;
  }

  postClick(color) {
    this._postClick = { color };
    return this;
  }

  build() {
    return {
      header: this._header,
      indicator: this._indicator,
      body: this._body,
      preClick: this._preClick,
      postClick: this._postClick,
      avatar: this._avatar,
      formField: this.formField,
      formFieldUnvalidated: this.formFieldUnvalidated,
      button: this.button,
    };
  }
}
