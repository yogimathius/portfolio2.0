import React from 'react';
import { Link } from 'react-router-dom';

const NextProjectButton = ({pageId, onPrevOrNextClicked}) => {

  return (
    <Link onClick={() => onPrevOrNextClicked(pageId)} to={pageId} className="w-1/2 border-t-1 border-l-1 border-b-1 border-solid border-light-grey-text">
      {pageId}
    </Link>
  );
};

export default NextProjectButton;