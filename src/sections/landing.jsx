import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItems from "../components/MenuItems";
const droneList = [
  {
    id: 1,
    title: "Dji",
    submenu: [
      {
        id: 1.1,
        title: "Mavic pro series",
        submenu: [
          {
            id: 1.11,
            title: "Mavic 3 pro",
          },
          {
            id: 1.12,
            title: "Mavic 3 classic",
          },
        ],
      },
      {
        id: 1.2,
        title: "Matrice series",
        submenu: [
          {
            id: 1.21,
            title: "300 RTk",
          },
          {
            id: 1.22,
            title: "310 RTk",
          },
        ],
      },
      {
        id: 1.3,
        title: "FPV series",
        submenu: [
          {
            id: 1.31,
            title: "DJI FPV Goggles V2",
          },
          {
            id: 1.32,
            title: "DJI FPV Remote Controller 2",
          },
        ],
      },
      {
        id: 1.4,
        title: "Mavic enterprise",
        submenu: [
          {
            id: 1.41,
            title: "Mavic 2 Enterprise",
          },
          {
            id: 1.42,
            title: "Mavic 2 Enterprise Dual",
          },
          {
            id: 1.43,
            title: "Mavic 2 Enterprise Advanced",
          },
          {
            id: 1.44,
            title: "Mavic 3 Enterprise",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Autel",
    submenu: [
      {
        id: 2.1,
        title: "EVO Series",
        submenu: [
          {
            id: 2.11,
            title: "EVO Lite+",
          },
          {
            id: 2.12,
            title: "EVO Lite",
          },
          {
            id: 2.13,
            title: "EVO II Pro",
          },
          {
            id: 2.14,
            title: "EVO II Dual 640T",
          },
        ],
      },
      {
        id: 2.2,
        title: "Dragonfish Series",
        submenu: [
          {
            id: 2.21,
            title: "Dragonfish Standard",
          },
          {
            id: 2.22,
            title: "Dragonfish Lite",
          },
          {
            id: 2.23,
            title: "Dragonfish Pro",
          },
        ],
      },
      {
        id: 2.3,
        title: "X-Star Series",
        submenu: [
          {
            id: 2.31,
            title: "X-Star Premium",
          },
          {
            id: 2.32,
            title: "X-Star",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Parrot",
    submenu: [
      {
        id: 3.1,
        title: "Anafi Series",
        submenu: [
          {
            id: 3.11,
            title: "Anafi USA",
          },
          {
            id: 3.12,
            title: "Anafi AI",
          },
          {
            id: 3.13,
            title: "Anafi Thermal",
          },
          {
            id: 3.14,
            title: "Anafi FPV",
          },
        ],
      },
      {
        id: 3.2,
        title: "Disco Series",
        submenu: [
          {
            id: 3.21,
            title: "Disco-Pro AG",
          },
          {
            id: 3.22,
            title: "Disco FPV",
          },
        ],
      },
      {
        id: 3.3,
        title: "Bebop Series",
        submenu: [
          {
            id: 3.31,
            title: "Bebop 2",
          },
          {
            id: 3.32,
            title: "Bebop-Pro Thermal",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Other",
  },
];
const maintainList = [
  {
    id: 1,
    title: "Routine Maintenance",
  },
  {
    id: 2,
    title: "Drone Repair",
  },
  {
    id: 2,
    title: "Need drone spares",
  },
];
const Landing = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [activeMenu1, setActiveMenu1] = useState(0);
  const [activeMenu2, setActiveMenu2] = useState(0);
  let depthLevel = 1;

  const navigate = useNavigate();
  const redirect = () => {
    if (inputOne !== "" && inputTwo !== "") {
      navigate("/contact", {
        state: {
          drone: inputOne,
          service: inputTwo,
        },
      });
    }
  };
  return (
    <section className={`landing__section`}>
      <div className="landing__section-title">
        <h1 className="landing__section-h1">
          India's first professional drone care platform.
        </h1>
        <p className="landing__section-p">
          Stay tuned and be ready to elevate your drone experience with UFO
          Drone Care!
        </p>
        <div className="landing__section-inputbox">
          <div
            className="landing__section-inputs"
            onMouseEnter={() => setActiveMenu1(1)}
            onMouseLeave={() => setActiveMenu1(0)}
          >
            <input
              placeholder="select the drone"
              className="landing__section-input"
              value={inputOne}
            />
            <span
              className={`arrow ${activeMenu1 ? "arrow-rotate" : " "}`}
            ></span>
            <div
              className={`drone-list ${activeMenu1 ? " " : "hidden"}`}
              onMouseEnter={() => setActiveMenu1(1)}
              onMouseLeave={() => setActiveMenu1(0)}
            >
              <ul className="menus">
                {activeMenu1
                  ? droneList.map((item, index) => (
                      <MenuItems
                        items={item}
                        key={index}
                        depthLevel={depthLevel}
                        setInputOne={setInputOne}
                      />
                    ))
                  : null}
              </ul>
            </div>
          </div>
          <div className="landing__section-inputs">
            <input
              placeholder="select the service"
              className="landing__section-input"
              value={inputTwo}
              readOnly
              onMouseEnter={() => setActiveMenu2(1)}
              onMouseLeave={() => setActiveMenu2(0)}
            />
            <span
              className={`arrow ${activeMenu2 ? "arrow-rotate" : " "}`}
            ></span>
            <div
              className={`drone-list ${activeMenu2 ? " " : "hidden"}`}
              onMouseEnter={() => setActiveMenu2(1)}
              onMouseLeave={() => setActiveMenu2(0)}
            >
              <ul className="menus">
                {activeMenu2
                  ? maintainList.map((item, index) => (
                      <MenuItems
                        items={item}
                        key={index}
                        depthLevel={depthLevel}
                        setInputOne={setInputTwo}
                      />
                    ))
                  : null}
              </ul>
            </div>
          </div>
          <button onClick={redirect} className="get-started">
            Get Started
          </button>
        </div>
      </div>
      <div className="landing__section-image">
        <img
          src="background/drone.png"
          alt="drone"
          className="img up-down"
        />
      </div>
    </section>
  );
};
export default Landing;
