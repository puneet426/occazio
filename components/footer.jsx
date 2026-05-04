// import { Instagram, Linkedin, Mail, Twitter} from "lucide-react";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//       <div className="flex items-center gap-6 text-sm text-gray-400">
//        Made by Puneet Tiwari
//       </div>

//       <div className="flex gap-4 items-center">
//         <a
//           href="https://www.linkedin.com/in/puneet-tiwari-0075952a6/"
//           className="text-gray-400"
//         >
//           <Linkedin />
//         </a>
//         <a
//           href="https://www.instagram.com/puneettiwari368?igsh=MXFkbGI5cG8wNHdvNA=="
//           className="text-gray-400"
//         >
//           <Instagram className="w-5 h-5" />
//         </a>
//         <a href="https://x.com/Puneet626" className="text-gray-400">
//           <Twitter className="w-5 h-5" />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import Link from "next/link"; // Added for the Terms & Conditions link

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Left: Author & Legal */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-gray-400">
        <span>Made by Anurag Kumar & Amrit Singh</span>
        <span className="hidden md:inline">|</span>
        <Link href="/terms" className="hover:text-white transition-colors">
          Terms & Conditions
        </Link>
      </div>

      {/* Center: Contact Info */}
      <a 
        href="mailto:occazi@gmail.com" 
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <Mail className="w-4 h-4" />
        Contact us at : occazi@gmail.com
      </a>

      {/* Right: Socials */}
      <div className="flex gap-4 items-center">
        <a
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="/" 
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
      
    </footer>
  );
};

export default Footer;
