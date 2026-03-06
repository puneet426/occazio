// import { httpRouter } from "convex/server";
// import { httpAction } from "./_generated/server";
// import { internal } from "./_generated/api";

// const http = httpRouter();

// http.route({
//   path: "/dodo-webhook",
//   method: "POST",
//   handler: httpAction(async (ctx, request) => {
//     const payload = await request.json();

//     // Listen for the "payment successful" event
//     if (payload.event === "payment.succeeded") {
//       const metadata = payload.data.metadata;

//       // 1. Handle Event Tickets
//       if (metadata?.type === "event_ticket") {
//         await ctx.runMutation(internal.payments.fulfillTicket, { 
//           userId: metadata.userId,
//           eventId: metadata.eventId
//         });
//       } 
//       // 2. Handle Pro Upgrades (if you have them)
//       else if (metadata?.type === "pro_upgrade") {
//         await ctx.runMutation(internal.payments.fulfillProUpgrade, { 
//           userId: metadata.userId 
//         });
//       }
//     }
    
//     // Always return a 200 OK so Dodo knows we got the message
//     return new Response(null, { status: 200 });
//   }),
// });

// export default http;

// import { httpRouter } from "convex/server";
// import { httpAction } from "./_generated/server";
// import { internal } from "./_generated/api";

// const http = httpRouter();

// http.route({
//   path: "/dodo-webhook",
//   method: "POST",
//   handler: httpAction(async (ctx, request) => {
//     const payload = await request.json();
    
//     // FIX: Changed payload.event to payload.type
//     console.log("🔔 WEBHOOK RECEIVED! Event:", payload.type);

//     // FIX: Changed payload.event to payload.type
//     if (payload.type === "payment.succeeded") {
//       const metadata = payload.data.metadata;
      
//       if (metadata?.type === "event_ticket") {
//         console.log("🎫 Attempting to fulfill ticket for:", metadata.name);
//         await ctx.runMutation(internal.payments.fulfillTicket, { 
//           userId: metadata.userId, 
//           eventId: metadata.eventId,
//           name: metadata.name,     
//           email: metadata.email    
//         });
//       }
//     }
    
//     return new Response(null, { status: 200 });
//   }),
// });

// export default http;



import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/dodo-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const payload = await request.json();
    console.log("🔔 WEBHOOK RECEIVED! Type:", payload.type);

    if (payload.type === "payment.succeeded") {
      const metadata = payload.data.metadata;
      
      if (metadata?.type === "event_ticket") {
        console.log("🎫 Fulfilling ticket for:", metadata.name);
        await ctx.runMutation(internal.payments.fulfillTicket, { 
          userId: metadata.userId, 
          eventId: metadata.eventId,
          name: metadata.name,     
          email: metadata.email    
        });
      } 
      else if (metadata?.type === "pro_upgrade") {
        console.log("👑 Fulfilling Pro Upgrade for user:", metadata.userId);
        await ctx.runMutation(internal.payments.fulfillProUpgrade, {
          userId: metadata.userId,
        });
      }
    }
    
    return new Response(null, { status: 200 });
  }),
});

export default http;