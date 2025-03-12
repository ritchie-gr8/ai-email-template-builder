import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-10 shadow-md">
      <Image src={"/logo.svg"} alt="logo" width={180} height={140} />

      <div className="flex items-center">
        <Button className="py-2 sm:px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-foreground hover:text-primary focus:outline-none">
          <span className="hidden sm:inline">Get Started</span>
          <LogIn size={20} className="ml-2 sm:hidden" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
