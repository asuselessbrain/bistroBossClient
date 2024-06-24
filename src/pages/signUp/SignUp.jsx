import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "../../assets/others/authentication2.png"
import './style.css'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section className="loginBg">
      <div className="container h-full px-6 py-24 mx-auto">
        <div className="flex h-full p-10 rounded-md flex-wrap flex-row-reverse items-center justify-center lg:justify-between shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src={img}
              className="w-full"
              alt="Phone"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name input */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="text"
                  className="input w-full input-bordered mt-3"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />

                {errors.name && <span>This field is required</span>}
              </div>
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
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  })}
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must include at least one uppercase letter, one
                    lowercase letter, one number, one special character, and be
                    at least 8 characters long
                  </p>
                )}
              </div>

              {/* Confirm Password input */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="password"
                  className="input w-full input-bordered mt-3"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", { required: true })}
                />

                {errors.confirmPassword && <span>This field is required</span>}
              </div>

              {/* PhotoUrl input */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="text"
                  className="input w-full input-bordered mt-3"
                  placeholder="Photo Url"
                  {...register("photoUrl", { required: true })}
                />

                {errors.photoUrl && <span>This field is required</span>}
              </div>

              {/* Submit button */}

              <input
                type="submit"
                className="btn btn-primary w-full bg-[#D1A054B3] text-white hover:bg-[#D1A054B3] hover:scale-105 border-0"
                value="Sign in"
              />
            </form>

            {/* Divider */}

            <p className="text-center mt-6 text-[#D1A054] text-xl">
              Already registered?<Link to='/login' className="font-bold"> Go to log in</Link>
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

export default SignUp;
