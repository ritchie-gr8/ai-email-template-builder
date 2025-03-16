import { NextResponse } from "next/server";
import { generateEmailTemplateWithAI } from "../../../actions/gemini";

export async function POST(req) {
  const { prompt, userEmail, templateId } = await req.json();

  try {
    const result = await generateEmailTemplateWithAI.sendMessage(prompt);
    const aiRes = result.response.text();

    return NextResponse(aiRes);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
