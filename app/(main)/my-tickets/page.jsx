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
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Calendar, MapPin, Loader2, Ticket, CheckCircle2, Sparkles, User, Info } from "lucide-react"; // Added new icons
import { useConvexQuery, useConvexMutation } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import QRCode from "react-qr-code";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Ensure Badge is imported
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

      {/* ENHANCED QR Code Modal */}
      {selectedTicket && (
        <Dialog
          open={!!selectedTicket}
          onOpenChange={() => setSelectedTicket(null)}
        >
          <DialogContent className="sm:max-w-md p-0 overflow-hidden border-none shadow-2xl">
            {/* 1. Header with Branding */}
            <div className="bg-purple-600/10 p-6 pb-4 border-b">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span className="text-2xl font-bold text-purple-600">occazi</span>
                </div>
                <Badge variant={selectedTicket.paymentStatus === "paid" ? "default" : "secondary"} className="text-xs px-3 py-1">
                  {selectedTicket.paymentStatus === "paid" ? "Paid" : "Free"}
                </Badge>
              </div>
            </div>

            {/* 2. Main Ticket Body */}
            <div className="p-6 space-y-6">
              {/* Attendee Info */}
              <div className="text-center">
                <p className="font-semibold text-2xl mb-1 tracking-tight">
                  {selectedTicket.attendeeName}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full w-fit mx-auto mt-2">
                   <User className="w-3.5 h-3.5"/>
                   <span>Attendee</span>
                </div>
              </div>

              {/* Dotted Divider for Ticket Effect */}
              <div className="border-t-2 border-dashed border-muted"/>

              {/* Event Title and Info */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sm text-purple-600 font-medium">
                  <Info className="w-4 h-4"/>
                   Event Details
                </div>
                <h3 className="font-bold text-xl leading-tight text-foreground">
                  {selectedTicket.event.title}
                </h3>
              </div>
              
              {/* QR Code Section */}
              <div className="flex flex-col items-center gap-4 bg-muted/50 p-6 rounded-2xl border border-muted-foreground/10 mx-auto w-fit">
                  <div className="flex justify-center p-5 bg-white border-4 border-muted rounded-xl shadow-inner mx-auto">
                    <QRCode value={selectedTicket.qrCode} size={200} level="H" />
                  </div>
                   <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-medium">Ticket ID</p>
                    <p className="font-mono text-sm bg-muted px-3 py-1 rounded-md w-fit mx-auto border border-muted-foreground/10">{selectedTicket.qrCode}</p>
                   </div>
              </div>

               {/* Location/Time Details Section */}
              <div className="bg-purple-600/5 p-5 rounded-xl space-y-4 text-sm border border-purple-600/10">
                <div className="flex items-center gap-3.5">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">Date & Time</span>
                    <span className="text-muted-foreground">
                        {format(selectedTicket.event.startDate, "PPP, h:mm a")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">Location</span>
                    <span className="text-muted-foreground">
                        {selectedTicket.event.locationType === "online"
                        ? "Online Event"
                        : `${selectedTicket.event.city}, ${
                            selectedTicket.event.state ||
                            selectedTicket.event.country
                            }`}
                    </span>
                  </div>
                </div>
              </div>

               {/* Footnote instruction */}
              <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5 pt-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                Present this QR code for check-in at the entrance
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

