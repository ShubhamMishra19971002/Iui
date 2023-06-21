import React from "react";

const OtpScreen = () => {
  return (
    <div
      id="otp"
      className="flex flex-row justify-center text-center px-2 mt-5"
    >
      <input
        className="m-2 border h-10 w-10 text-center form-control rounded"
        type="text"
        id="first"
        maxLength={1}
      />
      <input
        className="m-2 border h-10 w-10 text-center form-control rounded"
        type="text"
        id="second"
        maxLength={1}
      />
      <input
        className="m-2 border h-10 w-10 text-center form-control rounded"
        type="text"
        id="third"
        maxLength={1}
      />
      <input
        className="m-2 border h-10 w-10 text-center form-control rounded"
        type="text"
        id="fourth"
        maxLength={1}
      />
    </div>
  );
};

export default OtpScreen;
