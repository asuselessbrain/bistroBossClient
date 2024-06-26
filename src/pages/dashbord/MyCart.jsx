import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import TitelSubtitle from "../shared/components/titleSubtitle/TitelSubtitle";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const axiosSecure = useAxios();

  useEffect(() => {
    const total = cart.reduce((total, item) => total + item.price, 0);

    setTotalPrice(total);
  }, [cart]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <TitelSubtitle subTitle="My Cart" title="WANNA ADD MORE?" />

      <div className="max-w-[992px] mx-auto mt-10">
        <div className="flex justify-between">
          <h2 className="text-[32px] font-bold uppercase">
            Total orders: {cart.length}
          </h2>
          <h2 className="text-[32px] font-bold uppercase">
            total price: $ {totalPrice}
          </h2>
          <button className="bg-[#D1A054] text-white text-xl font-semibold px-4 py-3 rounded">
            PAY
          </button>
        </div>

        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white font-semibold">
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {/* row 1 */}

              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <p>{index + 1}</p>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="h-20 w-20">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost bg-[#B91C1C] hover:bg-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 6H5H21"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 11V17"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 11V17"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
