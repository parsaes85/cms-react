import React, { useEffect } from "react";

export default function CustomModal({
  type,
  setIsShowCustomModal,
  confirmHandler,
  title,
}) {
  useEffect(() => {
    const hideCustomModal = (e) => {
      if (e.target.id === "custom-modal-parent") {
        setIsShowCustomModal(false);
      }
    };
    document.addEventListener("click", hideCustomModal);

    return () => {
      document.removeEventListener("click", hideCustomModal);
    };
  }, []);

  return (
    <div
      id="custom-modal-parent"
      className="fixed top-0 left-0 bg-black bg-opacity-30 h-[100vh] w-full z-[60] flex items-center justify-center"
    >
      <div className="bg-white w-72 py-6 text-center rounded-lg">
        {type === "delete" ? (
          <>
            <h1 className="font-semibold text-xl">Are you sure?</h1>
            <div className="flex gap-4 justify-center mt-4">
              <button
                className="bg-sky-700 text-gray-200 py-1 px-6 rounded-full"
                onClick={() => setIsShowCustomModal(false)}
              >
                No
              </button>
              <button
                className="bg-red-700 text-gray-200 py-1 px-6 rounded-full"
                onClick={() => {
                  setIsShowCustomModal(false);
                  confirmHandler();
                }}
              >
                Yes
              </button>
            </div>
          </>
        ) : type === "success" ? (
          <>
            <h1 className="font-semibold text-xl">
              {title} added successfully!
            </h1>
            <div className="flex gap-4 justify-center mt-4">
              <button
                className="bg-sky-700 text-gray-200 py-1 px-6 rounded-full"
                onClick={() => setIsShowCustomModal(false)}
              >
                Ok
              </button>
            </div>
          </>
        ) : type === "error" ? (
          <>
            <h1 className="font-semibold text-xl">Admin not found!</h1>
            <div className="flex gap-4 justify-center mt-4">
              <button
                className="bg-red-700 text-gray-200 py-1 px-6 rounded-full"
                onClick={() => setIsShowCustomModal(false)}
              >
                Try again
              </button>
            </div>
          </>
        ) : (
          <>
          <h1 className="font-semibold text-xl">
            {title}
          </h1>
          <div className="flex gap-4 justify-center mt-4">
            <button
              className="bg-sky-700 text-gray-200 py-1 px-6 rounded-full"
              onClick={() => setIsShowCustomModal(false)}
            >
              Ok
            </button>
          </div>
        </>
        )}
      </div>
    </div>
  );
}
