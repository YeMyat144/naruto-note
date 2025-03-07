"use client"

import type React from "react"

import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  Link as MuiLink,
  Alert,
} from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"
import { narutoSoundtracks } from "@/data/soundtracks"

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
    <Container maxWidth="lg" sx={{ py: 6 }}>


      <Paper sx={{ mb: 6 }}>
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
          <Tab icon={<PlayArrowIcon />} label="Spotify Playlist" />
          <Tab icon={<LibraryMusicIcon />} label="Composers" />
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
            previews.
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
            The Composers Behind Naruto
          </Typography>

          <Grid container spacing={4}>
            {narutoSoundtracks.composers.map((composer) => (
              <Grid item key={composer.id} xs={12} md={6}>
                <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <Box sx={{ display: "flex", p: 2 }}>
                    <Avatar
                      src={composer.image}
                      alt={composer.name}
                      sx={{ width: 80, height: 80, mr: 2, border: "1px solid", borderColor: "divider" }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {composer.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {composer.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" paragraph>
                      {composer.bio}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Notable Works:
                    </Typography>
                    <List dense>
                      {composer.notableWorks.map((work, index) => (
                        <ListItem key={index} disablePadding>
                          <ListItemText primary={`• ${work}`} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Paper>

      <Paper sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Music Rights Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          All Naruto music is owned by TV Tokyo, Pierrot Co., Ltd., and their respective composers. This page is for
          informational purposes only and does not claim ownership of any music. Spotify playlists are created by fans
          and may be subject to change.
        </Typography>
      </Paper>
    </Container>
  )
}

