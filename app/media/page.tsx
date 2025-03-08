"use client"

import type React from "react"

import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Link as MuiLink,
  Alert,
} from "@mui/material"
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"
import MovieIcon from "@mui/icons-material/Movie";  
import TheatersIcon from '@mui/icons-material/Theaters'; 
import { narutoMovies } from "@/data/movies"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`soundtrack-tabpanel-${index}`}
      aria-labelledby={`soundtrack-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default function SoundtrackPage() {
  const [tabValue, setTabValue] = useState(0)
  const [spotifyError, setSpotifyError] = useState(false)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 1 }}>

        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            "& .MuiTab-root": {
              fontWeight: "bold",
            },
          }}
        >
          <Tab icon={<LibraryMusicIcon />}  />
          <Tab icon={<TheatersIcon />}  />
          <Tab icon={<MovieIcon />} />
        </Tabs>

        <TabPanel value={tabValue} index={0}>

          {spotifyError ? (
            <Alert severity="warning" sx={{ mb: 3 }}>
              The Spotify embed couldn't be loaded. You can{" "}
              <MuiLink
                href="https://open.spotify.com/playlist/36v68OiLl6Qlo9PEconeHk"
                target="_blank"
                rel="noopener noreferrer"
              >
                open the playlist directly on Spotify
              </MuiLink>{" "}
              instead.
            </Alert>
          ) : null}

          <Box
            sx={{
              width: "100%",
              height: 500,
              mb: 4,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/36v68OiLl6Qlo9PEconeHk?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              onError={() => setSpotifyError(true)}
            ></iframe>
          </Box>

          <Typography variant="body2" color="text.secondary">
            Note: You need a Spotify account to play full tracks. Without an account, you can listen to 30-second
            previews. All Naruto music is owned by TV Tokyo, Pierrot Co., Ltd., and their respective composers. This page is for
          informational purposes only and does not claim ownership of any music. Spotify playlists are created by fans
          and may be subject to change.
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={4}>
            {narutoMovies.movies.map((movie) => (
              <Grid item key={movie.id} xs={12} md={6}>
                <Card sx={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 1  }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 250 }}
                    image={movie.image}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {movie.releaseDate} • {movie.runtime}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {movie.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={4}>
            {narutoMovies.shortFilms.map((movie) => (
              <Grid item key={movie.id} xs={12} md={6}>
                <Card sx={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 1 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {movie.releaseDate} • {movie.runtime}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {movie.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>


    </Container>
  )
}

