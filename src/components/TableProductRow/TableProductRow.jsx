import React, { useEffect, useState, useContext } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import ActionsMenu from "../../components/ActionsMenu/ActionsMenu";
import ProductContext from "../../contexts/productContext";

export default function TableProductRow({ flag, setFlag, ...props }) {
  const { setMainProductInfo } = useContext(ProductContext);

  const [isShowActionsMenu, setIsShowActionsMenu] = useState(false);

  useEffect(() => {
    setIsShowActionsMenu(false);
  }, [flag]);

  return (
    <>
      <tr>
        <td className="rounded-l-2xl space-x-1">
          <LocalMallIcon fontSize="small" className="text-primary mb-0.5" />
          <span>{props.title}</span>
        </td>
        <td>{props.price}$</td>
        <td>{props.count}</td>
        <td>
          <span
            className={`rounded-full px-2 py-1 lowercase ${
              props.isAvailable
                ? "bg-sky-100 text-sky-500"
                : "bg-red-100 text-red-500"
            } `}
          >
            {props.isAvailable ? "available" : "not available"}
          </span>
        </td>
        <td className="rounded-r-2xl relative">
          <span
            onClick={() => {
              setIsShowActionsMenu(true);
              setMainProductInfo(props);
            }}
            onMouseDown={() => setFlag((prevValue) => !prevValue)}
          >
            <MoreHorizIcon className="cursor-pointer" />
          </span>
          <ActionsMenu
            isShowActionsMenu={isShowActionsMenu}
            setIsShowActionsMenu={setIsShowActionsMenu}
            status="delete-product"
          />
        </td>
      </tr>
      <br />
    </>
  );
}
