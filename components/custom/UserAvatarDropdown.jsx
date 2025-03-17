"use client";

import React, { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUserDetail } from "@/provider/Provider";
import Link from "next/link";

const UserAvatarDropdown = ({ userDetail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const { setUserDetail } = useUserDetail();

  const { name, email, picture } = userDetail;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    if (typeof window !== undefined) {
      localStorage.setItem("userDetail", "");
      setUserDetail({});
      router.push("/");
    }
  };

  const handleManageAccount = () => {
    router.push('/settings')
    toggleDropdown()
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Avatar
        onClick={toggleDropdown}
        className="size-9 cursor-pointer hover:opacity-90 transition-opacity"
      >
        <AvatarImage src={picture} />
        <AvatarFallback className="bg-primary text-primary-foreground">
          {name[0]}
        </AvatarFallback>
      </Avatar>

      {isOpen && (
        <Card className="absolute right-0 mt-2 w-64 p-4 bg-white rounded-lg shadow-lg z-50">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={picture} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{name}</span>
              <span className="text-xs text-gray-400">{email}</span>
            </div>
          </div>

          <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start hover:bg-primary hover:text-primary-foreground"
                onClick={handleManageAccount}
              >
                <Settings />
                Manage account
              </Button>

            <Button
              variant="ghost"
              className="w-full flex items-center gap-3 justify-start hover:bg-primary hover:text-primary-foreground"
              onClick={handleSignOut}
            >
              <LogOut />
              Sign out
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default UserAvatarDropdown;
