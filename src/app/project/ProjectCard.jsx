import React from "react";
import styled from "styled-components";

// --- Styled Components ---

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: #334155; /* Fallback color */
  border-radius: 10px;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
`;

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: rgba(28, 28, 39, 0.7); /* Efek Kaca */
  backdrop-filter: blur(8px);
  border: 1px solid rgba(110, 231, 183, 0.2); /* Border Aksen Halus */
  cursor: pointer;
  border-radius: 16px; /* Sudut lebih lembut */
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    border-color: rgba(110, 231, 183, 0.7);
    box-shadow: 0 0 20px rgba(110, 231, 183, 0.2);
  }

  /* Efek zoom pada gambar saat card di-hover */
  &:hover ${Image} {
    transform: scale(1.05);
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #6ee7b7; /* Warna Teks Aksen Hijau */
  background-color: rgba(
    110,
    231,
    183,
    0.1
  ); /* Latar belakang tag yang serasi */
  padding: 4px 10px;
  border-radius: 8px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #f2f3f4; /* Warna putih yang lebih lembut */
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: #b1b2b3; /* Warna abu-abu yang serasi */
`;

const Description = styled.div`
  font-weight: 400;
  color: #b1b2b3;
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

// --- Komponen React ---

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image alt={project.title} src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
    </Card>
  );
};

export default ProjectCard;
