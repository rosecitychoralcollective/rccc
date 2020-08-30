import StyleBuilder from './StyleBuilder';

const otherRed = '#ed1c24';

const availableStyles = [
  new StyleBuilder()
    .header(otherRed, '#fff5c9')
    .indicator('primary')
    .body('#fff5c9', '#194e83')
    .primaryHeading('#194e83')
    .secondaryHeading('#007dc5')
    .link('#ed1c24')
    .field('#007dc5')
    .invalidField('#ed1c24')
    .build(),
  new StyleBuilder()
    .header(otherRed, '#f7f5ed')
    .indicator('primary')
    .body('#f7f5ed', '#009344')
    .primaryHeading('#009344')
    .secondaryHeading('#8cc63e')
    .link('#ed1c24')
    .field('#8cc63e')
    .invalidField('#ed1c24')
    .build(),
  new StyleBuilder()
    .header(otherRed, '#eff0f1')
    .indicator('primary')
    .body('#eff0f1', '#020202')
    .primaryHeading('#020202')
    .secondaryHeading('#919693')
    .link('#ed1c24')
    .field('#cae0f8')
    .invalidField('#ed1c24')
    .build(),
  new StyleBuilder()
    .header(otherRed, '#000000')
    .indicator('primary')
    .body('fcfbe3', '#2e3192')
    .primaryHeading('#2e3192')
    .secondaryHeading('#00bff3')
    .link('#00bff3')
    .field('#00bff3')
    .invalidField('#ed1c24')
    .build(),
  new StyleBuilder()
    .header(otherRed, '#757575')
    .indicator('primary')
    .body('#fcfbe3', '#757575')
    .primaryHeading('#757575')
    .secondaryHeading('#b71c1c')
    .link('#ed1c24')
    .field('#e0e0e0')
    .invalidField('#ed1c24')
    .build(),
  new StyleBuilder()
    .header(otherRed, '#fcfbe3')
    .indicator('primary')
    .body('#fcfbe3', '#991b39')
    .primaryHeading('#991b39')
    .secondaryHeading('#f36c36')
    .link('#f36c36')
    .field('#991b39')
    .invalidField('#ed1c24')
    .build(),
  new StyleBuilder()
    .header(otherRed, '#efe4b0')
    .indicator('primary')
    .body('#efe4b0', '#3f48cc')
    .primaryHeading('#3f48cc')
    .secondaryHeading('#99d9ea')
    .link('#99d9ea')
    .field('#ffc90e')
    .invalidField('#ed1c24')
    .build(),
  new StyleBuilder()
    .header(otherRed, '#374f67')
    .indicator('primary')
    .body('#fcfbe3', '#374f67')
    .primaryHeading('#374f67')
    .secondaryHeading('#7dccbf')
    .link('#7dccbf')
    .field('#ffc90e')
    .invalidField('#ed1c24')
    .build(),
];

export default availableStyles;
