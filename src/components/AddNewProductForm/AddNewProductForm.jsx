import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../../components/Input/Input";
import CustomModal from "../CustomModal/CustomModal";
import ProductContext from "../../contexts/productContext";

export default function AddNewProductForm() {
  const mainUrl = "http://localhost:8000/api";
  const { getAllProducts } = useContext(ProductContext);

  const [isShowCustomModal, setIsShowCustomModal] = useState(false);
  const [isAvailable, setIsAvailable] = useState("1");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const emptyInputsValue = () => {
    setValue("title", "");
    setValue("price", "");
    setValue("count", "");
  };

  const onSubmit = (data) => {
    fetch(`${mainUrl}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, isAvailable }),
    })
      .then((res) => res.text())
      .then((data) => {
        setIsShowCustomModal(true);
        getAllProducts();
        emptyInputsValue();
      });
  };

  return (
    <>
      {isShowCustomModal && (
        <CustomModal
          type="success"
          title="Product"
          setIsShowCustomModal={setIsShowCustomModal}
        />
      )}
      <div className="border border-gray-300 rounded-xl p-6 mt-10 mb-16">
        <h1 className="font-semibold">Add new product</h1>

        <form
          className="mt-6 grid lg:grid-cols-2 gap-y-6 gap-x-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="title-input"
              className="text-xs font-semibold text-primary"
            >
              Title
            </label>
            <Input
              type="text"
              id="title-input"
              register={{
                ...register("title", { required: true, minLength: 2 }),
              }}
              validations={[
                errors.title?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600 mt-1">
                    Title is required
                  </p>
                ),
                errors.title?.type === "minLength" && (
                  <p role="alert" className="text-xs text-red-600 mt-1">
                    Title must be at least 2 character
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
              Price
            </label>
            <Input
              type="text"
              id="price-input"
              register={{
                ...register("price", { required: true }),
              }}
              validations={[
                errors.price?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600 mt-1">
                    Price is required
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
              Count
            </label>
            <Input
              type="count"
              id="count-input"
              register={{
                ...register("count", { required: true }),
              }}
              validations={[
                errors.count?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600 mt-1">
                    Count is required
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
              isAvailable
            </label>
            <div
              className="flex gap-3"
              onChange={(event) => setIsAvailable(event.target.value)}
            >
              <div className="flex items-center gap-0.5">
                <label htmlFor="available">Available</label>
                <input
                  type="radio"
                  name="isAvailable"
                  id="available"
                  value={1}
                  defaultChecked
                />
              </div>
              <div className="flex items-center gap-0.5">
                <label htmlFor="not-available">Not available</label>
                <input
                  type="radio"
                  name="isAvailable"
                  id="not-available"
                  value={0}
                />
              </div>
            </div>
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
