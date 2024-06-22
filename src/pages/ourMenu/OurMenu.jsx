import Banner from "../shared/components/banner/Banner";
import img from '../../assets/menu/banner3.jpg';
import img2 from '../../assets/menu/dessert-bg.jpeg';
import img3 from '../../assets/menu/pizza-bg.jpg';
import img4 from '../../assets/menu/salad-bg.jpg';
import img5 from '../../assets/menu/soup-bg.jpg';
import TitelSubtitle from "../shared/components/titleSubtitle/TitelSubtitle";
import TodaysOffer from "./todaysOffer/TodaysOffer";
import Desserts from "./desserts/Desserts";
import Pizza from "./pizza/Pizza";
import Salad from "./salad/Salad";
import Soup from "./soup/Soup";

const OurMenu = () => {
    return (
        <div>
            <Banner img={img} title="OUR MENU" subTitle="Would you like to try a dish?" />
            <TitelSubtitle title="TODAY'S OFFER" subTitle="Don't miss"/>
            <TodaysOffer />
            <Banner img={img2} title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Desserts />
            <Banner img={img3} title="PIZZA" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Pizza />
            <Banner img={img4} title="SALADS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Salad />
            <Banner img={img5} title="SOUPS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Soup />
        </div>
    );
};

export default OurMenu;