import useMenu from "../../../../hooks/useMenu";
import MenuCard2 from "../MenuCard2/MenuCard2";

const OurMenuMap = ({itemCategory}) => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === `${itemCategory}`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
      {dessert.map((item) => (
        <MenuCard2 key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OurMenuMap;
