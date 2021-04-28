import React from "react";
import CallToAction from "./CallToAction";
import Values from "./Values";
import Hero from "./Hero";
import LazyLoad from 'react-lazyload';

function Home(businessData) {
  let titles = businessData.props.map(service => service.title);
  return (
    <div>
      <div className="">
        <Hero />
        <LazyLoad height={200}>
          <Values />
        </LazyLoad>

        <LazyLoad height={200}>
          <CallToAction titles={titles} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Home;  