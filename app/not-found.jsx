import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = ({
  error = "Something went wrong",
  reset = () => window.location.reload(),
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="mb-8">
        <div className="flex items-center">
          <Image
            src={"/loading-logo.svg"}
            width={150}
            height={48}
            alt="logo ipsum"
          />
        </div>
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Oops! Something went wrong
        </h2>
        <p className="mt-2 text-gray-600">{error}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href={"/"}>
          <Button>Go to home</Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant="outline">Go to Dashboard</Button>
        </Link>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        If the problem persists, please contact support at support@logoipsum.com
      </p>
    </div>
  );
};

export default ErrorPage;
