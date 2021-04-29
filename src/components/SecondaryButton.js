import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryButton = ({target, onClick, disabled, children, link}) => {
  if (target === "_self") {
    return (
      <Link to={link}>
        <button
          className={`btn btn-secondary px-6 py-4`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <a href={link} target={target}>
        <button
          className={`btn btn-secondary px-6 py-4`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </a>
    )
  }
};

export default SecondaryButton;