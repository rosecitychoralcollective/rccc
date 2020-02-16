import { useState } from 'react';

const useStyle = (index) => {
  const availableStyles = [
    { background: '#aa1166', color: '#ffffff' },
    { background: '#1166aa', color: '#ffffff' },
    { background: '#66aa11', color: '#000000' },
  ];

  const [style, setStyle] = useState(availableStyles[0]);

  const changeStyle = (index) => {
    setStyle(availableStyles[index]);
  };

  return [style, changeStyle];
};

export default useStyle;
