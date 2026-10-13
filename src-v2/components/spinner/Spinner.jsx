import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative inline-flex">
        <div className="w-14 h-14 bg-n-bluish rounded-full"></div>
        <div className="w-14 h-14 bg-n-bluish rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-14 h-14 bg-n-bluish rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  );
}

export default Spinner;
