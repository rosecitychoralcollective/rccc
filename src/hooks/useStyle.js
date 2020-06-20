import { useState } from 'react';
import availableStyles from '../resources/availableStyles';

const useStyle = () => {
  const [style, setStyle] = useState(availableStyles[2]);

  const changeStyle = (index) => {
    setStyle(availableStyles[index]);
  };

  return [style, changeStyle];
};

export default useStyle;
