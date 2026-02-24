"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center justify-center px-6">

      {/* Background Layers (same as above) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:40px_40px] opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Soft Moving Light Streaks */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  
  {/* Horizontal streak */}
  <div className="absolute top-1/3 -left-1/2 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-streak" />
  {/* Second streak */}
  </div>


{/* Floating Blurred Vehicle Silhouettes */}
  <div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-20 left-20 w-40 h-20 bg-blue-500/10 rounded-full blur-2xl animate-float" />
  <div className="absolute bottom-32 right-24 w-52 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-float-slow" />

</div>
        <h1 className="text-5xl font-bold mb-6">
          RentMy<span className="text-blue-500">Ride</span>
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          Drive Freedom. Rent Smart.
        </p>

        <div className="flex flex-col items-center gap-3 mt-6">
          <Link
            href="/login"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Already have an account? Login
          </Link>

          <Link
            href="/signup"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Create new account? Sign up
          </Link>
        </div>
      </motion.div>
    </main>
  );
}