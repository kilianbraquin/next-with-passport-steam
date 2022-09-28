import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useCallback } from "react";

const HomePage: NextPage = () => {
  const login = useCallback(() => {
    return axios.get("/api/auth/login");
  }, []);

  return (
    <div>
      <Link href="/api/auth/login">
      <a >Se connecter</a>
      </Link>
    </div>
  );
};

export default HomePage;
