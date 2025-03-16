"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useUserDetail } from "@/provider/Provider";
import { getTemplateList } from "@/actions/convex";

const EmailTemplateList = () => {
  const [templates, setTemplates] = useState<
    {
      description: string;
      email: string;
      templateId: string;
      templateJson: any;
    }[]
  >([]);
  const { userDetail } = useUserDetail();

  const getTemplates = async (email: string) => {
    const res = await getTemplateList(email);

    if (res.status === 200 || res.data) {
      console.log(res.data, "test data list");
      setTemplates(res.data as any);
    }
  };

  useEffect(() => {
    userDetail?.email && getTemplates(userDetail?.email);
    console.log(templates);
  }, [userDetail]);

  return (
    <div>
      <h2 className="font-bold text-xl text-primary mt-6">Workspace</h2>
      {templates.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-7">
          <Image src={"/250.svg"} alt="email" width={250} height={250} />

          <Link href={"/create"}>
            <Button className="mt-6">
              <Plus />
              Create New
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
          {templates?.map((template, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg shadow-md border flex flex-col justify-between gap-2"
            >
              <Image
                src={"/250.svg"}
                alt="template"
                width={250}
                height={250}
                className="w-full"
              />
              <h2 className="text-sm">{template?.description!}</h2>
              <Link href={"/editor/" + template.templateId}>
                <Button className="mt-2">View/Edit</Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmailTemplateList;
