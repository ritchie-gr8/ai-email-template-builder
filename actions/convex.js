"use server";

import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export const updateTemplate = async (templateId, emailTemplate) => {
  try {
    const updateEmailTemplate = await fetchMutation(
      api.emailTemplate.updateTemplateDesign,
      {
        templateId: templateId,
        templateJson: emailTemplate,
      }
    );

    if (updateEmailTemplate) {
      return { status: 200, data: updateEmailTemplate };
    } else {
      return { status: 500, error: "Update returned no data" };
    }
  } catch (error) {
    console.error("Error updating template:", error);
    return { status: 500, error: error.message };
  }
};
