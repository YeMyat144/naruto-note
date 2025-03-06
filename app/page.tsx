"use client"

import { useState } from "react"
import { Container, Typography, Grid, Box, TextField, InputAdornment } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import CharacterCard from "@/components/character-card"
import { characters } from "@/data/characters"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main>
      <Box
        sx={{
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/placeholder.svg?height=500&width=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
         
          <Box sx={{ maxWidth: 600, mx: "auto" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search characters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "rgba(0,0,0,0.6)",
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "orange",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "orange",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255,255,255,0.7)",
                  },
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {filteredCharacters.map((character) => (
            <Grid item key={character.id} xs={12} sm={6} md={4}>
              <CharacterCard character={character} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}

