"use client";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "../utils/cn";
import Link from "next/link";

export const FloatingNav = ({ navItems, className }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "flex max-w-fit fixed top-3 md:top-5 inset-x-0 mx-auto border border-transparent rounded-full dark:bg-[#212121] bg-white shadow-[#e7e7e7_0px_0px_5px] z-[5000] px-8 py-2 items-center justify-center space-x-2",
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
            <button className={"text-sm font-medium relative dark:text-white px-4 py-2 dark:hover:text-neutral-300 hover:text-neutral-500"}>
              <span className="sm:block text-sm">{navItem.name}</span>
            </button>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
