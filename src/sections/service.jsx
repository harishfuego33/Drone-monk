import React from "react";

const Service = () => {
  return (
    <section className="service__section">
      <div className="service__list">
        <div className="service__comps">
          <h1>Routine maintenance</h1>
        </div>
        <div className="service__comps">
          <h1>Drone repair</h1>
        </div>
        <div className="service__comps">
          <h1>Need drone spare</h1>
        </div>
      </div>
      <div className="service__brand">
        <div className="service__brand-comps">
          <img src="/logo/dji.webp" alt="dji" />
        </div>
        <div className="service__brand-comps">
          <img src="/logo/autel.webp" alt="autel" />
        </div>
        <div className="service__brand-comps">
          <img src="/logo/parrot.webp" alt="parrot" />
        </div>
        <div className="service__brand-comps">
          <img src="/logo/more.webp" alt="more" />
        </div>
      </div>
    </section>
  );
};
export default Service;
