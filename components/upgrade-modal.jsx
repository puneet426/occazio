// "use client";

// import { Sparkles } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { PricingTable } from "@clerk/nextjs";

// export default function UpgradeModal({ isOpen, onClose, trigger = "limit" }) {
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-2xl">
//         <DialogHeader>
//           <div className="flex items-center gap-2 mb-2">
//             <Sparkles className="w-6 h-6 text-purple-500" />
//             <DialogTitle className="text-2xl">Upgrade to Pro</DialogTitle>
//           </div>
//           <DialogDescription>
//             {trigger === "header" && "Create Unlimited Events with Pro! "}
//             {trigger === "limit" && "You've reached your free event limit. "}
//             {trigger === "color" && "Custom theme colors are a Pro feature. "}
//             Unlock unlimited events and premium features!
//           </DialogDescription>
//         </DialogHeader>

//         {/* Pricing Cards */}
//         <PricingTable
//           checkoutProps={{
//             appearance: {
//               elements: {
//                 drawerRoot: {
//                   zIndex: 2000,
//                 },
//               },
//             },
//           }}
//         />

//         {/* Footer */}
//         <div className="flex gap-3">
//           <Button variant="outline" onClick={onClose} className="flex-1">
//             Maybe Later
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Sparkles, Loader2, Check, X } from "lucide-react"; 
// import { useUser } from "@clerk/nextjs"; // 1. Added Clerk to get user email/name
// import { toast } from "sonner";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// import { useAction } from "convex/react";
// import { api } from "../convex/_generated/api";

// export default function UpgradeModal({ isOpen, onClose, trigger = "limit" }) {
//   const { user } = useUser(); // 2. Initialize the user
//   const createCheckout = useAction(api.payments.createCheckout);
  
//   // Track which button is loading ('pro' or 'trial')
//   const [isLoading, setIsLoading] = useState(null); 

//   // Handler for the ₹200/month Pro Upgrade
//   const handleProUpgrade = async () => {
//     setIsLoading("pro");
//     try {
//       const checkoutUrl = await createCheckout({ 
//         type: "pro_upgrade",
//         userId: user?.id ?? "",           // FIX: Added userId
//         name: user?.fullName || "User",   // FIX: Added name
//         email: user?.primaryEmailAddress?.emailAddress || "", // FIX: Added email
//       });
      
//       if (checkoutUrl) {
//         window.location.href = checkoutUrl;
//       } else {
//         toast.error("Could not generate checkout link.");
//       }
//     } catch (error) {
//       console.error("Failed to generate checkout link:", error);
//       toast.error("Payment failed to initialize.");
//     } finally {
//       setIsLoading(null);
//     }
//   };

//   // Handler for the 3-Month Free Trial
//   const handleFreeTrial = async () => {
//     setIsLoading("trial");
//     try {
//       // TODO: Call a Convex mutation here to activate the trial!
//       // Example: await startFreeTrial({ userId: user?.id });
      
//       toast.success("Free trial activated! Welcome to Pro.");
//       onClose(); 
//     } catch (error) {
//       console.error("Failed to start trial:", error);
//       toast.error("Could not activate free trial.");
//     } finally {
//       setIsLoading(null);
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       {/* 3. Widened the modal to max-w-4xl to fit 3 cards side-by-side */}
//       <DialogContent className="sm:max-w-4xl">
//         <DialogHeader className="text-center sm:text-center">
//           <div className="flex items-center justify-center gap-2 mb-2">
//             <Sparkles className="w-6 h-6 text-purple-500" />
//             <DialogTitle className="text-2xl">Choose Your Plan</DialogTitle>
//           </div>
//           <DialogDescription className="text-center">
//             {trigger === "header" && "Unlock the full potential of Occazio. "}
//             {trigger === "limit" && "You've reached your free event limit. "}
//             {trigger === "color" && "Custom theme colors are a Pro feature. "}
//             Select the plan that works best for you.
//           </DialogDescription>
//         </DialogHeader>

//         {/* 4. The 3 Pricing Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          
//           {/* Option 1: Basic (Free) */}
//           <div className="border rounded-xl p-6 flex flex-col">
//             <h3 className="text-lg font-semibold text-foreground">Basic</h3>
//             <p className="text-3xl font-bold mt-2 mb-4">
//               ₹0<span className="text-sm font-normal text-muted-foreground"> / forever</span>
//             </p>
//             <ul className="text-sm text-muted-foreground space-y-3 flex-1">
//               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Up to 5 free events</li>
//               <li className="flex items-center gap-2 text-muted-foreground/50"><X className="w-4 h-4"/> No custom themes</li>
//               <li className="flex items-center gap-2 text-muted-foreground/50"><X className="w-4 h-4"/> Standard support</li>
//             </ul>
//             <Button variant="outline" className="w-full mt-6" disabled>
//               Current Plan
//             </Button>
//           </div>

//           {/* Option 2: 3-Month Free Trial */}
//           <div className="border border-purple-500/50 bg-purple-500/5 rounded-xl p-6 flex flex-col relative overflow-hidden">
//             <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
//               Recommended
//             </div>
//             <h3 className="text-lg font-semibold text-foreground">Pro Trial</h3>
//             <p className="text-3xl font-bold mt-2 mb-1">
//               ₹0<span className="text-sm font-normal text-muted-foreground"> / 3 months</span>
//             </p>
//             <p className="text-xs text-purple-600 mb-4 font-medium">No Credit Card Required</p>
//             <ul className="text-sm text-muted-foreground space-y-3 flex-1">
//               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500"/> Unlimited events</li>
//               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500"/> Custom theme colors</li>
//               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500"/> Priority support</li>
//             </ul>
//             <Button 
//               onClick={handleFreeTrial}
//               variant="secondary"
//               className="w-full mt-6 bg-purple-100 hover:bg-purple-200 text-purple-700"
//               disabled={!!isLoading}
//             >
//               {isLoading === "trial" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Start Free Trial"}
//             </Button>
//           </div>

//           {/* Option 3: Pro */}
//           <div className="border rounded-xl p-6 flex flex-col">
//             <h3 className="text-lg font-semibold text-foreground">Occazio Pro</h3>
//             <p className="text-3xl font-bold mt-2 mb-4">
//               ₹200<span className="text-sm font-normal text-muted-foreground"> / month</span>
//             </p>
//             <ul className="text-sm text-muted-foreground space-y-3 flex-1">
//               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Unlimited events</li>
//               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Custom theme colors</li>
//               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Priority support</li>
//             </ul>
//             <Button 
//               onClick={handleProUpgrade} 
//               className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white"
//               disabled={!!isLoading}
//             >
//               {isLoading === "pro" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Upgrade Now"}
//             </Button>
//           </div>

//         </div>

//         {/* Footer */}
//         <div className="flex justify-center mt-2">
//           <Button variant="ghost" onClick={onClose} disabled={!!isLoading}>
//             Maybe Later
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


"use client";

import { useState } from "react";
import { Sparkles, Loader2, Check, X } from "lucide-react"; 
import { useUser } from "@clerk/nextjs"; 
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAction, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function UpgradeModal({ isOpen, onClose, trigger = "limit" }) {
  const { user } = useUser(); 
  const createCheckout = useAction(api.payments.createCheckout);
  const startFreeTrial = useMutation(api.users.startFreeTrial);
  
  const [isLoading, setIsLoading] = useState(null); 

  const handleProUpgrade = async () => {
    setIsLoading("pro");
    try {
      const checkoutUrl = await createCheckout({ 
        type: "pro_upgrade",
        userId: user?.id ?? "",           
        name: user?.fullName || "User",   
        email: user?.primaryEmailAddress?.emailAddress || "", 
      });
      
      if (checkoutUrl) window.location.href = checkoutUrl;
      else toast.error("Could not generate checkout link.");
    } catch (error) {
      console.error("Failed to generate checkout link:", error);
      toast.error("Payment failed to initialize.");
    } finally {
      setIsLoading(null);
    }
  };

  const handleFreeTrial = async () => {
    setIsLoading("trial");
    try {
      await startFreeTrial(); 
      toast.success("Free trial activated! Welcome to Pro.");
      onClose(); 
    } catch (error) {
      toast.error(error.message || "Could not activate free trial."); 
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader className="text-center sm:text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <DialogTitle className="text-2xl">Choose Your Plan</DialogTitle>
          </div>
          <DialogDescription className="text-center">
            {trigger === "header" && "Unlock the full potential of Occazio. "}
            {trigger === "limit" && "You've reached your free event limit. "}
            {trigger === "color" && "Custom theme colors are a Pro feature. "}
            Select the plan that works best for you.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          <div className="border rounded-xl p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-foreground">Basic</h3>
            <p className="text-3xl font-bold mt-2 mb-4">₹0<span className="text-sm font-normal text-muted-foreground"> / forever</span></p>
            <ul className="text-sm text-muted-foreground space-y-3 flex-1">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Up to 5 free events</li>
              <li className="flex items-center gap-2 text-muted-foreground/50"><X className="w-4 h-4"/> No custom themes</li>
              <li className="flex items-center gap-2 text-muted-foreground/50"><X className="w-4 h-4"/> Standard support</li>
            </ul>
            <Button variant="outline" className="w-full mt-6" disabled>Current Plan</Button>
          </div>

          <div className="border border-purple-500/50 bg-purple-500/5 rounded-xl p-6 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Recommended</div>
            <h3 className="text-lg font-semibold text-foreground">Pro Trial</h3>
            <p className="text-3xl font-bold mt-2 mb-1">₹0<span className="text-sm font-normal text-muted-foreground"> / 3 months</span></p>
            <p className="text-xs text-purple-600 mb-4 font-medium">No Credit Card Required</p>
            <ul className="text-sm text-muted-foreground space-y-3 flex-1">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500"/> Unlimited events</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500"/> Custom theme colors</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500"/> Priority support</li>
            </ul>
            <Button onClick={handleFreeTrial} variant="secondary" className="w-full mt-6 bg-purple-100 hover:bg-purple-200 text-purple-700" disabled={!!isLoading}>
              {isLoading === "trial" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Start Free Trial"}
            </Button>
          </div>

          <div className="border rounded-xl p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-foreground">Occazio Pro</h3>
            <p className="text-3xl font-bold mt-2 mb-4">₹200<span className="text-sm font-normal text-muted-foreground"> / month</span></p>
            <ul className="text-sm text-muted-foreground space-y-3 flex-1">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Unlimited events</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Custom theme colors</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Priority support</li>
            </ul>
            <Button onClick={handleProUpgrade} className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white" disabled={!!isLoading}>
              {isLoading === "pro" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Upgrade Now"}
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <Button variant="ghost" onClick={onClose} disabled={!!isLoading}>Maybe Later</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}