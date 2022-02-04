import React from 'react'
import "../../../assets/styles/services.css"

import Egg from "../../../assets/images/desktop/image-transform.jpg"
import Pink_Cup from "../../../assets/images/desktop/image-stand-out.jpg"
import Cherry from "../../../assets/images/desktop/image-graphic-design.jpg"
import Orange from "../../../assets/images/desktop/image-photography.jpg"

const ServicesSection = () => {
  return (
    <div id="services">
        <section id="section-1">
            <div className="row mx-0">
                {/* section 1 left */}
                <div className="col col-lg-6 col-md-6 col-12 px-0 left">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Transform Your Brand</h5>
                            <p className="card-text">
                                We are a full-service creative agency specializing in helping brands grow fast.
                                Engage your clients trough compelling visuals that do most of the marketing for you.
                            </p>
                            <a href="/#" className="card-link">
                                <img src="https://i.ibb.co/TB2DVgK/learnmore.png" alt="learn more" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* section 1 right */}
                <div className="col col-lg-6 col-md-6 col-12 px-0 right">
                    <img src={Egg} alt="egg" />
                </div>   
            </div>         
        </section>

        <section id="section-2">
            <div className="row mx-0">
                {/* section 2 left */}
                <div className="col col-lg-6 col-md-6 col-12 px-0 left">
                    <img src={Pink_Cup} alt="egg" />
                </div>
                {/* section 2 right */}
                <div className="col col-lg-6 col-md-6 col-12 px-0 right">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Stand Out To The Right Audience</h5>
                            <p className="card-text">
                                Using collaborative formula of designers, researchers, photographers, videographers,
                                and copywriters, we'll build and extend your brand in digital places.
                            </p>
                            <a href="/#" className="card-link">
                                <img src="https://i.ibb.co/TB2DVgK/learnmore.png" alt="learn more" />
                            </a>
                        </div>
                    </div>
                </div>   
            </div>         
        </section>

        <section id="section-3">
          <div className="row mx-0">
            <div className="col col-lg-6 col-md-6 col-12 px-0 left">
              <img src="https://i.ibb.co/ssvvmSd/cherries.png" alt="egg" />
            </div>
            {/* section 1 right */}
            <div className="col col-lg-6 col-md-6 col-12 px-0 right">
              <img src={Orange} alt="egg" />
            </div>   
          </div>
        </section>
    </div>
  )
};

export default ServicesSection;