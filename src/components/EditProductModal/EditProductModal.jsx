import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import ProductContext from "../../contexts/productContext";

export default function EditProductModal({ setIsShowEditProductModal }) {
  const mainUrl = "http://localhost:8000/api";
  const productContext = useContext(ProductContext);

  const [isAvailable, setIsAvailable] = useState(productContext.mainProductInfo.isAvailable);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setInputsValuesInEditModal();

    const hideEditModal = (e) => {
      if (e.target.id === "edit-modal-parent") {
        setIsShowEditProductModal(false);
      }
    };
    document.addEventListener("click", hideEditModal);

    return () => {
      document.removeEventListener("click", hideEditModal);
    };
  }, []);

  const onSubmit = (data) => {
    fetch(`${mainUrl}/products/${productContext.mainProductInfo.ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, isAvailable }),
    })
      .then((res) => res.text())
      .then((result) => {
        setIsShowEditProductModal(false)
        productContext.getAllProducts()
      });
  };

  function setInputsValuesInEditModal() {
    setValue("title", productContext.mainProductInfo.title);
    setValue("price", productContext.mainProductInfo.price);
    setValue("count", productContext.mainProductInfo.count);
  }

  return (
    <div
      id="edit-modal-parent"
      className="fixed top-0 left-0 bg-black bg-opacity-30 h-[100vh] w-full z-50 flex items-center justify-center"
    >
      <div className="bg-white w-1/2 rounded-lg">
        <div className="rounded-xl p-6 ">
          <h1 className="font-semibold text-xl">Edit product</h1>

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
                onChange={(event) => {
                  setIsAvailable(event.target.value)
                }}
              >
                <div className="flex items-center gap-0.5">
                  <label htmlFor="modal-available">Available</label>
                  {isAvailable ? (
                    <input
                      type="radio"
                      name="isAvailable"
                      id="modal-available"
                      value={1}
                      defaultChecked
                    />
                  ) : (
                    <input
                      type="radio"
                      name="isAvailable"
                      id="modal-available"
                      value={1}
                    />
                  )}
                </div>
                <div className="flex items-center gap-0.5">
                  <label htmlFor="modal-not-available">Not available</label>
                  {
                    !isAvailable ? (
                      <input
                      type="radio"
                      name="isAvailable"
                      id="modal-not-available"
                      value={0}
                      defaultChecked
                    />
                    ) : (
                      <input
                      type="radio"
                      name="isAvailable"
                      id="modal-not-available"
                      value={0}
                    />
                    )
                  }

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
      </div>
    </div>
  );
}
