import React from 'react';
// import callToActionImage from '../../assets/images/DSC_6958.jpg'
import ServiceList from './CallToActionItems/ServiceList';
import SubscriptionService from './CallToActionItems/SubscriptionService';

const CallToAction = ({titles}) => {

  return (
    <div className=" grid md:grid-cols-2">
      <div className="col-start-1 flex flex-col justify-evenly items-center text-2xl space-y-2 md:space-y-4">
        <ServiceList titles={titles} />
        <SubscriptionService />
      </div> 
      <div className="flex justify-center mt-2 md:mt-4">
        <div className="w-1/2 rounded">
          {/* <img className="rounded-lg shadow-xl" src={callToActionImage} alt="pregnant belly in white dress facing sideways" /> */}
        </div>
      </div>
     
    </div>
  );
};

export default CallToAction;