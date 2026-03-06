import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title : "Occazi – AI-Powered Full-Stack Event Management Platform",
  description : "Occazi is a AI-powered event management platform that simplifies the complete lifecycle of an event — from intelligent creation to real-time attendee management and analytics.",
  author:[{name:"Puneet Tiwari"}],
  keywords:["occazi", "occazio","event management", "codeforge", "niamt","codeforgeniamt","puneet","puneet tiwari"],
  icons:{
    icon:"/occazi.jpg"
  },
};

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left content */}
          <div className="text-center sm:text-left">
            <div className="mb-6">
              <span className="text-gray-500 font-light tracking-wide">
                occazi<span className="text-purple-400">*</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Discover &<br />
              create amazing
              <br />
              <span className="bg-linear-to-b from-white via-violet-200 to-violet-500 bg-clip-text text-transparent">
                events.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light">
              Whether you&apos;re hosting or attending, Occazi makes every event
              memorable. Join our community today.
            </p>

            <Link href="/explore">
              <Button size="xl" className={"rounded-full"}>
                Get Started
              </Button>
            </Link>
          </div>

          {/* Right - 3D Phone Mockup */}
          {/* Right - Premium Vignette Asset */}
          <div className="relative flex justify-center items-center group">
  {/* Pulsing background glow to mimic festival lighting */}
  <div className="absolute -z-10 w-[600px] h-[600px] bg-violet-600/15 blur-[140px] rounded-full animate-pulse duration-[4000ms]" />
  
  {/* The Festival Prism Container */}
  <div className="relative p-12 md:p-16 rounded-[3rem] border border-white/[0.08] bg-white/[0.01] backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-700 hover:border-violet-500/30">
    
    {/* Floating "Technical" Grid lines within the card to represent NIAMT's tech spirit */}
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

    {/* Top Rim Highlight (Amethyst) */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

    <div className="flex flex-col items-center relative z-10">
      {/* Fest Category Tag */}
      <span className="mb-4 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-[10px] uppercase tracking-[0.3em] text-violet-300 font-bold">
        Cultural & Technical Fest
      </span>

      {/* Main Fest Title */}
      <h2 className="text-5xl md:text-7xl font-black tracking-[0.15em] uppercase text-center
                     bg-linear-to-b from-white via-zinc-100 to-violet-500 bg-clip-text text-transparent drop-shadow-2xl">
        JINKS<br/>PRANAV
      </h2>
      
      {/* Decorative Divider */}
      <div className="flex items-center gap-4 mt-8 w-full">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
      </div>
      
      {/* Host Branding */}
      <p className="mt-8 text-[11px] tracking-[0.4em] text-zinc-400 uppercase font-medium text-center">
         <span className="text-white">NIAMT Ranchi</span>
      </p>
      <p className="mt-8 text-[11px] tracking-[0.4em] text-zinc-400 uppercase font-medium text-center">
        Hosted Exclusively on <span className="text-white">Occazi</span>
      </p>

      {/* NIAMT Branding */}
      
    </div>

    {/* Bottom Corner "Glow" for extra depth */}
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-violet-600/20 blur-3xl rounded-full" />
  </div>
            

            
          </div>
        </div>
      </section>
    </div>
  );
}