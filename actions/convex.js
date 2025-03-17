"use server";

import { fetchMutation, fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export const saveTemplate = async (userDetail, templateId, emailTemplate) => {
  try {
    const template = await getTemplate(userDetail?.email, templateId);

    if (template.status === 200 || template.data) {
      return await handleUpdate(templateId, emailTemplate);
    } else {
      return await handleCreate(userDetail?.email, templateId, emailTemplate);
    }
  } catch (error) {
    console.error("Error saving template:", error);
    return { status: 500, error: error.message };
  }
};

const handleUpdate = async (templateId, emailTemplate) => {
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
};

const handleCreate = async (email, templateId, emailTemplate) => {
  const data = {
    templateId: templateId,
    templateJson: emailTemplate,
    email: email,
    description: "Create from scratch id: " + templateId,
  };
  const res = await fetchMutation(api.emailTemplate.saveEmailTemplate, data);

  if (res) {
    return { status: 200, data: res };
  } else {
    return { status: 500, error: "Create returned no data" };
  }
};

export const getTemplateList = async (email) => {
  try {
    const templates = await fetchQuery(api.emailTemplate.getAllUserTemplates, {
      email: email,
    });

    if (templates) {
      return { status: 200, data: templates };
    }
    return { status: 400, error: "No templates found" };
  } catch (error) {
    console.log("Error fetching templates:", error);
    return { status: 500, error: error.message };
  }
};

export const getTemplate = async (email, templateId) => {
  try {
    const template = await fetchQuery(api.emailTemplate.getTemplate, {
      templateId: templateId,
      email: email,
    });

    if (template) {
      return { status: 200, data: template };
    }
    return { status: 400, error: "No template found" };
  } catch (error) {
    console.log("Error fetching template:", error);
    return { status: 500, error: error.message };
  }
};

export const updateUserDetail = async (id, email, newName) => {
  const res = await fetchMutation(api.users.updateUserDetail, {
    email: email,
    id: id,
    name: newName,
  });

  if (res.status === 200 && res.data) {
    return { status: 200, data: res.data };
  } else {
    return { status: 500, error: "Update returned no data" };
  }
};
