import React from "react";
import Landing from "../sections/landing";
import Service from "../sections/service";
import Footer from "../sections/footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
const Home = () => {
  const [first, setFirst] = useState(1);
  // setTimeout(() => setFirst(1), 1000);
  return (
    <>
      <Navbar animate={first} />
      <main className={`main__page ${first == 1 ? "animate" : " "} shows`}>
        <Landing />
        <Service />
        <Footer />
      </main>
    </>
  );
};

export default Home;
