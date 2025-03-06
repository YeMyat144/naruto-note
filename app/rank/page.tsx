"use client"

import type React from "react"

import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Divider,
  List,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Rating,
  LinearProgress,
} from "@mui/material"
import { characters } from "@/data/characters"
import { rankingData } from "@/data/rankings"
import Link from "next/link"

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
      id={`rank-tabpanel-${index}`}
      aria-labelledby={`rank-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default function RankPage() {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 1 }}>
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
          <Tab label="Power Tiers" />
          <Tab label="Battle Matchups" />
          <Tab label="Strongest Abilities" />
          <Tab label="Power Stats" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
            Character Power Tiers
          </Typography>
          <Typography variant="body1" paragraph>
            Characters are ranked based on their overall power, battle experience, and unique abilities. These rankings
            consider canon facts from the Naruto series.
          </Typography>

          {rankingData.tiers.map((tier) => (
            <Box key={tier.name} sx={{ mb: 4 }}>
              <Box
                sx={{
                  backgroundColor: tier.color,
                  p: 2,
                  borderRadius: "8px 8px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                  {tier.name} - {tier.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  border: `2px solid ${tier.color}`,
                  borderTop: 0,
                  borderRadius: "0 0 8px 8px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {tier.characters.map((charId) => {
                  const character = characters.find((c) => c.id === charId)
                  if (!character) return null

                  return (
                    <Box
                      key={charId}
                      component={Link}
                      href={`/characters/${charId}`}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        p: 1,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1,
                        textDecoration: "none",
                        color: "text.primary",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Avatar src={character.image} alt={character.name} sx={{ width: 40, height: 40 }} />
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {character.name}
                      </Typography>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          ))}
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
            Battle Matchups
          </Typography>
          <Typography variant="body1" paragraph>
            Analysis of who would win in direct combat based on their abilities, fighting style, and canonical evidence.
          </Typography>

          <TableContainer component={Paper} sx={{ mb: 4 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "primary.main" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Matchup</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Winner</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Difficulty</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Reasoning</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rankingData.matchups.map((matchup, index) => (
                  <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "action.hover" } }}>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant="body2" component="span" sx={{ fontWeight: "medium" }}>
                          {matchup.fighter1}
                        </Typography>
                        <Typography variant="body2" component="span">
                          vs
                        </Typography>
                        <Typography variant="body2" component="span" sx={{ fontWeight: "medium" }}>
                          {matchup.fighter2}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>{matchup.winner}</TableCell>
                    <TableCell>
                      <Chip
                        label={matchup.difficulty}
                        size="small"
                        sx={{
                          backgroundColor:
                            matchup.difficulty === "Easy"
                              ? "success.light"
                              : matchup.difficulty === "Medium"
                                ? "warning.light"
                                : "error.light",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      />
                    </TableCell>
                    <TableCell>{matchup.reasoning}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
            Strongest Abilities
          </Typography>
          <Typography variant="body1" paragraph>
            The most powerful jutsu and techniques in the Naruto universe, ranked by their destructive power, utility,
            and effectiveness.
          </Typography>

          <List>
            {rankingData.abilities.map((ability, index) => (
              <Paper key={index} sx={{ mb: 3, overflow: "hidden" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "stretch",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "30%" },
                      backgroundColor: "primary.main",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                      #{index + 1}: {ability.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white", mt: 1 }}>
                      User: {ability.user}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="caption" sx={{ color: "white" }}>
                        Power Rating
                      </Typography>
                      <Rating
                        value={ability.powerRating}
                        readOnly
                        max={5}
                        sx={{
                          mt: 0.5,
                          "& .MuiRating-iconFilled": {
                            color: "white",
                          },
                          "& .MuiRating-iconEmpty": {
                            color: "rgba(255, 255, 255, 0.3)",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ p: 3, width: { xs: "100%", sm: "70%" } }}>
                    <Typography variant="body1" paragraph>
                      {ability.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Type:</strong> {ability.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Weaknesses:</strong> {ability.weaknesses}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
            Character Power Stats
          </Typography>
          <Typography variant="body1" paragraph>
            Detailed breakdown of each character's abilities across different categories.
          </Typography>

          <Grid container spacing={4}>
            {rankingData.stats.map((stat) => {
              const character = characters.find((c) => c.id === stat.characterId)
              if (!character) return null

              return (
                <Grid item xs={12} md={6} key={stat.characterId}>
                  <Card
                    sx={{
                      height: "100%",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                      <Avatar src={character.image} alt={character.name} sx={{ width: 60, height: 60, mr: 2 }} />
                      <Box>
                        <Typography
                          variant="h6"
                          component={Link}
                          href={`/characters/${character.id}`}
                          sx={{
                            color: "primary.main",
                            textDecoration: "none",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {character.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {character.rank} • {character.village}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider />
                    <CardContent>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                          <Typography variant="body2">Ninjutsu</Typography>
                          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            {stat.ninjutsu}/10
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={stat.ninjutsu * 10}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "rgba(255, 128, 0, 0.2)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "primary.main",
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                          <Typography variant="body2">Taijutsu</Typography>
                          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            {stat.taijutsu}/10
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={stat.taijutsu * 10}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "rgba(255, 128, 0, 0.2)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "primary.main",
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                          <Typography variant="body2">Genjutsu</Typography>
                          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            {stat.genjutsu}/10
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={stat.genjutsu * 10}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "rgba(255, 128, 0, 0.2)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "primary.main",
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                          <Typography variant="body2">Intelligence</Typography>
                          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            {stat.intelligence}/10
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={stat.intelligence * 10}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "rgba(255, 128, 0, 0.2)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "primary.main",
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                          <Typography variant="body2">Strength</Typography>
                          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            {stat.strength}/10
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={stat.strength * 10}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "rgba(255, 128, 0, 0.2)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "primary.main",
                            },
                          }}
                        />
                      </Box>

                      <Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                          <Typography variant="body2">Speed</Typography>
                          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            {stat.speed}/10
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={stat.speed * 10}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "rgba(255, 128, 0, 0.2)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "primary.main",
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid", borderColor: "divider" }}>
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          Special Abilities:
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                          {stat.specialAbilities.map((ability, index) => (
                            <Chip
                              key={index}
                              label={ability}
                              size="small"
                              sx={{ backgroundColor: "secondary.main", color: "white" }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </TabPanel>
      </Paper>

      <Paper sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Disclaimer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          These rankings are based on my philosophical beliefs and personal opinions. They are not official and are
          meant for entertainment purposes only.
        </Typography>
      </Paper>
    </Container>
  )
}

