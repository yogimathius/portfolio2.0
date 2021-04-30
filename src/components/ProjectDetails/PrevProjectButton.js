import React from 'react';
import { Link } from 'react-router-dom';

const PrevProjectButton = ({pageId, onPrevOrNextClicked}) => {

  return (
    <Link to={pageId} onClick={() => onPrevOrNextClicked(pageId)} className="w-1/2 border-t-1 border-r-1 border-b-1 border-solid border-light-grey-text">
      {pageId}
    </Link>
  );
};

export default PrevProjectButton;