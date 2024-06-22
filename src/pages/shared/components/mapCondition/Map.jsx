import useMenu from "../../../../hooks/useMenu";
import MenuCard from "../menuCard/MenuCard";

const Map = ({itemCategory }) => {

  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === `${itemCategory}`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
      {dessert.map((item) => (
        <MenuCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Map;
