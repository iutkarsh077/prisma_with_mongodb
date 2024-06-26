"use client";

import React from "react";

const MyHome = ({
  id,
  name,
  email,
}: {
  id: string;
  name: string;
  email: string;
}) => {
  return (
    <>
      <div className="border-2 border-white p-2 m-2 flex flex-col items-center">
        <p>{id}</p>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </>
  );
};

export default MyHome;
