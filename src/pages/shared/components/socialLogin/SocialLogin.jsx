import { toast } from "react-toastify";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import { BsGoogle } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn, logOut } = useAuth();
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      toast.success("Registration successful!");
      const userInfo = {
        name: res.user.displayName,
        email: res.user.email,
      };
      axiosSecure.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <button
        className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        style={{ backgroundColor: "#3b5998" }}
        href="#!"
        role="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        {/* Facebook */}
        <span className="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
        Continue with Facebook
      </button>
      <button
        onClick={handleGoogleSignIn}
        className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        style={{ backgroundColor: "#55acee" }}
        href="#!"
        role="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        {/* X */}
        <span className="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
          <BsGoogle />
        </span>
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
