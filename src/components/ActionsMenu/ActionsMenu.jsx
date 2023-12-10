import React, { useState, useEffect, useContext } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

import UserContext from "../../contexts/userContext";
import ProductContext from "../../contexts/productContext";
import CustomModal from "../../components/CustomModal/CustomModal";
import EditUserModal from "../EditUserModal/EditUserModal";
import EditProductModal from "../EditProductModal/EditProductModal";

import "./ActionsMenu.css";

export default function ActionsMenu({
  isShowActionsMenu,
  setIsShowActionsMenu,
  status,
}) {
  const mainUrl = "http://localhost:8000/api";
  const userContext = useContext(UserContext);
  const productContext = useContext(ProductContext);

  const [isShowCustomModal, setIsShowCustomModal] = useState(false);
  const [isShowEditUserModal, setIsShowEditUserModal] = useState(false);
  const [isShowEditProductModal, setIsShowEditProductModal] = useState(false);

  useEffect(() => {
    const hideActionsMenu = (e) => {
      if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
        setIsShowActionsMenu(false);
      }
    };
    document.addEventListener("click", hideActionsMenu);

    return () => {
      document.removeEventListener("click", hideActionsMenu);
    };
  }, []);

  const deleteUser = () => {
    fetch(`${mainUrl}/users/${userContext.mainUserInfo.ID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => userContext.getAllUsers());
  };

  const deleteProduct = () => {
    fetch(`${mainUrl}/products/${productContext.mainProductInfo.ID}`, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((data) => productContext.getAllProducts());
  };

  const showEditModalHandler = () => {
    if (status === "delete-user") {
      setIsShowEditUserModal(true);
    } else {
      setIsShowEditProductModal(true);
    }
  };

  return (
    <>
      {isShowCustomModal && (
        <>
          {status === "delete-user" ? (
            <CustomModal
              type="delete"
              setIsShowCustomModal={setIsShowCustomModal}
              confirmHandler={deleteUser}
            />
          ) : (
            <CustomModal
              type="delete"
              setIsShowCustomModal={setIsShowCustomModal}
              confirmHandler={deleteProduct}
            />
          )}
        </>
      )}

      {isShowEditUserModal && (
        <EditUserModal setIsShowEditUserModal={setIsShowEditUserModal} />
      )}
      {isShowEditProductModal && (
        <EditProductModal
          setIsShowEditProductModal={setIsShowEditProductModal}
        />
      )}

      <div
        className={`absolute bg-white left-5 px-2 py-3 space-y-2 rounded-lg text-xs w-28 shadow-md z-50 ${
          !isShowActionsMenu && "hidden"
        }`}
      >
        <div
          className="bg-sky-50 text-sky-800 px-2 flex gap-1 items-center rounded-md cursor-pointer"
          onClick={() => {
            showEditModalHandler();
          }}
        >
          <BorderColorIcon fontSize="small" className="actions-icon" /> Edit
        </div>
        <div
          className="bg-red-50 text-red-800 px-2 flex gap-1 items-center rounded-md cursor-pointer"
          onClick={() => setIsShowCustomModal(true)}
        >
          <DeleteIcon fontSize="small" className="actions-icon" /> Delete
        </div>
      </div>
    </>
  );
}
