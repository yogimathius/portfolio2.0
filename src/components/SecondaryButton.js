import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryButton = (props) => {
  return (
    <Link to={props.target}>
      <button
        className={`btn btn-secondary px-6 py-4`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default SecondaryButton;