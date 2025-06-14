import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ src, title, level, experience, index }) => {
  // Mapping level ke persentase untuk progress bar
  const levelPercentage = {
    Beginner: 30,
    Intermediate: 65,
    Advanced: 90,
  };

  const percentage = levelPercentage[level] || 0;

  // Palet warna untuk progress bar berdasarkan level
  const levelColor = {
    Beginner: "bg-yellow-500",
    Intermediate: "bg-emerald-500",
    Advanced: "bg-green-500",
  };

  const color = levelColor[level] || "bg-gray-500";

  // Varian animasi untuk stagger effect
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // Setiap kartu muncul dengan jeda 0.1s
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-gray-500/10 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      {/* Bagian Atas: Logo dan Judul */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-md bg-gray-700/50 flex items-center justify-center p-2">
          <Image
            height={48}
            width={48}
            alt={`${title} logo`}
            className="object-contain w-12 h-12"
            src={src}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg font-bold">{title}</h2>
          <p className="text-slate-400 text-sm">{experience} Experience</p>
        </div>
      </div>

      {/* Bagian Bawah: Level dan Progress Bar */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-slate-300 text-sm font-medium">{level}</h3>
          <span className="text-xs font-mono text-emerald-400">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-700/50 rounded-full h-2.5">
          <motion.div
            className={`h-2.5 rounded-full ${color}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{
              duration: 1,
              delay: 0.5 + index * 0.1,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
