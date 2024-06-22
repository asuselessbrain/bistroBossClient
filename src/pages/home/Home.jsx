import BistroBoss from "./bistroBoss/BistroBoss";
import CallUs from "./callUs/CallUs";
import ChefRecommends from "./chefRecommends/ChefRecommends";
import FromOurMenu from "./fromOurMenu/FromOurMenu";
import FromOurMenuParalax from "./fromOurMenuParalax/FromOurMenuParalax";
import OrderOnline from "./orderOnline/OrderOnline";
import Slider from "./slider/Slider";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider />
      <OrderOnline />
      <BistroBoss />
      <FromOurMenu />
      <CallUs />
      <ChefRecommends />
      <FromOurMenuParalax />
     <Testimonials />
    </div>
  );
};

export default Home;
