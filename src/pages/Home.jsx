import React from "react";
import Landing from "../sections/landing";
import Service from "../sections/service";
import Footer from "../sections/footer";
import Navbar from "../components/Navbar";
import Process from "../components/service-list";
const Home = () => {
  const first = 1;
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
