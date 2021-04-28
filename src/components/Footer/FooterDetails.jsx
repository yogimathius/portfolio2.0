import React from 'react';

const FooterDetails = () => {
  return (
    <div className="row-start-3 md:row-start-1 md:col-start-3 md:col-span-2 flex flex-col items-center md:items-start lg:items-center justify-center space-y-4  ">
    <h3 className="md:text-2xl font-bold px-2 md:px-0 text-center md:text-left">Re-wild your pregnancy and birth in power.</h3>
    <div className="flex flex-col md:flex-row md:space-x-2 text-center md:text-left">
      <p>In person and virtual support</p>
      <span className="hidden md:block">|</span>
      <p>Squamish, BC, Canada</p>
    </div>
    <p className="m-0 text-sm italic">
      Copyright &copy; Sovereign Birth 2020
    </p>
  </div>
  );
};

export default FooterDetails;