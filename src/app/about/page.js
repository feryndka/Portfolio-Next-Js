"use client";
import "./style.css";
import { motion } from "framer-motion";

const About = () => {
  // Varian animasi untuk elemen dari kiri
  const fromLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  // Varian animasi untuk elemen dari kanan
  const fromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="about-section relative" id="about">
      <div className="container-content">
        {/* Kolom Kiri: Gambar */}
        <motion.div
          className="image-container"
          initial={fromLeft.initial}
          whileInView={fromLeft.animate}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="image-wrapper">
            <img
              src={"/profile.png"}
              alt="Fery Andika Profile"
              className="profile-image"
            />
          </div>
        </motion.div>

        {/* Kolom Kanan: Teks */}
        <motion.div
          className="text-container"
          initial={fromRight.initial}
          whileInView={fromRight.animate}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <h2 className="title">About Me.</h2>
          <div className="line-2"></div>
          <div className="paragraf">
            <p>
              A passionate IT student currently pursuing my degree. Technology
              has always fascinated me, and I find joy in exploring the vast
              world of Information Technology.
            </p>
            <p>
              I am currently study in{" "}
              <span className="highlight">Telkom University</span> where I am
              gaining a comprehensive understanding of various IT concepts,
              programming languages, and the latest advancements in the field.
              From developing software applications to understanding network
              architectures, my academic journey is equipping me with the
              knowledge and skills needed to thrive in the dynamic IT industry.
            </p>
            <p>
              I am particularly interested in{" "}
              <span className="highlight">web development</span>, and I am eager
              to contribute my skills to real-world projects. I believe in the
              power of technology to bring about positive change, and I am
              excited about the opportunities that lie ahead in the IT field.
            </p>
            <p>
              Feel free to connect with me if you share similar interests or if
              you like to discuss anything related to technology and IT. I am
              always open to new ideas and collaborations!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
