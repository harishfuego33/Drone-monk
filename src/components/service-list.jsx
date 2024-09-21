import React from "react";

const Process = () => {
  return (
    <div className="service__process">
      <span className="service__line-horizon"></span>
      <div className="service__process-top">
        <div className="service__item-top">
          <p className="service__para service__para-odd">
            Reach out to us via our website or phone to book your drone service.
            Share the details. and we&apos;ll shoot you a confirmation email.
          </p>
        </div>
        <div className="service__item-top">
          <div className="service__step">
            <h2 className="service__step-2">Send Us Your Drone</h2>
            <h2 className="service__step-1">step 2</h2>
          </div>
        </div>
        <div className="service__item-top">
          <p className="service__para service__para-odd">
            Pack your drone snugly and courier it to our address. We'll ping you
            as soon as it lands safely with us.
          </p>
        </div>
        <div className="service__item-top">
          <div className="service__step">
            <h2 className="service__step-2">Return to Sender</h2>
            <h2 className="service__step-1">step 4</h2>
          </div>
        </div>
      </div>
      <div className="service__process-btm">
        <div className="service__item-btm">
          <div className="service__step-even">
            <h2 className="service__step-1">step 1</h2>
            <h2 className="service__step-2">Confirm You service</h2>
          </div>
        </div>
        <div className="service__item-btm">
          <p className="service__para service__para-even">
            Once we get your drone, we spring into action! Our expert team
            services it, runs thorough tests, and emails you a quote. Your drone
            will be ready for action in no time!
          </p>
        </div>
        <div className="service__item-btm">
          <div className="service__step-even">
            <h2 className="service__step-1">step 3</h2>
            <h2 className="service__step-2">We Work Our Magic</h2>
          </div>
        </div>
        <div className="service__item-btm">
          <p className="service__para service__para-even">
            After ensuring everything's top- notch, we'll courier your drone
            back to your address. Enjoy your perfectly serviced drone, ready for
            your next adventure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
