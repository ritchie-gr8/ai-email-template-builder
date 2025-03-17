import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (user?.length === 0) {
      const result = await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        picture: args.picture,
        credits: 3,
      });

      return result;
    }

    return user[0];
  },
});

export const updateUserDetail = mutation({
  args: {
    id: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const result = await ctx.db
        .query("users")
        .filter((q) =>
          q.and(
            q.eq(q.field("_id"), args.id),
            q.eq(q.field("email"), args.email)
          )
        )
        .first();

      if (!result) {
        return { status: 404, message: "User not found" };
      }

      await ctx.db.patch(result._id, {
        name: args.name,
      });

      const updatedUser = await ctx.db.get(result._id);

      return { status: 200, data: updatedUser };
    } catch (error) {
      return { status: 500, message: "Error updating user" };
    }
  },
});
