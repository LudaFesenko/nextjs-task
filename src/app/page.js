import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">Next js tutorial</h1>
      <Link href="/client" className="btn btn-accent">
        Get started
      </Link>
    </div>
  );
};

export default HomePage;
