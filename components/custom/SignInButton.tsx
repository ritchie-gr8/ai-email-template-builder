"use client";

import React from "react";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

type Props = {
  btnStyle?: string;
};

const SignInButton = ({ btnStyle }: Props) => {
  const createUser = useMutation(api.users.createUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer " + tokenResponse?.access_token } }
      );

      const user = userInfo.data;
      const result = await createUser({
        name: user.name,
        email: user.email,
        picture: user.picture,
      });

      const userDetail = {
        ...user,
        _id: (result && typeof result !== 'string' && result._id) ? result._id : result,
      };

      if (typeof window !== undefined) {
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const handleClick = () => {
    googleLogin();
  };

  return (
    <div>
      <Button className={btnStyle} onClick={handleClick}>
        Get Started
      </Button>
    </div>
  );
};

export default SignInButton;
