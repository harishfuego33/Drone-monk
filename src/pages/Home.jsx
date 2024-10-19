import React, { useEffect } from "react";
import Landing from "../sections/landing";
import Service from "../sections/service";
import Footer from "../sections/footer";
import Navbar from "../components/Navbar";
import Process from "../components/service-list";
import { useLocation } from "react-router-dom";
const Home = () => {
  const first = 1;
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return (
    <>
      <Navbar animate={first} />
      <main className={`main__page ${first == 1 ? "animate" : " "} shows`}>
        <Landing />
        <Process />
        <Service />
        <Footer />
      </main>
    </>
  );
};

export default Home;
