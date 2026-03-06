// import { action } from "./_generated/server";
// import { v } from "convex/values";
// import { DodoPayments } from "dodopayments";

// export const createCheckout = action({
//   args: {
//     type: v.union(v.literal("pro_upgrade"), v.literal("event_ticket")),
//     eventId: v.optional(v.id("events")),
//     ticketPrice: v.optional(v.number()),
//     userID: v.string(),
//     name: v.string(),
//     email: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const dodo = new DodoPayments({
//       bearerToken: process.env.DODO_PAYMENTS_API_KEY,
//       environment: 'test_mode', 
//     });

//     // 1. Determine which Product ID to use from your Dodo Dashboard
//     const productId = args.type === "event_ticket" 
//       ? "pdt_0NZobtAJcymVml3TOo5Qy" // Replace with your Ticket Product ID
//       : "pdt_0NZoUQe7KYJZPmPCn9IUd";   // Replace with your Pro Product ID

//     const paymentConfig = {
//       customer: {
//         email: args.email,
//         name: args.name,
//       },
//       product_cart: [
//         {
//           product_id: productId, // THIS WAS THE MISSING FIELD
//           quantity: 1,
//           // We override the price here with the event's actual price
//           price: (args.ticketPrice || 0) * 100, 
//         },
//       ],
//       metadata: {
//         userID: args.userID,
//         eventId: args.eventId || "",
//         type: args.type,
//       },
//       return_url: "https://occazio.in/payment-success", 
//     };

//     try {
//       const session = await dodo.payments.create(paymentConfig);
//       return session.payment_link;
//     } catch (error) {
//       console.error("Dodo API Error:", error);
//       throw new Error("Failed to create checkout session");
//     }
//   },
// });

/*import { action, internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { DodoPayments } from "dodopayments";

export const createCheckout = action({
  args: {
    type: v.union(v.literal("pro_upgrade"), v.literal("event_ticket")),
    eventId: v.optional(v.id("events")),
    ticketPrice: v.optional(v.number()),
    userId: v.string(), // Changed from clerkId
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const dodo = new DodoPayments({
      bearerToken: process.env.DODO_PAYMENTS_API_KEY,
      environment: 'test_mode', 
    });

    const productId = args.type === "event_ticket" 
      ? "pdt_0NZobtAJcymVml3TOo5Qy" 
      : "pdt_0NZoUQe7KYJZPmPCn9IUd"; 

    const paymentConfig = {
      payment_link: true,
      customer: {
        email: args.email,
        name: args.name,
      },
      billing: { country: "IN", city: "", state: "", street: "", zipcode: "" },
      product_cart: [
        { product_id: productId, quantity: 1, price: (args.ticketPrice || 0) * 100 },
      ],
      metadata: {
        userId: args.userId, // Passes userId to Dodo
        eventId: args.eventId || "",
        type: args.type,
        name: args.name,
        email: args.email,
      },
      return_url: "http://localhost:3000/my-tickets", 
    };

    try {
      const session = await dodo.payments.create(paymentConfig);
      return session.payment_link;
    } catch (error) {
      console.error("Dodo API Error:", JSON.stringify(error, null, 2));
      throw new Error("Failed to create checkout session");
    }
  },
});

// --- WEBHOOK FULFILLMENT ---
// --- WEBHOOK FULFILLMENT ---
// --- WEBHOOK FULFILLMENT ---
export const fulfillTicket = internalMutation({
  args: { 
    userId: v.string(), 
    eventId: v.string(),
    name: v.optional(v.string()), 
    email: v.optional(v.string()) 
  },
  handler: async (ctx, args) => {
    // 1. Reconstruct the exact Clerk token!
    const fullToken = `https://evolved-malamute-67.clerk.accounts.dev|${args.userId}`;
    
    console.log("🔍 Looking up Convex ID for Token:", fullToken);

    // 2. Search using the newly constructed string
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("tokenIdentifier"), fullToken))
      .first();

    if (!user) {
      console.error("❌ ERROR: Could not find user with token:", fullToken);
      return; 
    }

    console.log("✅ Convex User found! Creating ticket...");

    // 3. Create the ticket using the native Convex user._id!
    await ctx.db.insert("registrations", {
      eventId: args.eventId,
      userId: user._id, 
      attendeeName: args.name || "Attendee",
      attendeeEmail: args.email || "",
      qrCode: Math.random().toString(36).substring(2, 15),
      checkedIn: false,
      status: "confirmed",
      paymentStatus: "paid",
      registeredAt: Date.now(),
    });
    const event = await ctx.db.get(args.eventId);
    if (event) {
      await ctx.db.patch(args.eventId, {
        registrationCount: (event.registrationCount || 0) + 1,
      });
      console.log(`📈 Event count updated to: ${(event.registrationCount || 0) + 1}`);
    }
    
    console.log("🎉 TICKET CREATED SUCCESSFULLY!");
  },
});*/


// "https://evolved-malamute-67.clerk.accounts.dev|user_38NOdATRs3CPSZOfARgFjQzbSsQ"
// const fullToken = `https://clerk.occazi.in|${args.userId}`;




import { action, internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { DodoPayments } from "dodopayments";

export const createCheckout = action({
  args: {
    type: v.union(v.literal("pro_upgrade"), v.literal("event_ticket")),
    eventId: v.optional(v.id("events")),
    ticketPrice: v.optional(v.number()),
    userId: v.string(), 
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const dodo = new DodoPayments({
      bearerToken: process.env.DODO_PAYMENTS_API_KEY,
      environment: 'test_mode', 
    });

    const productId = args.type === "event_ticket" 
      ? "pdt_0NZobtAJcymVml3TOo5Qy" 
      : "pdt_0NZoUQe7KYJZPmPCn9IUd"; 

    const paymentConfig = {
      payment_link: true,
      customer: { email: args.email, name: args.name },
      billing: { country: "IN", city: "", state: "", street: "", zipcode: "" },
      product_cart: [
        { product_id: productId, quantity: 1, price: (args.ticketPrice || 0) * 100 },
      ],
      metadata: {
        userId: args.userId,
        eventId: args.eventId || "",
        type: args.type,
        name: args.name,
        email: args.email,
      },
      return_url: "https://occazi.in/", 
    };

    try {
      const session = await dodo.payments.create(paymentConfig);
      return session.payment_link;
    } catch (error) {
      console.error("Dodo API Error:", JSON.stringify(error, null, 2));
      throw new Error("Failed to create checkout session");
    }
  },
});

// --- FULFILL TICKET ---
export const fulfillTicket = internalMutation({
  args: { 
    userId: v.string(), 
    eventId: v.string(),
    name: v.optional(v.string()), 
    email: v.optional(v.string()) 
  },
  handler: async (ctx, args) => {
    const fullToken = `https://evolved-malamute-67.clerk.accounts.dev|${args.userId}`;
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("tokenIdentifier"), fullToken))
      .first();

    if (!user) return;

    await ctx.db.insert("registrations", {
      eventId: args.eventId,
      userId: user._id, 
      attendeeName: args.name || "Attendee",
      attendeeEmail: args.email || "",
      qrCode: Math.random().toString(36).substring(2, 15),
      checkedIn: false,
      status: "confirmed",
      paymentStatus: "paid",
      registeredAt: Date.now(),
    });

    const event = await ctx.db.get(args.eventId);
    if (event) {
      await ctx.db.patch(args.eventId, {
        registrationCount: (event.registrationCount || 0) + 1,
      });
    }
  },
});

// --- NEW: FULFILL PRO UPGRADE ---
export const fulfillProUpgrade = internalMutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const fullToken = `https://evolved-malamute-67.clerk.accounts.dev|${args.userId}`;
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("tokenIdentifier"), fullToken))
      .first();

    if (!user) {
      console.error("❌ ERROR: Could not find user for Pro Upgrade:", fullToken);
      return; 
    }

    // Set them to Pro permanently (removes the expiration date from the trial)
    await ctx.db.patch(user._id, {
      isPro: true,
      proExpiration: undefined, 
    });
    
    console.log("👑 SUCCESS! User is now a paid Pro Member!");
  },
});