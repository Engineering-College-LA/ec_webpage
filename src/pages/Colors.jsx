import React from "react";

const Colors = () => {
  return (
    <div className="w-full h-screen flex-center">
      <div className="w-full px-10 grid grid-cols-3 gap-6">
        <div className="h-60 rounded-2xl bg-n-blue">n-blue</div>
        <div className="h-60 rounded-2xl bg-n-bluish">n-bluish</div>
        <div className="h-60 rounded-2xl bg-n-gray">n-gray</div>
        <div className="h-60 rounded-2xl bg-[#1C3C71]">d</div>
      </div>
    </div>
  );
};

export default Colors;
