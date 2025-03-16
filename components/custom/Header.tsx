"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { LayoutDashboard, LogIn } from "lucide-react";
import { useUserDetail } from "@/provider/Provider";
import SignInButton from "./SignInButton";
import Link from "next/link";

const Header = () => {
  const { userDetail, setUserDetail } = useUserDetail();

  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-10 md:px-28 lg:px-44 xl:px-56 shadow-md">
      <Link href={"/dashboard"} className="cursor-pointer">
        <Image src={"/logo.svg"} alt="logo" width={180} height={140} />
      </Link>

      {userDetail?.email ? (
        <div className="flex w-full justify-end items-center sm:justify-center sm:w-fit space-x-4">
          <Link href={"/dashboard"}>
            <Button>
              <LayoutDashboard className="sm:hidden" />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>
          </Link>
          <Image
            src={userDetail.picture}
            alt="profile"
            width={35}
            height={35}
            className="rounded-full"
          />
        </div>
      ) : (
        <div className="flex items-center">
          <SignInButton btnStyle="py-2 sm:px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-foreground hover:text-primary focus:outline-none">
            <span className="hidden sm:inline">Get Started</span>
            <LogIn size={20} className="ml-2 sm:hidden" />
          </SignInButton>
        </div>
      )}
    </header>
  );
};

export default Header;
