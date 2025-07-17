"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./SkillCard";

import frontend_data from "@/components/utils/frontend-data.json";
import backend_data from "@/components/utils/backend-data.json";

import { calculateExperience } from "@/components/utils/experienceCalculator";

export default function Skill() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Frontend" },
    { id: 2, label: "Backend" },
  ];

  const data = activeTab === 1 ? frontend_data : backend_data;

  return (
    <section className="min-h-screen bg-[#111111] text-white" id="skill">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col items-center">
        {/* Judul Section */}
        <h2 className="title text-4xl md:text-5xl font-bold font-mono mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
          My Tech Stack
        </h2>
        <p className="text-slate-400 mb-12 text-center">
          Technology that I use to build web applications.
        </p>

        {/* Tombol Tab */}
        <div className="flex border border-emerald-400 mb-12 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "text-[#0B1120] font-bold"
                  : "text-emerald-400"
              } relative rounded-md py-2.5 px-4 text-sm font-medium transition-colors duration-300 focus-visible:outline-2`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500"
                  style={{ borderRadius: 8 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Konten Skill dengan Animasi */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 w-full lg:w-4/5"
          >
            {data.map((item, index) => (
              <SkillCard
                key={index}
                index={index}
                src={item.src}
                title={item.title}
                level={item.level}
                experience={calculateExperience(item.startDate)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
