import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "react-toastify";
import img from "../../assets/others/authentication2.png";
import "../signUp/style.css";
import { AuthContext } from "../../authentication/AuthProiver";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleCapcha = (e) => {
    e.preventDefault();

    const user_captcha_value = document.getElementById("chapcha").value;

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
      toast.success("Captcha validation Successfull!");
    } else {
      setDisabled(true);
      toast.error("Captcha doesn't match!");
    }

    console.log(user_captcha_value);
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password).then(() => {
      toast.success("Login successful!");
      navigate(from, { replace: true });
    });
  };

  return (
    <section className="loginBg">
      <div className="container h-full px-6 py-24 mx-auto">
        <div className="flex h-full p-10 rounded-md flex-wrap items-center justify-center lg:justify-between shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={img} className="w-full" alt="Phone" />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email input */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="email"
                  className="input w-full input-bordered mt-3"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                />

                {errors.email && <span>This field is required</span>}
              </div>

              {/* Password input */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="password"
                  className="input w-full input-bordered mt-3"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />

                {errors.password && <span>This field is required</span>}
              </div>

              {/* capcha */}

              <div>
                <LoadCanvasTemplateNoReload />
                <input
                  onBlur={handleCapcha}
                  type="text"
                  className="input w-full input-bordered mt-3"
                  name="chapcha"
                  id="chapcha"
                  placeholder="Type the capcha"
                  required
                />
              </div>

              {/* Remember me checkbox */}
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                  <input
                    className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                    type="checkbox"
                    id="exampleCheck3"
                    defaultChecked
                  />
                  <label
                    className="inline-block ps-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <a
                  href="#!"
                  className="text-primary focus:outline-none dark:text-primary-400"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}

              <input
                disabled={disabled}
                type="submit"
                className="btn btn-primary w-full bg-[#D1A054B3] text-white hover:bg-[#D1A054B3] hover:scale-105 border-0"
                value="Sign in"
              />
            </form>

            {/* Divider */}

            <p className="text-center mt-6 text-[#D1A054] text-xl">
              New here?{" "}
              <Link to="/sign-up" className="font-bold">
                Create a New Account
              </Link>
            </p>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

            {/* Social login buttons */}
            <a
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
            </a>
            <a
              className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              {/* X */}
              <span className="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
              Continue with X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
