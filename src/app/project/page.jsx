import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";

const Project = () => {
  const products = [
    {
      title: "Admin Dashboard",
      link: "https://gomoonbeam.com",
      thumbnail:
        "/admin-dashboard.JPG",
    },
    {
      title: "Coffee Shop",
      link: "https://vaxery.vercel.app",
      thumbnail:
        "/coffee-shop.JPG",
    },
    {
      title: "Company Profile",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "Clone Youtube",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },

    {
      title: "Coffee Shop",
      link: "https://vaxery.vercel.app/",
      thumbnail:
        "/coffee-shop.JPG",
    },
    {
      title: "Company Profile",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
    {
      title: "Admin Dashboard",
      link: "https://algochurn.com",
      thumbnail:
        "/admin-dashboard.JPG",
    },
    {
      title: "Clone Youtube",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
  ];

  return (
    <div id="project">
      <HeroParallax products={products} />
    </div>
  )
}

export default Project;
