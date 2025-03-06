"use client"

import type React from "react"

import { useState } from "react"
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
} from "@mui/material"
import { useRouter } from "next/navigation"
import { characters } from "@/data/characters"
import type { CharacterNote } from "@/types"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

export default function AddNotePage() {
  const [selectedCharacter, setSelectedCharacter] = useState("")
  const [noteText, setNoteText] = useState("")
  const [error, setError] = useState("")
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate inputs
    if (!selectedCharacter) {
      setError("Please select a character")
      return
    }

    if (!noteText.trim()) {
      setError("Please enter a note")
      return
    }

    // Create new note
    const newNote: CharacterNote = {
      id: Date.now().toString(),
      text: noteText,
      createdAt: new Date().toISOString(),
    }

    // Get existing notes for this character
    const savedNotes = localStorage.getItem(`character-notes-${selectedCharacter}`)
    let notes: CharacterNote[] = []

    if (savedNotes) {
      notes = JSON.parse(savedNotes)
    }

    // Add new note
    notes.push(newNote)

    // Save back to localStorage
    localStorage.setItem(`character-notes-${selectedCharacter}`, JSON.stringify(notes))

    // Show success message
    setSnackbarOpen(true)

    // Reset form
    setSelectedCharacter("")
    setNoteText("")
    setError("")

    // Redirect after a short delay
    setTimeout(() => {
      router.push("/note")
    }, 1500)
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => router.push("/note")} sx={{ mb: 4 }}>
        Back to Notes
      </Button>

      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          color: "primary.main",
          fontWeight: "bold",
        }}
      >
        Add New Note
      </Typography>

      <Paper sx={{ p: 4, mt: 4 }}>
    
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="character-select-label">Select Character</InputLabel>
            <Select
              labelId="character-select-label"
              value={selectedCharacter}
              label="Select Character"
              onChange={(e) => setSelectedCharacter(e.target.value)}
            >
              {characters.map((character) => (
                <MenuItem key={character.id} value={character.id}>
                  {character.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            multiline
            rows={6}
            label="Your Note"
            placeholder="Write your thoughts about this character..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Save Note
          </Button>
        </form>
      </Paper>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          Note added successfully! Redirecting...
        </Alert>
      </Snackbar>
    </Container>
  )
}

