/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-20 w-20 mx-auto hidden lg:inline-grid ">
          <Image
            src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            alt="logo"
          />
        </div>

        <div className="text-left lg:text-center col-span-4 space-y-2">
          <div className="relative h-40 w-40 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
        </div>
          <h1 className="text-xl ">Welcome to Metaverse</h1>
          <h2 className="text-3xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
