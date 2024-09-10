import Navbar from "../components/Navbar";
import React, { useState } from "react";
import MenuItems from "../components/MenuItems";
import Landing from "../sections/landing";
const Home = () => {
  return (
    <main>
      <Navbar />
      <Landing />
    </main>
  );
};

export default Home;
