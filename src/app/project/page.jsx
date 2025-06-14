"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "@/components/utils/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import { motion, AnimatePresence } from "framer-motion";

// --- Styled Components ---

const Container = styled.div`
  background-color: #111111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 80px 16px;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  /* Green Gradient Text */
  background: linear-gradient(to right, #6ee7b7, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary || "#b1b2b3"};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid #3b82f6; /* Green Accent */
  background-color: #1c1c27;
  color: #3b82f6;
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease;

  ${({ active, theme }) =>
    active &&
    `
    background: linear-gradient(to right, #6EE7B7, #3B82F6);
    color: #0B1120;
  `}
`;

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Project = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="project">
      <Wrapper>
        <Title>My Projects</Title>
        <Desc>
          Here are some of the projects I&apos;ve worked on, from web
          applications to android applications.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APP
          </ToggleButton>
          <ToggleButton
            active={toggle === "android"}
            onClick={() => setToggle("android")}
          >
            ANDROID
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer layout transition={{ duration: 0.4, ease: "easeInOut" }}>
          <AnimatePresence>
            {projects
              .filter((item) => toggle === "all" || item.category === toggle)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <ProjectCard
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </CardContainer>

        <AnimatePresence>
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </AnimatePresence>
      </Wrapper>
    </Container>
  );
};

export default Project;
