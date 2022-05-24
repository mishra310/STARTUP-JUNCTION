import React, { useEffect } from "react";

import { BsFillBookmarkStarFill } from "react-icons/bs";

import Feature from "./Feature";
import { FeatureList } from "./dataa";


const Features = () => {
  useEffect(() => {
   
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Services</h2>
          <p className="u-text-small">
            SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi labore, harum officiis error quia cupiditate?
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={"http://localhost:5000/images/logo.svg"} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;