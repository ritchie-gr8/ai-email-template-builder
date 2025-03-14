"use client";

import React, { useContext, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserDetailContext } from "../context/UserDetailContext";
import { ScreenSizeContext } from "../context/ScreenSizeContext";
import { DragDropLayoutContext } from "../context/DragDropLayoutContext";
import { EmailTemplateContext } from "../context/EmailTemplateContext";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const [userDetail, setUserDetail] = useState();
  const [screenSize, setScreenSize] = useState<"desktop" | "mobile">("desktop");
  const [dragElementLayout, setDragElementLayout] = useState();
  const [emailTemplate, setEmailTemplate] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      const userDetail = localStorage.getItem("userDetail");
      if (!userDetail) {
        router.push("/");
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
          <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
            <DragDropLayoutContext.Provider
              value={{ dragElementLayout, setDragElementLayout }}
            >
              <EmailTemplateContext.Provider
                value={{ emailTemplate, setEmailTemplate }}
              >
                {children}
              </EmailTemplateContext.Provider>
            </DragDropLayoutContext.Provider>
          </ScreenSizeContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
};

export default Provider;

export const useUserDetail = () => useContext(UserDetailContext);

export const useScreenSize = () => useContext(ScreenSizeContext);

export const useDragElementLayout = () => useContext(DragDropLayoutContext);

export const useEmailTemplate = () => useContext(EmailTemplateContext);