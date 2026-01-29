import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    name: v.string(),
    email: v.string(),
    role: v.optional(v.string()), // user, admin
    isVerified: v.boolean(),
    trustScore: v.number(), // 0 to 100
    createdAt: v.number(),
  }).index("by_clerk_id", ["clerkId"]),

  things: defineTable({
    ownerId: v.id("users"),
    title: v.string(),
    description: v.string(),
    images: v.array(v.string()),
    category: v.string(), // "tools", "electronics", etc.
    replacementValue: v.number(),
    dailyRate: v.number(),
    location: v.string(),
    availability: v.boolean(),
    status: v.string(), // "active", "rented", "archived"
    createdAt: v.number(),
  }).index("by_owner", ["ownerId"]),

  spaces: defineTable({
    ownerId: v.id("users"),
    title: v.string(),
    description: v.string(),
    images: v.array(v.string()),
    location: v.string(),
    amenities: v.array(v.string()),
    pricePerNight: v.number(),
    availability: v.boolean(),
    status: v.string(),
    createdAt: v.number(),
  }).index("by_owner", ["ownerId"]),

  funds: defineTable({
    lenderId: v.optional(v.id("users")), // Can be null if it's a request
    borrowerId: v.id("users"),
    amount: v.number(),
    purpose: v.string(),
    interestRate: v.number(), // Percentage
    term: v.number(), // Months
    status: v.string(), // "requested", "funded", "repaid"
    createdAt: v.number(),
  }).index("by_borrower", ["borrowerId"]),

  transactions: defineTable({
    userId: v.id("users"), // Primary actor
    relatedUserId: v.id("users"), // Counterparty
    type: v.string(), // "thing", "space", "fund"
    itemId: v.string(), // ID of the thing/space/fund stringified
    status: v.string(), // "pending", "active", "completed", "cancelled"
    startDate: v.number(),
    endDate: v.optional(v.number()),
    amount: v.number(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_related_user", ["relatedUserId"]),

  reviews: defineTable({
    reviewerId: v.id("users"),
    targetUserId: v.id("users"),
    transactionId: v.id("transactions"),
    rating: v.number(), // 1-5
    comment: v.string(),
    createdAt: v.number(),
  }).index("by_target_user", ["targetUserId"]),
});
