import React from 'react';

const Progress = ({ current, totalItems }) => {
  return (
    <p>
      {current}/{totalItems}
    </p>
  );
};
export default Progress;
