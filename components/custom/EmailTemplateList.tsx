import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const EmailTemplateList = () => {
  const [emailList, setEmailList] = useState([]);

  return (
    <div>
      <h2 className="font-bold text-xl text-primary mt-6">Workspace</h2>
      {emailList.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-7">
          <Image src={"/250.svg"} alt="email" width={250} height={250} />

          <Link href={"/create"}>
            <Button className="mt-6">
              <Plus />
              Create New
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmailTemplateList;
