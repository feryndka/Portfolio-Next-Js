"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({ navItems, className }) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "flex max-w-fit fixed top-3 md:top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#0e0e0e] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2 items-center justify-center space-x-2",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600"
            )}
          >
            <button
              className={`${
                pathname === navItem.link
                  ? "border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] dark:text-white px-4 py-2 rounded-full"
                  : "text-sm font-medium relative dark:text-white px-4 py-2 dark:hover:text-neutral-300 hover:text-neutral-500"
              }`}
            >
              <span className="sm:block text-sm">{navItem.name}</span>
              <span
                className={`${
                  pathname === navItem.link
                    ? "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent h-px"
                    : null
                }`}
              />
            </button>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
