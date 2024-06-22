import { useEffect, useState } from "react";
import TitelSubtitle from "../../shared/components/titleSubtitle/TitelSubtitle";
import MenuCard from "../../shared/components/menuCard/MenuCard";
import ViewBtn from "../../shared/components/btn/ViewBtn";
import useMenu from "../../../hooks/useMenu";

const FromOurMenu = () => {

const [menu] = useMenu()

const popularMenu = menu.filter(item => item.category === "popular")

  return (
    <div>
      <TitelSubtitle title="FROM OUR MENU" subTitle="Check it out" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popularMenu.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <ViewBtn text="View Full  Menu" />
    </div>
  );
};

export default FromOurMenu;
