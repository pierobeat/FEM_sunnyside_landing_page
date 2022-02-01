import React from 'react';
import "../../../assets/styles/testimonial.css"

import Emily from "../../../assets/images/image-emily.jpg"
import Jennie from "../../../assets/images/image-jennie.jpg"
import Thomas from "../../../assets/images/image-thomas.jpg"


import Milkbottles from "../../../assets/images/desktop/image-gallery-milkbottles.jpg"
import Cone from "../../../assets/images/desktop/image-gallery-cone.jpg"
import Orange from "../../../assets/images/desktop/image-gallery-orange.jpg"
import Sugar from "../../../assets/images/desktop/image-gallery-sugarcubes.jpg"

const TestimonialsSection = () => {
  return (
    <div id="testimoni">
      <section id="testimonial-section">
        <div className="row mx-0">
          <div className="col col-lg-12 col-md-12 col-xs-12 testimonial-title">
            <h2>CLIENT TESTIMONIALS</h2>
          </div>
          {/* <div className="testimonial-content"> */}
            <div className="col col-lg-12 col-md-12 col-xs-12 testimonial-content-card">
              <div className="card">
                <img src={Emily} alt="testimony" />
                <div className="card-body">
                  <p className="card-text text-center">
                    We put our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                  </p>
                  <h5 className="card-subtitle mb-2 text-center">Emily R.</h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">Marketing Director</h6>
                </div>
              </div>
              <div className="card">
                <img src={Thomas} alt="testimony" />
                <div className="card-body">
                  <p className="card-text text-center">
                    Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it as satisfying and enjoyable experience.
                  </p>
                  <h5 className="card-subtitle mb-2 text-center">Thomas S.</h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">Chief Operating Officer</h6>
                </div>
              </div>
              <div className="card">
                <img src={Jennie} alt="testimony" />
                <div className="card-body">
                  <p className="card-text text-center">
                    Incredible end result! Our sales increase over 400% when we worked with sunnyside. Highly Recommended!
                  </p>
                  <h5 className="card-subtitle mb-2 text-center">Jennie F.</h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">Business Owner </h6>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>

      <section id="image-section">
        <div className="row mx-0   image-grid">
          <div className="col col-lg-3 col-md-3 col-xs-6 px-0 image-content">
            <img src={Milkbottles} alt="Milk Bottles" />
          </div>
          <div className="col col-lg-3 col-md-3 col-xs-6 px-0 image-content">
            <img src={Orange} alt="Orange" />
          </div>
          <div className="col col-lg-3 col-md-3 col-xs-6 px-0 image-content">
            <img src={Cone} alt="Cone" />
          </div>
          <div className="col col-lg-3 col-md-3 col-xs-6 px-0 image-content">
            <img src={Sugar} alt="Sugar" />
          </div>
        </div>
      </section>
    </div>
  )
};

export default TestimonialsSection;
