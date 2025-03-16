"use client";

import EmailTemplateList from "@/components/custom/EmailTemplateList";
import { Button } from "@/components/ui/button";
import { useUserDetail } from "@/provider/Provider";
import { Plus } from "lucide-react";
import React from "react";

const DashboardPage = () => {
  const { userDetail, setUserDetail } = useUserDetail();

  return (
    <>
      <div className="p-4 sm:px-10 md:px-28 lg:px-44 xl:px-56 mt-16">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">Hello, {userDetail?.name}</h2>
          <div className="relative">
            <Button className="group">
              <Plus />
              <span className="hidden sm:inline">
                Create New Email Template
              </span>

              {/* Tooltip for small screens */}
              <span className="absolute left-1/2 transform -translate-x-[88%] translate-y-[260%] bottom-full mb-2 px-3 py-2 bg-primary text-primary-foreground text-sm rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:mb-4 transition-all duration-300 sm:hidden">
                Create New Email Template
              </span>
            </Button>
          </div>
        </div>

        {/* Email Template List Section */}
        <EmailTemplateList />
      </div>
    </>
  );
};

export default DashboardPage;
