const MenuCard2 = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
        <p className="absolute bg-[#111827] px-6 font-bold top-2 right-12 rounded-md text-white py-3">$ {price}</p>
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
