const MenuCard2 = ({ item }) => {
  const { name, recipe, image } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline text-[20px] font-medium text-[#BB8506] uppercase border-0 border-b-4">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard2;
