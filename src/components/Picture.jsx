import React from "react";

const Picutre = () => {
  return (
    <picture className="service__process">
      <source
        srcSet="/Background/process-desktop.png"
        type="image/png"
        className="service__process-desktop "
        width="100%"
        media="(min-width: 480px)"
      />
      <img
        src="/Background/process-mobile.png"
        className="service__process-mobile img"
      />
    </picture>
  );
};

export default Picutre;
