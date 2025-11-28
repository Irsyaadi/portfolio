
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center p-10">
      <motion.h1 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        transition={{duration:0.5}}
        className="text-4xl font-bold"
      >
        Irsyaad Izzuddin Portfolio
      </motion.h1>
      <p className="mt-4 text-slate-300 text-center max-w-xl">
        This is a clean minimal version to ensure GitHub Pages builds successfully.
        After this is deployed and working, we can add full UI, animations, projects, etc.
      </p>
    </main>
  );
}
