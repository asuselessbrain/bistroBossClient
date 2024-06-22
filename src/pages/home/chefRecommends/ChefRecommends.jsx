import useMenu from "../../../hooks/useMenu";
import MenuCard2 from "../../shared/components/MenuCard2/MenuCard2";
import TitelSubtitle from "../../shared/components/titleSubtitle/TitelSubtitle";

const ChefRecommends = () => {
  const [menu] = useMenu();

  const ChefRecommend = menu.filter(
    (item) => item.category === "chef-recommends"
  );
  return (
    <div>
      <TitelSubtitle title="chef Recommends" subTitle="Should Try" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {ChefRecommend.map((item) => (
          <MenuCard2 key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
