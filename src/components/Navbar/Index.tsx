"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiFillCloseCircle,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { getUserInfo, removeUserInfo } from "@/shared/auth.service";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
const Index = () => {
  const user: any = useAppSelector((state) => state.user.user);
  const { isUserExist } = user;
  console.log("navbar", user);
  const router = useRouter();
  const users: any = getUserInfo();

  const handleLogout = () => {
    removeUserInfo("accessToken");
    router.push("/login");
  };
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="relative flex items-center justify-between h-20 bg-primary  text-black px-5  md:px-10 ">
      <Link href="/" className="text-xl font-semibold">
        <h1 className="uppercase text-white ">Booking.com</h1>
      </Link>

      <div className="flex items-center  gap-3">
        <nav
          className={`absolute top-20 duration-500 transition-all h-screen bg-primary w-[200px] md:w-auto md:bg-transparent left-0 md:static flex flex-col   md:flex-row justify-start px-5 md:px-0 font-medium  md:items-center gap-5 ${
            show ? "left-0" : "left-[-999px]"
          }`}
        >
          <Link
            href="/home"
            className="flex items-center gap-2 text-secondary hover:scale-75 duration-300"
          >
            <AiFillHome></AiFillHome>
            <span>Home</span>
          </Link>
          <Link
            href="/service"
            className="flex items-center gap-2 text-secondary hover:scale-75 duration-300"
          >
            <AiFillHome></AiFillHome>
            <span>service</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-secondary hover:scale-75 duration-300"
          >
            <AiFillHome></AiFillHome>
            <span>Dashboard</span>
          </Link>
          <Link
            href="/home"
            className="flex items-center gap-2 text-secondary hover:scale-75 duration-300"
          >
            <AiFillHome></AiFillHome>
            <span>Blog</span>
          </Link>
          <Link
            href="/home"
            className="flex items-center gap-2 text-secondary hover:scale-75 duration-300"
          >
            <AiFillHome></AiFillHome>
            <span>FAQ</span>
          </Link>
          {isUserExist?.email && users.email ? (
            <button onClick={handleLogout} className="btn btn-primary btn-sm">
              LogOut
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 text-secondary hover:scale-75 duration-300"
            >
              <AiFillHome></AiFillHome>
              <span>Login</span>
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-3  text-secondary hover:text-red-500">
          <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart>
          <div
            className=" block md:hidden"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <AiFillCloseCircle size={20}></AiFillCloseCircle>
            ) : (
              <FaBars size={20}></FaBars>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
