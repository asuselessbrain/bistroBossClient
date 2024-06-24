import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxios from "../../../../hooks/useAxios";

const MenuCard2 = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxios()

  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log(user.email);

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => toast.success("Add to cart successfully!"));
    } else {
      Swal.fire({
        title: "You are not logedIn",
        text: "Please login to add to cart!",
        icon: "warning",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
          // <Navigate to="/login" />;
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105">
      <figure>
        <img src={image} alt="Shoes" className="rounded-xl" />
        <p className="absolute bg-[#111827] px-6 font-bold top-2 right-12 rounded-md text-white py-3">
          $ {price}
        </p>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline text-[20px] font-medium text-[#BB8506] uppercase border-0 border-b-4"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard2;
