import React, { useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import AuthContext from "../../contexts/authContext";
import CustomModal from "../../components/CustomModal/CustomModal";

export default function Login() {
  const mainUrl = "http://localhost:8000/api";

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordInputType, setPasswordInputType] = useState("password");
  const [isShowCustomModal, setIsShowCustomModal] = useState(false);

  const changePasswordInputType = () => {
    passwordInputType === "password"
      ? setPasswordInputType("text")
      : setPasswordInputType("password");
  };

  const onSubmit = (data) => {
    fetch(`${mainUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data !== "admin not found") {
          login(data.adminInfos, data.token);
          navigate("/dashboard");
        } else {
          setIsShowCustomModal(true)
        }
      });
  };

  return (
    <>
      {isShowCustomModal && (
        <CustomModal type="error" setIsShowCustomModal={setIsShowCustomModal} />
      )}
      <div className="bg-primary h-[100vh] flex justify-center items-center px-4">
        <div className="bg-white px-6 py-6 rounded-2xl w-96 shadow-xl">
          <h1 className="text-sky-700 font-semibold text-2xl text-center sm:text-3xl">
            Login
          </h1>

          <form
            className="mt-6 mb-2 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email-input"
                className="text-xs font-semibold text-primary"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email-input"
                className="block w-full py-1 border-b rounded text-gray-800 border-sky-700 focus:outline-none focus:border-sky-950"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  Email is required
                </p>
              )}
            </div>

            <div className="relative">
              <label
                htmlFor="password-input"
                className="text-xs font-semibold text-primary"
              >
                Password
              </label>
              <input
                {...register("password", { required: true, minLength: 8 })}
                type={passwordInputType}
                id="password-input"
                className="block w-full py-1 border-b rounded text-gray-800 border-sky-700 focus:outline-none focus:border-sky-950"
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  Password must be at least 8 character
                </p>
              )}
              <span
                className="absolute right-1 top-7 text-primary cursor-pointer"
                onClick={changePasswordInputType}
              >
                {passwordInputType === "password" ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </span>
            </div>

            <div className="flex justify-center">
              <button className="bg-blue-700 text-gray-200 w-40 py-2 mt-2 rounded-full font-semibold hover:bg-blue-800 transition">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
