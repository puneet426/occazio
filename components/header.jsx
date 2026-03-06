// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Building, Crown, Plus, Sparkles, Ticket } from "lucide-react";
// import { SignInButton, useAuth, UserButton, useUser } from "@clerk/nextjs";
// import { Authenticated, Unauthenticated } from "convex/react";
// import { BarLoader } from "react-spinners";
// import { useStoreUser } from "@/hooks/use-store-user";
// import { useOnboarding } from "@/hooks/use-onboarding";
// import OnboardingModal from "./onboarding-modal";
// import SearchLocationBar from "./search-location-bar";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import UpgradeModal from "./upgrade-modal";
// import { Badge } from "./ui/badge";

// export default function Header() {
//   const [showUpgradeModal, setShowUpgradeModal] = useState(false);

//   const { isLoading } = useStoreUser();
//   const { showOnboarding, handleOnboardingComplete, handleOnboardingSkip } =
//     useOnboarding();

//   const { has } = useAuth();
//   const hasPro = has?.({ plan: "pro" });

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/occaziologo.png"
//               alt=" logo"
//               width={500}
//               height={500}
//               className="w-full h-11"
//               priority
//             />
//             {/* <span className="text-purple-500 text-2xl font-bold">*</span> */}
//             {hasPro && (
//               <Badge className="bg-linear-to-r from-pink-500 to-orange-500 gap-1 text-white ml-3">
//                 <Crown className="w-3 h-3" />
//                 Pro
//               </Badge>
//             )}
//           </Link>

//           {/* Search & Location - Desktop Only */}
//           <div className="hidden md:flex flex-1 justify-center">
//             <SearchLocationBar />
//           </div>

//           {/* Right Side Actions */}
//           <div className="flex items-center">
//             {/* Show Pro badge or Upgrade button */}
//             {!hasPro && (
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setShowUpgradeModal(true)}
//               >
//                 Pricing
//               </Button>
//             )}

//             <Button variant="ghost" size="sm" asChild className={"mr-2"}>
//               <Link href="/explore">Explore</Link>
//             </Button>

//             <Authenticated>
//               {/* Create Event Button */}
//               <Button size="sm" asChild className="flex gap-2 mr-4">
//                 <Link href="/create-event">
//                   <Plus className="w-4 h-4" />
//                   <span className="hidden sm:inline">Create Event</span>
//                 </Link>
//               </Button>

//               {/* User Button */}
//               <UserButton
//                 afterSignOutUrl="/"
//                 appearance={{
//                   elements: {
//                     avatarBox: "w-9 h-9",
//                   },
//                 }}
//               >
//                 <UserButton.MenuItems>
//                   <UserButton.Link
//                     label="My Tickets"
//                     labelIcon={<Ticket size={16} />}
//                     href="/my-tickets"
//                   />
//                   <UserButton.Link
//                     label="My Events"
//                     labelIcon={<Building size={16} />}
//                     href="/my-events"
//                   />
//                   <UserButton.Action label="manageAccount" />
//                 </UserButton.MenuItems>
//               </UserButton>
//             </Authenticated>

//             <Unauthenticated>
//               <SignInButton mode="modal">
//                 <Button size="sm">Sign In</Button>
//               </SignInButton>
//             </Unauthenticated>
//           </div>
//         </div>

//         {/* Mobile Search & Location - Below Header */}
//         <div className="md:hidden border-t px-3 py-3">
//           <SearchLocationBar />
//         </div>

//         {isLoading && (
//           <div className="absolute bottom-0 left-0 w-full">
//             <BarLoader width={"100%"} color="#a855f7" />
//           </div>
//         )}
//       </nav>

//       {/* Onboarding Modal */}
//       <OnboardingModal
//         isOpen={showOnboarding}
//         onClose={handleOnboardingSkip}
//         onComplete={handleOnboardingComplete}
//       />

//       <UpgradeModal
//         isOpen={showUpgradeModal}
//         onClose={() => setShowUpgradeModal(false)}
//         trigger="header"
//       />
//     </>
//   );
// }


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building, Crown, Plus, Ticket } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
import { useOnboarding } from "@/hooks/use-onboarding";
import OnboardingModal from "./onboarding-modal";
import SearchLocationBar from "./search-location-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import UpgradeModal from "./upgrade-modal";
import { Badge } from "./ui/badge";
import { api } from "@/convex/_generated/api";

export default function Header() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const { isLoading } = useStoreUser();
  const { showOnboarding, handleOnboardingComplete, handleOnboardingSkip } = useOnboarding();

  // --- NEW: Ask Convex for Pro Status ---
  const currentUser = useQuery(api.users.getCurrentUser);
  const hasPro = currentUser?.isPro === true;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/occazilogo.png" alt="logo" width={500} height={500} className="w-full h-11" priority />
            {hasPro && (
              <Badge className="bg-amber-500/10 text-amber-200 border border-amber-500/20 gap-1.5 px-2.5 py-0.5 ml-3 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.05)]">
  <Crown className="w-3.5 h-3.5 fill-amber-500/20 text-amber-400" /> 
  <span className="font-medium tracking-wide">Pro</span>
</Badge>
            )}
          </Link>

          <div className="hidden md:flex flex-1 justify-center">
            <SearchLocationBar />
          </div>

          <div className="flex items-center">
            {!hasPro && (
              <Button variant="ghost" size="sm" onClick={() => setShowUpgradeModal(true)}>
                Pricing
              </Button>
            )}

            <Button variant="ghost" size="sm" asChild className={"mr-2"}>
              <Link href="/explore">Explore</Link>
            </Button>

            <Authenticated>
              <Button size="sm" asChild className="flex gap-2 mr-4">
                <Link href="/create-event">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Create Event</span>
                </Link>
              </Button>

              <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "w-9 h-9" } }}>
                <UserButton.MenuItems>
                  <UserButton.Link label="My Tickets" labelIcon={<Ticket size={16} />} href="/my-tickets" />
                  <UserButton.Link label="My Events" labelIcon={<Building size={16} />} href="/my-events" />
                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </Authenticated>

            <Unauthenticated>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </Unauthenticated>
          </div>
        </div>

        <div className="md:hidden border-t px-3 py-3">
          <SearchLocationBar />
        </div>

        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full">
            <BarLoader width={"100%"} color="#a855f7" />
          </div>
        )}
      </nav>

      <OnboardingModal isOpen={showOnboarding} onClose={handleOnboardingSkip} onComplete={handleOnboardingComplete} />
      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} trigger="header" />
    </>
  );
}