"use client";
import React from "react";

const error = (error) => {
  return <div className="text-center">{error.error.message}</div>;
};

export default error;
