import React from 'react';

const SecondaryButton = (props) => {
  return (
    <button
      className={`btn btn-secondary px-6 py-4`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default SecondaryButton;