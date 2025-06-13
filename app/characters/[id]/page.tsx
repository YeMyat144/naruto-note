"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  Divider,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Card,
  CardContent,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { characters } from "@/data/characters"
import type { CharacterNote } from "@/types"
import { getNotesByCharacter, addNote, deleteNote } from "@/lib/firebase"

export default function CharacterDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const character = characters.find((char) => char.id === id)

  const [notes, setNotes] = useState<CharacterNote[]>([])
  const [newNote, setNewNote] = useState("")

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const characterNotes = await getNotesByCharacter(id)
        setNotes(
          characterNotes.map((note: any) => ({
            id: note.id,
            text: note.text ?? "",
            createdAt: note.createdAt ?? new Date().toISOString(),
          }))
        )
      } catch (error) {
        console.error("Error loading notes:", error)
      }
    }

    loadNotes()
  }, [id])

  const handleAddNote = async () => {
    if (newNote.trim()) {
      try {
        const newNoteData = {
          text: newNote,
          createdAt: new Date().toISOString(),
        }
        const addedNote = await addNote(id, newNoteData)
        setNotes([...notes, addedNote])
        setNewNote("")
      } catch (error) {
        console.error("Error adding note:", error)
      }
    }
  }

  const handleDeleteNote = async (noteId: string) => {
    try {
      await deleteNote(noteId)
      setNotes(notes.filter((note) => note.id !== noteId))
    } catch (error) {
      console.error("Error deleting note:", error)
    }
  }

  if (!character) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4">Character not found</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push("/")} sx={{ mt: 2 }}>
          Back to characters
        </Button>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => router.push("/")} sx={{ mb: 4 }}>
        Back to characters
      </Button>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ width: { xs: '100%', md: '33%' }, borderRadius: 23 }}>
            <Box
              component="img"
              src={character.image}
              alt={character.name}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                mb: 2,
              }}
            />
            <Typography variant="h4" gutterBottom>
              {character.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph align="left" sx={{ mb: 3, mt: 3 }}>
              {character.description}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
              {character.tags.map((tag) => (
                <Chip key={tag} label={tag} color="primary" variant="outlined" />
              ))}
            </Box>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '67%' } }}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Your Notes
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Add your thoughts about this character..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  onClick={handleAddNote}
                  sx={{
                    backgroundColor: "primary.main",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Add Note
                </Button>
              </Box>

              {notes.length > 0 ? (
                <List>
                  {notes.map((note) => (
                    <ListItem
                      key={note.id}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          onClick={() => handleDeleteNote(note.id)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                      sx={{
                        backgroundColor: "background.paper",
                        mb: 1,
                        borderRadius: 1,
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <ListItemText primary={note.text} secondary={new Date(note.createdAt).toLocaleString()} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No notes yet. Add your thoughts about this character!
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  )
}