import React from "react";
import CallToAction from "./CallToAction";
import About from "./About/index.js";
import Hero from "./Hero";
import LazyLoad from 'react-lazyload';

function Home(businessData) {
  let titles = businessData.props.map(service => service.title);
  return (
    <div>
      <div className="">
        <Hero />
        <LazyLoad height={200}>
          <About />
        </LazyLoad>

        <LazyLoad height={200}>
          <CallToAction titles={titles} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Home;  