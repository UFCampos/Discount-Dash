import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.containerAbout}>
      <div className={style.title}>
        <h1>About Discount Dash</h1>
      </div>
      <div className={style.content}>
        <p>
          {" "}
          About Discount Dash: Rescuing Food and Caring for the Planet At
          Discount Dash, our dedication lies in the mission of combating food
          waste and preserving our precious planet. Every action we take
          reflects our commitment. <br />
          Our Mission: <br />
                       Our mission, simple yet powerful, revolves around reducing food waste
          while caring for both people and the environment. We firmly believe
          that we can make a positive difference by rescuing surplus food from
          your favorite businesses and ensuring it doesn't end up in landfills,
          thereby contributing to the fight against hunger.
          
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default About;
