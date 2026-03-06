/* eslint-disable react-hooks/purity */
/*"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Calendar, MapPin, Loader2, Ticket } from "lucide-react";
import { useConvexQuery, useConvexMutation } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import QRCode from "react-qr-code";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import EventCard from "@/components/event-card";

export default function MyTicketsPage() {
  const router = useRouter();
  const [selectedTicket, setSelectedTicket] = useState(null);

  const { data: registrations, isLoading } = useConvexQuery(
    api.registrations.getMyRegistrations
  );

  const { mutate: cancelRegistration, isLoading: isCancelling } =
    useConvexMutation(api.registrations.cancelRegistration);

  const handleCancelRegistration = async (registrationId) => {
    if (!window.confirm("Are you sure you want to cancel this registration?"))
      return;

    try {
      await cancelRegistration({ registrationId });
      toast.success("Registration cancelled successfully.");
    } catch (error) {
      toast.error(error.message || "Failed to cancel registration");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }

  const now = Date.now();

  const upcomingTickets = registrations?.filter(
    (reg) =>
      reg.event && reg.event.startDate >= now && reg.status === "confirmed"
  );
  const pastTickets = registrations?.filter(
    (reg) =>
      reg.event && (reg.event.startDate < now || reg.status === "cancelled")
  );

  return (
    <div className="min-h-screen pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Tickets</h1>
          <p className="text-muted-foreground">
            View and manage your event registrations
          </p>
        </div>

        
        {upcomingTickets?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTickets.map((registration) => (
                <EventCard
                  key={registration._id}
                  event={registration.event}
                  action="ticket"
                  onClick={() => setSelectedTicket(registration)}
                  onDelete={() => handleCancelRegistration(registration._id)}
                />
              ))}
            </div>
          </div>
        )}

        
        {pastTickets?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Past Events</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastTickets.map((registration) => (
                <EventCard
                  key={registration._id}
                  event={registration.event}
                  action={null}
                  className="opacity-60"
                />
              ))}
            </div>
          </div>
        )}

       
        {!upcomingTickets?.length && !pastTickets?.length && (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-6xl mb-4">🎟️</div>
              <h2 className="text-2xl font-bold">No tickets yet</h2>
              <p className="text-muted-foreground">
                Register for events to see your tickets here
              </p>
              <Button asChild className="gap-2">
                <Link href="/explore">
                  <Ticket className="w-4 h-4" /> Browse Events
                </Link>
              </Button>
            </div>
          </Card>
        )}
      </div>

      
      {selectedTicket && (
        <Dialog
          open={!!selectedTicket}
          onOpenChange={() => setSelectedTicket(null)}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Your Ticket</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div className="text-center">
                <p className="font-semibold mb-1">
                  {selectedTicket.attendeeName}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {selectedTicket.event.title}
                </p>
              </div>

              <div className="flex justify-center p-6 bg-white rounded-lg">
                <QRCode value={selectedTicket.qrCode} size={200} level="H" />
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Ticket ID</p>
                <p className="font-mono text-sm">{selectedTicket.qrCode}</p>
              </div>

              <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {format(selectedTicket.event.startDate, "PPP, h:mm a")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {selectedTicket.event.locationType === "online"
                      ? "Online Event"
                      : `${selectedTicket.event.city}, ${
                          selectedTicket.event.state ||
                          selectedTicket.event.country
                        }`}
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Show this QR code at the event entrance for check-in
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}*/


/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/purity */
"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar, MapPin, Loader2, Ticket, CheckCircle2 } from "lucide-react";
import { useConvexQuery, useConvexMutation } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import QRCode from "react-qr-code";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import EventCard from "@/components/event-card";

export default function MyTicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const { data: registrations, isLoading } = useConvexQuery(
    api.registrations.getMyRegistrations
  );

  const { mutate: cancelRegistration } =
    useConvexMutation(api.registrations.cancelRegistration);

  const handleCancelRegistration = async (registrationId) => {
    if (!window.confirm("Are you sure you want to cancel this registration?"))
      return;

    try {
      await cancelRegistration({ registrationId });
      toast.success("Registration cancelled successfully.");
    } catch (error) {
      toast.error(error.message || "Failed to cancel registration");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }

  const now = Date.now();

  const upcomingTickets = registrations?.filter(
    (reg) =>
      reg.event && reg.event.endDate >= now && reg.status === "confirmed"
  );
  
  const pastTickets = registrations?.filter(
    (reg) =>
      reg.event && (reg.event.endDate < now || reg.status === "cancelled")
  );

  return (
    <div className="min-h-screen pb-20 px-4 pt-36 md:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Tickets</h1>
          <p className="text-muted-foreground">
            View and manage your event registrations
          </p>
        </div>

        {/* Upcoming Tickets */}
        {upcomingTickets?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTickets.map((registration) => (
                <EventCard
                  key={registration._id}
                  event={registration.event}
                  action="ticket"
                  onClick={() => setSelectedTicket(registration)}
                  onDelete={() => handleCancelRegistration(registration._id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Past Tickets */}
        {pastTickets?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Past Events</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastTickets.map((registration) => (
                <EventCard
                  key={registration._id}
                  event={registration.event}
                  action={null}
                  className="opacity-60 grayscale-[50%]"
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!upcomingTickets?.length && !pastTickets?.length && (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-6xl mb-4">🎟️</div>
              <h2 className="text-2xl font-bold">No tickets yet</h2>
              <p className="text-muted-foreground">
                Register for events to see your tickets here
              </p>
              <Button asChild className="gap-2">
                <Link href="/explore">
                  <Ticket className="w-4 h-4" /> Browse Events
                </Link>
              </Button>
            </div>
          </Card>
        )}
      </div>

      {/* 🎫 PREMIUM DARK THEMED TICKET MODAL */}
      {selectedTicket && (
        <Dialog
          open={!!selectedTicket}
          onOpenChange={() => setSelectedTicket(null)}
        >
          {/* Responsive sizing and dark background wrapper */}
          <DialogContent 
            className="w-[95vw] sm:max-w-md p-0 overflow-hidden border border-purple-500/30 shadow-[0_0_50px_-12px_rgba(147,51,234,0.4)] bg-[#0B0A10] text-slate-200 rounded-3xl"
            hideCloseButton // Optional: hides default close X so it doesn't overlap your dark theme
          >
            {/* Background Glow Effects (Mimicking your uploaded image) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
              {/* Top Purple Glow */}
              <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/40 via-transparent to-transparent blur-2xl" />
              {/* Bottom Blue Glow */}
              <div className="absolute bottom-[-20%] right-[-20%] w-[100%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/30 via-transparent to-transparent blur-2xl" />
              {/* Subtle metallic grain overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay opacity-30 border-t border-white/20 rounded-3xl" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              
              {/* 1. BRANDING HEADER */}
              <div className="flex items-center justify-between p-5 md:p-6 border-b border-white/10 bg-black/20 backdrop-blur-md">
                {/* CSS recreation of your Ring Logo + OCCAZI */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-[3px] border-t-purple-400 border-r-purple-600 border-b-blue-600 border-l-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  <DialogTitle className="text-xl md:text-2xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-slate-400 uppercase m-0 p-0">
                    OCCAZI
                  </DialogTitle>
                </div>
                {/* VIP/Standard Badge */}
                <Badge className="bg-purple-500/20 text-purple-200 border border-purple-500/40 uppercase tracking-widest text-[10px] md:text-xs px-3 py-1 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  {selectedTicket.paymentStatus === "paid" ? "VIP Access" : "Standard"}
                </Badge>
              </div>

              {/* 2. TICKET CONTENT */}
              <div className="p-6 md:p-8 space-y-6">
                
                {/* Attendee Info */}
                <div className="text-center space-y-1">
                  <p className="text-[10px] md:text-xs text-purple-300/60 uppercase tracking-[0.3em] font-semibold">
                    Admit One
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                    {selectedTicket.attendeeName}
                  </h3>
                </div>

                {/* Event Name */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm shadow-inner text-center">
                  <h4 className="font-semibold text-lg md:text-xl text-purple-100 leading-snug drop-shadow-sm">
                    {selectedTicket.event.title}
                  </h4>
                </div>

                {/* QR Code (Must stay white for easy scanning at the door) */}
                <div className="flex justify-center">
                  <div className="p-4 bg-white rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)] ring-4 ring-white/10">
                    {/* Size slightly scales up on desktop */}
                    <QRCode value={selectedTicket.qrCode} size={256} level="H" className="w-40 h-40 md:w-48 md:h-48" />
                  </div>
                </div>

                {/* Ticket ID */}
                <div className="text-center -mt-2">
                  <p className="font-mono text-xs md:text-sm text-slate-300 bg-black/50 px-4 py-1.5 rounded-lg inline-block border border-white/10 shadow-inner tracking-wider">
                    {selectedTicket.qrCode}
                  </p>
                </div>

                {/* Date & Location Details */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 text-sm mt-4">
                  <div className="bg-black/30 p-3 md:p-4 rounded-xl border border-white/5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-purple-300/80">Date</span>
                    </div>
                    <p className="text-slate-200 text-xs md:text-sm font-medium">
                      {format(selectedTicket.event.startDate, "MMM d, yyyy")}
                      <br />
                      <span className="text-slate-400">{format(selectedTicket.event.startDate, "h:mm a")}</span>
                    </p>
                  </div>

                  <div className="bg-black/30 p-3 md:p-4 rounded-xl border border-white/5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-300/80">Location</span>
                    </div>
                    <p className="text-slate-200 text-xs md:text-sm font-medium break-words line-clamp-2">
                      {selectedTicket.event.locationType === "online"
                        ? "Online Event"
                        : `${selectedTicket.event.city}, ${selectedTicket.event.state || selectedTicket.event.country}`}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[10px] md:text-xs text-slate-400/80 text-center flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" />
                    Present this secure digital pass for entry
                  </p>
                </div>

              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

