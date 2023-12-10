import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import UserContext from "../../contexts/userContext";

export default function EditUserModal({ setIsShowEditUserModal }) {
  const mainUrl = "http://localhost:8000/api";
  const userContext = useContext(UserContext);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setInputsValuesInEditModal()

    const hideEditModal = (e) => {
      if (e.target.id === "edit-modal-parent") {
        setIsShowEditUserModal(false);
      }
    };
    document.addEventListener("click", hideEditModal);

    return () => {
      document.removeEventListener("click", hideEditModal);
    };
  }, []);

  const onSubmit = (data) => {
    fetch(`${mainUrl}/users/${userContext.mainUserInfo.ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...data}),
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowEditUserModal(false)
        userContext.getAllUsers()
      });
  };

  function setInputsValuesInEditModal() {
    setValue("name", userContext?.mainUserInfo?.name);
    setValue("username", userContext?.mainUserInfo?.username);
    setValue("email", userContext?.mainUserInfo?.email);
    setValue("password", userContext?.mainUserInfo?.password);
    setValue("phone", userContext?.mainUserInfo?.phone);
  }

  return (
    <div
      id="edit-modal-parent"
      className="fixed top-0 left-0 bg-black bg-opacity-30 h-[100vh] w-full z-50 flex items-center justify-center"
    >
      <div className="bg-white w-1/2 rounded-lg">
        <div className="rounded-xl p-6 ">
          <h1 className="font-semibold text-xl">Edit user</h1>

          <form className="mt-6 grid gap-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name-input"
                className="text-xs font-semibold text-primary"
              >
                Name
              </label>
              <Input
                type="text"
                id="name-input"
                register={{
                  ...register("name", { required: true, minLength: 8 }),
                }}
                validations={[
                  errors.name?.type === "required" && (
                    <p role="alert" className="text-xs text-red-600 mt-1">
                      Name is required
                    </p>
                  ),
                  errors.name?.type === "minLength" && (
                    <p role="alert" className="text-xs text-red-600 mt-1">
                      Name must be at least 8 character
                    </p>
                  ),
                ]}
              />
            </div>
            <div>
              <label
                htmlFor="username-input"
                className="text-xs font-semibold text-primary"
              >
                Username
              </label>
              <Input
                type="text"
                id="username-input"
                register={{
                  ...register("username", { required: true, minLength: 8 }),
                }}
                validations={[
                  errors.username?.type === "required" && (
                    <p role="alert" className="text-xs text-red-600 mt-1">
                      Username is required
                    </p>
                  ),
                  errors.username?.type === "minLength" && (
                    <p role="alert" className="text-xs text-red-600 mt-1">
                      Username must be at least 8 character
                    </p>
                  ),
                ]}
              />
            </div>
            <div>
              <label
                htmlFor="email-input"
                className="text-xs font-semibold text-primary"
              >
                Email
              </label>
              <Input
                type="email"
                id="email-input"
                register={{
                  ...register("email", { required: true }),
                }}
                validations={[
                  errors.email?.type === "required" && (
                    <p role="alert" className="text-xs text-red-600 mt-1">
                      Email is required
                    </p>
                  ),
                ]}
              />
            </div>
            <div>
              <label
                htmlFor="password-input"
                className="text-xs font-semibold text-primary"
              >
                Password
              </label>
              <Input
                type="text"
                id="password-input"
                register={{
                  ...register("password", { required: true, minLength: 8 }),
                }}
                validations={[
                  errors.password?.type === "required" && (
                    <p role="alert" className="text-xs text-red-600 mt-1">
                      Password is required
                    </p>
                  ),
                  errors.password?.type === "minLength" && (
                    <p role="alert" className="text-xs text-red-600 mt-1">
                      Password must be at least 8 character
                    </p>
                  ),
                ]}
              />
            </div>
            <div>
              <label
                htmlFor="phone-number-input"
                className="text-xs font-semibold text-primary"
              >
                Phone number
              </label>
              <Input
                type="text"
                id="phone-number-input"
                register={{
                  ...register("phone", { required: true, minLength: 8 }),
                }}
                validations={[
                  errors.phone?.type === "required" && (
                    <p role="alert" className="text-xs text-red-600 mt-1">
                      Phone number is required
                    </p>
                  ),
                  errors.phone?.type === "minLength" && (
                    <p role="alert" className="text-xs text-red-600 mt-1">
                      Phone number must be at least 8 character
                    </p>
                  ),
                ]}
              />
            </div>
            <div className="mt-auto">
              <button className="bg-sky-700 text-gray-200 rounded-full px-6 py-2 text-sm hover:bg-sky-800 transition">
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
