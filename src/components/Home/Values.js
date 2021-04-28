import React from 'react';
import { Link } from 'react-router-dom';
// import birthBelly from '../../assets/images/DSC_6667.jpg'

const Values = () => {
  const hello = 'Hello & Welcome'
  return (
    <div className="grid md:grid-cols-2 my-4 md:my-24 items-center">

      <div className="col-start-1 mx-auto md:w-5/6 md:mt-0 flex flex-col space-y-10">
        <h1 className="text-3xl md:text-5xl font-header text-maximum-blue-green uppercase mb-4  text-center md:text-left">{hello}</h1>
        <div className="border-b-2 border-solid border-gray-300 w-1/12"></div>
        <h3 className="text-2xl font-semibold text-center md:text-left">I'm so glad you are here!</h3>
        <div className="space-y-6 text-lg md:text-2xl">
          <p> 
          I'm Clara Johnson; mother of 3, Radical Birth Keeper, Homebirth Doula, Prenatal Yoga Teacher, and Craniosacral Practitioner. I have been supporting people in birth for 11 years and currently provide in person care in Squamish BC and virtual support globally.</p>
          <p>If you envision welcoming your baby at home, in love, and in the presence of only those who will honour your birth sovereignty please know you absolutely deserve that journey and I'd love to chat!
          </p>
          <p>I believe with a passion that YOU were made to give birth in health and wholeness, surrounded in love, and with the support of others who believe in YOUR power to do the work.  
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Link to="/contact" type="button" className="btn btn-primary">Connect With Me</Link>
        </div>
      </div>
      <div className="col-start-1 md:col-start-2 md:row-start-1 mr-2">
        {/* <img className="rounded-xl shadow-xl" src={birthBelly} alt="pregnant belly in light pink dress" /> */}
      </div>
    </div>
  );
};

export default Values;