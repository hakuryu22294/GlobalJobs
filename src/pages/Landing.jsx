import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Tousled stumptown taiyaki pabst yuccie slow-carb disrupt tofu
            artisan kinfolk. Meh migas mumblecore gorpcore ethical cronut brunch
            next level keytar, swag actually cold-pressed whatever hexagon.
            Chicharrones ennui tbh retro portland shabby chic. Fixie jean shorts
            VHS crucifix direct trade ethical four dollar toast butcher bushwick
            pabst paleo. YOLO mlkshk 3 wolf moon single-origin coffee palo
            santo. Squid artisan edison bulb occupy adaptogen single-origin
            coffee.
          </p>
          <Link to={"/register"} className="btn btn-hero">
            register/login
          </Link>
        </div>
        <img src={main} alt="logo" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
