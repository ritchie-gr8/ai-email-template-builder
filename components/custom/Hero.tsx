import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import SignInButton from "./SignInButton";

const Hero = () => {
  return (
    <main
      className="px-10 md:px-28 lg:px-44 xl:px-56
    flex flex-col items-center mt-24"
    >
      <h2 className="text-5xl font-extrabold text-center">
        Email Template Builder <span className="text-primary">With AI</span>
      </h2>
      <p className="text-center mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum beatae
        corrupti animi omnis temporibus sint dolore tenetur atque asperiores, ex
        laborum. Est corrupti repellendus iure.
      </p>

      <div className="gap-5 mt-6 flex">
        <Button variant="outline">Try now</Button>
        <SignInButton btnStyle="hover:bg-primary-foreground hover:text-primary" />
      </div>

      <Image
        src={"/landing.png"}
        width={1000}
        height={800}
        className="mt-12"
        alt="landing page placeholder image"
      />
    </main>
  );
};

export default Hero;
