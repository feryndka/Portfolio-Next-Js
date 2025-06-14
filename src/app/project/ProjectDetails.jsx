import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; // <- Import ReactDOM
import styled from "styled-components";
import { CloseRounded } from "@mui/icons-material";
import { motion } from "framer-motion";

// --- Styled Components ---
const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 9999;
  overflow-y: scroll;
  padding: 80px 16px;
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  background-color: #171721;
  color: #f2f3f4;
  border-radius: 16px;
  border: 1px solid rgba(110, 231, 183, 0.3);
  padding: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: #f2f3f4;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(110, 231, 183, 0.2);
    transform: rotate(90deg);
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  border: none;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`;

const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #b1b2b3;
  margin-top: 4px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 12px 0;
  gap: 8px;
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #6ee7b7;
  background-color: rgba(110, 231, 183, 0.1);
  padding: 6px 12px;
  border-radius: 8px;
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #d1d5db;
  line-height: 1.6;
  margin: 16px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 24px 0 8px 0;
  gap: 16px;
`;

const Button = styled.a`
  width: 100%;
  max-width: 200px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  ${({ primary }) =>
    primary &&
    `
    background: linear-gradient(to right, #6EE7B7, #3B82F6);
    color: #0B1120;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(110, 231, 183, 0.4);
    }
  `}

  ${({ dull }) =>
    dull &&
    `
    border: 1.5px solid #6EE7B7;
    color: #6EE7B7;
    &:hover {
      background-color: rgba(110, 231, 183, 0.1);
    }
  `}
`;

// --- Komponen React (dengan Portal) ---

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const [isBrowser, setIsBrowser] = useState(false);

  // Pastikan kode hanya berjalan di sisi client (browser)
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <Container
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={() => setOpenModal({ state: false, project: null })}
    >
      <Wrapper
        variants={{
          hidden: { opacity: 0, y: -50, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 50, scale: 0.9 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton
          onClick={() => setOpenModal({ state: false, project: null })}
        >
          <CloseRounded />
        </CloseButton>
        {project?.isDemo ? (
          <VideoFrame
            src={project?.demoapp}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <Image alt={project?.title} src={project?.image} />
        )}
        <Title>{project?.title}</Title>
        <Date>{project.date}</Date>
        <Tags>
          {project?.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Desc>{project?.description}</Desc>
        <ButtonGroup>
          <Button dull href={project?.github} target="_blank">
            View Code
          </Button>
          {!project?.isDemo && project?.webapp && (
            <Button primary href={project?.webapp} target="_blank">
              View Live App
            </Button>
          )}
        </ButtonGroup>
      </Wrapper>
    </Container>
  );

  // Jika sudah di browser, buat Portal. Jika tidak (saat SSR), jangan render apa-apa.
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("portal-root") // Target elemen di HTML
    );
  } else {
    return null;
  }
};

export default ProjectDetails;
