'use client';
import "./HomeLeft.css";
import Filters from "../filters/Filters";
const HomeLeft = () => {
  return (
    <section className="home-left-cont flex flex-col justify-start items-center">
      <Filters />
    </section>
  );
};

export default HomeLeft;
