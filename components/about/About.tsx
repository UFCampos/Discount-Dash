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
          reflects our commitment.
        </p>
        <br />
        <h2 className={style.mission}>Our Mission: </h2>
        <p>
          Our mission, simple yet powerful, revolves around reducing food waste
          while caring for both people and the environment. We firmly believe
          that we can make a positive difference by rescuing surplus food from
          your favorite businesses and ensuring it doesn't end up in landfills,
          thereby contributing to the fight against hunger.
        </p>
        <br />
        <h2 className={style.mascot}>Our Mascot: </h2>
        <p>
          The Panda The panda, our mascot, symbolizes our vision of a cleaner
          and more balanced world. Just as pandas dedicate themselves to
          clearing forests of excess bamboo, at Discount Dash, we focus on
          clearing our favorite establishments of unsold surplus food. By
          rescuing this food, we alleviate the strain on our natural resources
          and contribute to the preservation of our planet's biodiversity.
        </p>
        <br />
        <p>
          At Discount Dash, we are not merely a company; we are a movement that
          promotes a more sustainable and equitable world. Through our
          commitment to reducing food waste and caring for both people and the
          planet, we hope to inspire you to join us in this noble cause.
          Together, we can make a difference.
        </p>
      </div>
    </div>
  );
};

export default About;
