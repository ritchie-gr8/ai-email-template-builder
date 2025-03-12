"use client";

import React, { useContext, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserDetailContext } from "../context/UserDetailContext";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    if (typeof window !== undefined) {
      const userDetail = localStorage.getItem("userDetail");
      if (!userDetail) {
        // redirect to home page
        return;
      }

      const user = JSON.parse(userDetail);
      if (user.email && user._id) {
        setUserDetail(user);
      }
    }
  }, []);

  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          {children}
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
};

export default Provider;

export const useUserDetail = () => useContext(UserDetailContext);
