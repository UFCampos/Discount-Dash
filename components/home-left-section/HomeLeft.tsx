'use client';
import "./HomeLeft.css";
import Filters from "../filters/Filters";
const HomeLeft = () => {
  return (
    <section className="home-left-cont flex flex-col justify-center items-center">
      <h2>Filters</h2>
      <Filters />
    </section>
  );
};

export default HomeLeft;
