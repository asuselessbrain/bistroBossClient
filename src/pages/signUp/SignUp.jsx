import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication2.png";
import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../authentication/AuthProiver";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import SocialLogin from "../shared/components/socialLogin/SocialLogin";

const SignUp = () => {
  const { creatUser, logOut, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const axiosSecure = useAxios();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    creatUser(data.email, data.password)
      .then((userCredential) => {
        updateUserProfile(data.name, data.photoUrl);

        const userInfo = {
          name: data.name,
          email: data.email,
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });

        logOut();

        toast.success("Registration successful!");

        navigate("/login");
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  
  return (
    <section className="loginBg">
      <div className="container h-full px-6 py-24 mx-auto">
        <div className="flex h-full p-10 rounded-md flex-wrap flex-row-reverse items-center justify-center lg:justify-between shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={img} className="w-full" alt="Phone" />
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
              Already registered?
              <Link to="/login" className="font-bold">
                Go to log in
              </Link>
            </p>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

            {/* Social login buttons */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
