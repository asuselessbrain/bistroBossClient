const MenuCard = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  return (
    <div className="flex gap-[32px] mt-10">
      <div className="w-[118px]">
        <img className="rounded-b-full rounded-r-full" src={image} alt="" />
      </div>
      <div>
        <div  className="text-[20px] flex justify-between">
            <h5>{name} ------------------</h5>
            <p className="text-[#BB8506]">${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuCard;
