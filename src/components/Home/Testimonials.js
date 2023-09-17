import React from 'react';

export const Testimonials = ({ resumeData }) => {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>
          <div className="ten columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                <li>
                  <blockquote>
                    <p>Improving lives with Software</p>
                  </blockquote>
                </li>
              </ul>
            </div>
            {/* div.flexslider ends */}
          </div>
          {/* div.flex-container ends */}
        </div>
        {/* row ends */}ç
      </div>{' '}
      {/* text-container ends */}
    </section>
  );
};
