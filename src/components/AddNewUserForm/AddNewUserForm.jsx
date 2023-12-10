import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../../components/Input/Input";
import CustomModal from "../CustomModal/CustomModal";
import UserContext from "../../contexts/userContext";

export default function AddNewUserForm() {
  const mainUrl = "http://localhost:8000/api";
  const { getAllUsers } = useContext(UserContext);

  const [isShowCustomModal, setIsShowCustomModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const emptyInputsValue = () => {
    setValue("name", "")
    setValue("username", "")
    setValue("email", "")
    setValue("password", "")
    setValue("phone", "")
  }

  const onSubmit = (data) => {
    fetch(`${mainUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, token: crypto.randomUUID() }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsShowCustomModal(true);
        getAllUsers();
        emptyInputsValue()
      });
  };

  return (
    <>
      {isShowCustomModal && (
        <CustomModal
          type="success"
          title="User"
          setIsShowCustomModal={setIsShowCustomModal}
        />
      )}
      <div className="border border-gray-300 rounded-xl p-6 mt-10 mb-16">
        <h1 className="font-semibold">Add new user</h1>

        <form
          className="mt-6 grid lg:grid-cols-2 gap-y-6 gap-x-16"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
