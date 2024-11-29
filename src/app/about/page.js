import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="text-7xl">About Page</div>
      <Link href="/" className="text-2xl">
        Home page
      </Link>
    </>
  );
};

export default AboutPage;
