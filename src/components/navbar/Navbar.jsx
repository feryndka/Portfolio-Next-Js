"use client";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Skill", link: "#skill" },
  { name: "Project", link: "#project" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeLink, setActiveLink] = useState("#"); // State untuk melacak link/section aktif

  // --- Logika untuk mendeteksi scroll dan mengubah state aktif ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = pages.map((p) =>
        document.getElementById(p.link.substring(1))
      );
      const scrollPosition = window.scrollY + 150; // Offset agar aktif lebih cepat

      sections.forEach((section, index) => {
        if (section) {
          if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          ) {
            setActiveLink(pages[index].link);
          }
        }
      });
      if (window.scrollY < 100) {
        setActiveLink("#");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(10, 10, 10, 0.2)", // Latar belakang semi-transparan
        backdropFilter: "blur(10px)", // Efek Kaca
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* --- LOGO DESKTOP --- */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none",
              // --- TAMBAHKAN PROPERTI INI ---
              background: "linear-gradient(to right, #6EE7B7, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              // --------------------------------
            }}
          >
            PORTFOLIO
          </Typography>

          {/* --- MENU MOBILE --- */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu}>
              <MenuIcon color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              // Style untuk dropdown menu agar gelap
              PaperProps={{
                style: {
                  backgroundColor: "#1E293B",
                  color: "white",
                },
              }}
            >
              {pages.map((page) => {
                const isActive = activeLink === page.link;
                return (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    component="a"
                    href={page.link}
                    sx={{
                      // Style untuk item menu aktif di mobile
                      background: isActive
                        ? "linear-gradient(to right, #6EE7B7, #3B82F6)"
                        : "transparent",
                      color: isActive ? "#0B1120 !important" : "inherit",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1) !important",
                      },
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ fontWeight: isActive ? "bold" : "normal" }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* --- LOGO MOBILE --- */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              // flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none",
              background: "linear-gradient(to right, #6EE7B7, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              // --------------------------------
            }}
          >
            PORTFOLIO
          </Typography>

          {/* --- NAVIGASI DESKTOP --- */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {pages.map((page) => {
              const isActive = activeLink === page.link;
              return (
                <Button
                  key={page.name}
                  href={page.link}
                  sx={{
                    my: 2,
                    px: 2,
                    color: "white",
                    display: "block",
                    borderRadius: "8px",
                    fontWeight: isActive ? 700 : 400,
                    transition: "all 0.3s ease",
                    // Kondisi untuk style aktif
                    ...(isActive && {
                      background: "linear-gradient(to right, #6EE7B7, #3B82F6)",
                      color: "#0B1120",
                      boxShadow: "0 0 15px rgba(110, 231, 183, 0.4)",
                    }),
                    "&:hover": {
                      backgroundColor: isActive
                        ? ""
                        : "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {page.name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
