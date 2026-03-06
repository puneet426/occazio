
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Footer from "@/components/footer";



export const metadata = {
  title : "Occazi – AI-Powered Full-Stack Event Management Platform",
  description : "Occazi is a AI-powered event management platform that simplifies the complete lifecycle of an event — from intelligent creation to real-time attendee management and analytics.",
  author:[{name:"Puneet Tiwari"}],
  keywords:["occazi", "occazio","event management", "codeforge", "niamt","codeforgeniamt","puneet","puneet tiwari"],
  icons:{
    icon:"/occazi.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
     <body className="bg-[#030303] text-zinc-200 antialiased selection:bg-blue-500/30">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClerkProvider appearance={{ theme: dark }}>
            <ConvexClientProvider>
              
              {/* Premium Background Elements */}
<div className="fixed inset-0 -z-10 pointer-events-none">
  {/* The Grid Layer */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  
  {/* The Primary Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full opacity-60" />
</div>

              <Header />
              <main className="relative min-h-screen container mx-auto pt-36 md:pt-24 px-4 md:px-6">
                <div className="relative z-10 min-h-[70vh]">
                  {children}
                </div>
                <Footer />
              </main>

            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}