import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const saveEmailTemplate = mutation({
  args: {
    templateId: v.string(),
    templateJson: v.any(),
    email: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const result = await ctx.db.insert("emailTemplates", {
        templateId: args.templateId,
        templateJson: args.templateJson,
        email: args.email,
        description: args.description,
      });

      return result;
    } catch (error) {
      console.log("Error saving email template:", error);
      throw new ConvexError({
        message: "Failed to save email template",
        code: "SAVE_FAILED",
      });
    }
  },
});

export const getTemplateDesign = query({
  args: {
    email: v.string(),
    templateId: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const result = await ctx.db
        .query("emailTemplates")
        .filter((q) =>
          q.and(
            q.eq(q.field("templateId"), args.templateId),
            q.eq(q.field("email"), args.email)
          )
        )
        .collect();

      return result[0];
    } catch (error) {
      return null;
    }
  },
});

export const updateTemplateDesign = mutation({
  args: {
    templateId: v.string(),
    templateJson: v.any(),
  },
  handler: async (ctx, args) => {
    try {
      const result = await ctx.db
        .query("emailTemplates")
        .filter((q) => q.eq(q.field("templateId"), args.templateId))
        .collect();

      const templateId = result[0]._id;

      await ctx.db.patch(templateId, {
        templateJson: args.templateJson,
      });

      return { status: 200, id: templateId };
    } catch (error) {
      return null;
    }
  },
});

export const getAllUserTemplates = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("emailTemplates")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    return result;
  },
});

export const getTemplate = query({
  args: {
    email: v.string(),
    templateId: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("emailTemplates")
      .filter((q) =>
        q.and(
          q.eq(q.field("templateId"), args.templateId),
          q.eq(q.field("email"), args.email)
        )
      )
      .collect();

    return result[0];
  },
});
