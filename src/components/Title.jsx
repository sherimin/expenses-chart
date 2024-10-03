import React from "react";

const Title = () => {
  return (
    <div className="bg-primary text-white flex p-6 rounded-2xl justify-between items-center w-full max-w-lg mb-5">
      <div className="flex flex-col">
        <div className="text-base mb-2">My balance</div>

        <h1 className="text-3xl font-bold">$921.48</h1>
      </div>

      <div>
        <img src="/logo.svg" alt="logo" className="w-16 h-16" />
      </div>
    </div>
  );
};

export default Title;
