import { useState } from 'react';

const useStyle = () => {
  const tab = { width: 200 };
  const availableStyles = [
    {
      root: {
        background: '#aa1166',
        color: '#ffffff',
      },
      indicator: {
        backgroundColor: '#123456',
      },
      tab,
    },
    {
      root: {
        background: '#1166aa',
        color: '#ffffff',
      },
      indicator: {
        backgroundColor: '#987654',
      },
      tab,
    },
    {
      root: {
        background: '#66aa11',
        color: '#000000',
      },
      indicator: {
        backgroundColor: '#ffffff',
      },
      tab,
    },
  ];

  const [style, setStyle] = useState(availableStyles[0]);

  const changeStyle = (index) => {
    setStyle(availableStyles[index]);
  };

  return [style, changeStyle];
};

export default useStyle;
