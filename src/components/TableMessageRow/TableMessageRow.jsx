import React, { useState } from "react";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

import CustomModal from "../CustomModal/CustomModal";

export default function TableMessageRow(props) {
  const [isShowCustomModal, setIsShowCustomModal] = useState(false);

  return (
    <>
      {isShowCustomModal && (
        <CustomModal
          type="body"
          title={props.body}
          setIsShowCustomModal={setIsShowCustomModal}
        />
      )}
      <tr>
        <td className="rounded-l-2xl space-x-1">
          <QuestionAnswerIcon
            fontSize="small"
            className="text-primary mb-0.5"
          />
          <span>{props.name}</span>
        </td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td className="rounded-r-2xl relative">
          <button
            className="bg-sky-700 text-gray-200 rounded-full px-4 py-2 text-sm hover:bg-sky-800 transition"
            onClick={() => {
              setIsShowCustomModal(true);
            }}
          >
            show body
          </button>
        </td>
      </tr>
      <br />
    </>
  );
}
