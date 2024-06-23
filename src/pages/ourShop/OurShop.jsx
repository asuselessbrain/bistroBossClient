import React from 'react';
import Banner from '../shared/components/banner/Banner';
import img from "../../assets/shop/banner2.jpg"
import OurShopMenu from './ourShopMenu/OurShopMenu';

const OurShop = () => {
    return (
        <div>
            <Banner img={img} title="OUR SHOP" subTitle="Would you like to try a dish?" />
            <OurShopMenu />
        </div>
    );
};

export default OurShop;