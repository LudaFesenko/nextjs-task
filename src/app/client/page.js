"use client";

import React, { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-8 ">
      <div className="p-4">{count}</div>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default ClientPage;
