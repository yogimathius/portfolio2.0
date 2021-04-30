import React from 'react';
import { Link } from 'react-router-dom';
import { convertKabab } from '../../helpers/convertKabab';
import arrowLeft from '../../assets/icons/arrow-left.svg';

const PrevProjectButton = ({pageId, onPrevOrNextClicked}) => {
  const title = convertKabab(pageId)

  return (
    <Link to={pageId} onClick={() => onPrevOrNextClicked(pageId)} className="w-1/2 border-t-1 border-r-1 border-b-1 border-solid border-light-grey-text text-4xl py-12">
      <div className="mr-4">
        <h3 className="text-4xl">{title}</h3>
        <p className="text-2xl text-light-grey-text">Next Project</p>
      </div>
      <div>
        <img src={arrowLeft} alt="arrow right"></img>
      </div>
    </Link>
  );
};

export default PrevProjectButton;