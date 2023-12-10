import React, { useEffect, useState, useContext } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import ActionsMenu from "../../components/ActionsMenu/ActionsMenu";
import UserContext from "../../contexts/userContext";

export default function TableUserRow({ flag, setFlag, ...props }) {
  const {setMainUserInfo} = useContext(UserContext)

  const [isShowActionsMenu, setIsShowActionsMenu] = useState(false);

  useEffect(() => {
    setIsShowActionsMenu(false);
  }, [flag]);

  return (
    <>
      <tr>
        <td className="rounded-l-2xl space-x-1">
          <AccountCircleIcon fontSize="small" className="text-primary mb-0.5" />
          <span>{props.name}</span>
        </td>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>
          <span
            className={`rounded-full px-2 py-1 lowercase ${
              props.role === "ADMIN"
                ? "bg-red-100 text-red-500"
                : "bg-sky-100 text-sky-500"
            }`}
          >
            {props.role}
          </span>
        </td>
        <td className="rounded-r-2xl relative">
          <span
            onClick={() => {
              setIsShowActionsMenu(true);
              setMainUserInfo(props)
            }}
            onMouseDown={() => setFlag((prevValue) => !prevValue)}
          >
            <MoreHorizIcon className="cursor-pointer" />
          </span>
          <ActionsMenu
            isShowActionsMenu={isShowActionsMenu}
            setIsShowActionsMenu={setIsShowActionsMenu}
            status="delete-user"
          />
        </td>
      </tr>
      <br />
    </>
  );
}
