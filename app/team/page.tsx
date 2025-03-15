"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Container, Typography, Box, Paper } from "@mui/material"
import { teamImages } from "@/data/team-images"

export default function TeamPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Container maxWidth="xl" sx={{ p: 0, overflow: "hidden" }}>
      <Box className="banner">
        <div className="slider" style={{ "--quantity": teamImages.length } as React.CSSProperties}>
          {teamImages.map((image, index) => (
            <div key={index} className="item" style={{ "--position": index + 1 } as React.CSSProperties}>
              <img src={image.src || "/madara.png"} alt={image.alt} />
            </div>
          ))}
        </div>
        <Box className="content">
          <Typography
            variant="h1"
            component="h1"
            data-content="Akatsuki"
            sx={{
              fontFamily: "'ICA Rubrik', Arial, sans-serif",
              fontSize: { xs: "3em", sm: "5em", md: "7em", lg: "10em" },
              lineHeight: "1em",
              color: "black",
              position: "relative",
              textAlign: "center",
              width: "100%",
              mb: 4,
              textShadow: "0 5px 10px rgba(0,0,0,0.3)",
              "&::after": {
                position: "absolute",
                inset: "0 0 0 0",
                content: "attr(data-content)",
                zIndex: 2,
                WebkitTextStroke: "2px #FF0000",
                color: "transparent",
              },
            }}
          >
            Akatsuki
          </Typography>
          <Paper
            sx={{
              p: 4,
              maxWidth: "800px",
              mx: "auto",
              backgroundColor: "black",
              borderRadius: 2,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              mb: 6,
            }}
          >
            <Typography variant="body1" sx={{color: '#950606'}} paragraph>
            現実に目を覚ましてください この世で計画通りに事が進むことは決してありません 長く生きれば生きるほど この現実には痛みと苦しみと無益さしか存在しないことに気づきます
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Styled JSX for the 3D carousel */}
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/ica-rubrik-black');
        @import url('https://fonts.cdnfonts.com/css/poppins');

        body {
          background-color: #000;
          background-image: repeating-linear-gradient(to right, transparent 0 100px, #ff800022 100px 101px),
            repeating-linear-gradient(to bottom, transparent 0 100px, #ff800022 100px 101px);
        }

        body::before {
          position: absolute;
          width: min(1400px, 90vw);
          top: 10%;
          left: 50%;
          height: 90%;
          transform: translateX(-50%);
          content: '';
          background-image: url('https://preview.redd.it/what-makes-madara-uchiha-such-a-good-character-when-it-v0-316dlixm4tgc1.jpeg?auto=webp&s=b7df787f155166613508760fc26ed8544a4c35aa');
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: top center;
          pointer-events: none;
          opacity: 0.2;
          z-index: -1;
        }

        .banner {
          width: 100%;
          min-height: calc(100vh - 64px);
          text-align: center;
          overflow: hidden;
          position: relative;
          padding: 2rem 0;
        }

        .banner .slider {
          position: relative;
          width: 200px;
          height: 250px;
          margin: 100px auto;
          transform-style: preserve-3d;
          transform: perspective(1000px);
          animation: autoRun 20s linear infinite;
          z-index: 2;
        }

        @keyframes autoRun {
          from {
            transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
          }
        }

        .banner .slider .item {
          position: absolute;
          inset: 0 0 0 0;
          transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px);
          transition: all 0.3s ease;
        }

        .banner .slider .item:hover {
          transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(600px) scale(1.1);
        }

        .banner .slider .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .banner .content {
          position: relative;
          width: min(1400px, 100vw);
          height: max-content;
          padding: 0 20px;
          margin: 0 auto;
          z-index: 1;
        }

        @media screen and (max-width: 1023px) {
          .banner .slider {
            width: 160px;
            height: 200px;
            margin: 50px auto;
          }
          .banner .slider .item {
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(300px);
          }
          .banner .slider .item:hover {
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(350px) scale(1.1);
          }
        }

        @media screen and (max-width: 767px) {
          .banner .slider {
            width: 100px;
            height: 150px;
            margin: 30px auto;
          }
          .banner .slider .item {
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(180px);
          }
          .banner .slider .item:hover {
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(200px) scale(1.1);
          }
        }
      `}</style>
    </Container>
  )
}

