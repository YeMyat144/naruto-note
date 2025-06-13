"use client"

import { useState, useEffect } from "react"
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  InputAdornment,
  List,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Card,
  CardContent,
  Button,
  Alert,
  Snackbar,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import SearchIcon from "@mui/icons-material/Search"
import AddIcon from "@mui/icons-material/Add"
import { characters } from "@/data/characters"
import type { CharacterNote } from "@/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getAllNotes, deleteNote } from "@/lib/firebase"

interface NoteWithCharacter extends CharacterNote {
  characterId: string
  characterName: string
}

export default function NotesPage() {
  const [allNotes, setAllNotes] = useState<NoteWithCharacter[]>([])
  const [filteredNotes, setFilteredNotes] = useState<NoteWithCharacter[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCharacter, setSelectedCharacter] = useState<string>("all")
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const notes = await getAllNotes()
        const notesWithCharacter: NoteWithCharacter[] = notes.map((note: any) => {
          const character = characters.find((char) => char.id === note.characterId)
          return {
            ...note,
            characterName: character?.name || "Unknown Character",
          }
        })

        // Sort notes by creation date (newest first)
        notesWithCharacter.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

        setAllNotes(notesWithCharacter)
        setFilteredNotes(notesWithCharacter)
      } catch (error) {
        console.error("Error loading notes:", error)
      }
    }

    loadNotes()
  }, [])

  useEffect(() => {
    let notes = [...allNotes]

    // Filter by character if selected
    if (selectedCharacter !== "all") {
      notes = notes.filter((note) => note.characterId === selectedCharacter)
    }

    // Filter by search term
    if (searchTerm) {
      notes = notes.filter(
        (note) =>
          note.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.characterName.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredNotes(notes)
  }, [searchTerm, selectedCharacter, allNotes])

  const handleDeleteNote = async (characterId: string, noteId: string) => {
    try {
      await deleteNote(noteId)
      // Update state
      const updatedAllNotes = allNotes.filter((note) => !(note.characterId === characterId && note.id === noteId))
      setAllNotes(updatedAllNotes)
      setSnackbarOpen(true)
    } catch (error) {
      console.error("Error deleting note:", error)
    }
  }

  const handleViewCharacter = (characterId: string) => {
    router.push(`/characters/${characterId}`)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h6"
          gutterBottom
          sx={{
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          Insights about the character from your perspective
        </Typography>

        <Button
          variant="contained"
          component={Link}
          href="/add-note"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            mt: 2,
          }}
        >
          Add New Note
        </Button>
      </Box>

      {/* Replaced Grid with CSS Grid */}
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 2,
        mb: 4
      }}>
        <Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="character-filter-label">Filter by Character</InputLabel>
            <Select
              labelId="character-filter-label"
              value={selectedCharacter}
              label="Filter by Character"
              onChange={(e) => setSelectedCharacter(e.target.value)}
            >
              <MenuItem value="all">All Characters</MenuItem>
              {characters.map((character) => (
                <MenuItem key={character.id} value={character.id}>
                  {character.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      {filteredNotes.length > 0 ? (
        <List>
          {filteredNotes.map((note) => (
            <Card key={note.id} sx={{ mb: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                  <Typography
                    variant="h6"
                    component={Link}
                    href={`/characters/${note.characterId}`}
                    sx={{
                      color: "primary.main",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {note.characterName}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(note.createdAt).toLocaleString()}
                  </Typography>
                </Box>

                <Typography variant="body1" paragraph>
                  {note.text}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                  <Button size="small" variant="outlined" onClick={() => handleViewCharacter(note.characterId)}>
                    View Character
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteNote(note.characterId, note.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </List>
      ) : (
        <Paper sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            No notes found
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {allNotes.length === 0
              ? "You haven't added any notes yet. Visit a character page to add notes."
              : "No notes match your current filters. Try adjusting your search or filter."}
          </Typography>
          <Button
            variant="contained"
            component={Link}
            href="/"
            sx={{
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Browse Characters
          </Button>
        </Paper>
      )}

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          Note deleted successfully!
        </Alert>
      </Snackbar>
    </Container>
  )
}