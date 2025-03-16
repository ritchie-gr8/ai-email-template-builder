"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { EMAIL_PROMPT } from "@/constants/prompt";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-pro-exp-02-05",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const generateEmailTemplateWithAI = async (
  userInput,
  userEmail,
  templateId
) => {
  const finalPrompt = EMAIL_PROMPT + ` ${userInput}`;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(finalPrompt);
    const responseText = result.response.text();

    if (responseText) {
      try {
        const parsedResponse = JSON.parse(responseText);
        return { status: 200, data: parsedResponse };
      } catch (error) {
        console.error("Invalid JSON from Gemini", error);
        return { status: 500, error: "Invalid JSON from AI" };
      }
    }

    return { status: 400, error: "No content generated" };
  } catch (error) {
    console.error("🔴 ERROR", error);
    return { status: 500, error: "Internal server error" };
  }
};
