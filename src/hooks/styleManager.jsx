import { useState } from 'react';

const [style, setStyle] = useState({ background: '#aa1166', color: '#ffdddd' });

const styles = [
  { background: '#aa1166', color: '#ffdddd' },
  { background: '#1166aa', color: '#aaaaaa' },
  { background: '#66aa11', color: '#888888' },
];

const handleStyleChange = (index) => {
  setStyle(styles[index]);
};

export { style, handleStyleChange };
