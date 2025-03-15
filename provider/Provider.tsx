"use client";

import React, { useContext, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserDetailContext } from "../context/UserDetailContext";
import { ScreenSizeContext } from "../context/ScreenSizeContext";
import { DragDropLayoutContext } from "../context/DragDropLayoutContext";
import { EmailTemplateContext } from "../context/EmailTemplateContext";
import { SelectedElementContext } from "../context/SelectedElementContext";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const [userDetail, setUserDetail] = useState();
  const [screenSize, setScreenSize] = useState("desktop");
  const [dragElementLayout, setDragElementLayout] = useState();
  const [emailTemplate, setEmailTemplate] = useState< any []>([]);
  const [selectedElement, setSelectedElement] = useState<{
    index: number;
    layout: any;
    style: any;
  } | null>(null);
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

      const emailTemplate = localStorage.getItem("emailTemplate");
      if (emailTemplate) {
        const emailTemplateStore = JSON.parse(emailTemplate);
        setEmailTemplate(emailTemplateStore ?? []);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("emailTemplate", JSON.stringify(emailTemplate));
    }
  }, [emailTemplate]);

  useEffect(() => {
    if (selectedElement) {
      const updatedEmailTemplate: any [] = [];
      console.log("effect selected element:", selectedElement);
      console.log("effect email template:", emailTemplate);
      emailTemplate.forEach((item, idx) => {
        if (item.id === selectedElement?.layout.id) {
          updatedEmailTemplate.push(selectedElement?.layout);
        } else {
          updatedEmailTemplate.push(item);
        }

        setEmailTemplate(updatedEmailTemplate);
      });
    }
  }, [selectedElement]);

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
                <SelectedElementContext.Provider
                  value={{ selectedElement, setSelectedElement }}
                >
                  {children}
                </SelectedElementContext.Provider>
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

export const useSelectedElement = () => useContext(SelectedElementContext);
