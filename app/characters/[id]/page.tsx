"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
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

export default function CharacterDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const character = characters.find((char) => char.id === id)

  const [notes, setNotes] = useState<CharacterNote[]>([])
  const [newNote, setNewNote] = useState("")

  useEffect(() => {
    // Load notes from localStorage
    const savedNotes = localStorage.getItem(`character-notes-${id}`)
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [id])

  const saveNotes = (updatedNotes: CharacterNote[]) => {
    localStorage.setItem(`character-notes-${id}`, JSON.stringify(updatedNotes))
    setNotes(updatedNotes)
  }

  const handleAddNote = () => {
    if (newNote.trim()) {
      const updatedNotes = [...notes, { id: Date.now().toString(), text: newNote, createdAt: new Date().toISOString() }]
      saveNotes(updatedNotes)
      setNewNote("")
    }
  }

  const handleDeleteNote = (noteId: string) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId)
    saveNotes(updatedNotes)
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => router.push("/")} sx={{ mb: 4 }}>
        Back to characters
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={character.image}
            alt={character.name}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
              mb: 2,
            }}
          />

          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Basic Info
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Typography variant="body1" gutterBottom>
              <strong>Village:</strong> {character.village}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Rank:</strong> {character.rank}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Status:</strong> {character.status}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: "primary.main",
              fontWeight: "bold",
            }}
          >
            {character.name}
          </Typography>

          <Box sx={{ mb: 4 }}>
            {character.tags.map((tag) => (
              <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1, backgroundColor: "secondary.main", color: "white" }} />
            ))}
          </Box>

          <Typography variant="body1" paragraph>
            {character.description}
          </Typography>

          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Abilities
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {character.abilities.map((ability, index) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <ListItemText
                    primary={ability.name}
                    secondary={ability.description}
                    primaryTypographyProps={{ fontWeight: "bold", color: "primary.main" }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

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
                  sx={{ mb: 1 }}
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
                        <IconButton edge="end" onClick={() => handleDeleteNote(note.id)}>
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
        </Grid>
      </Grid>
    </Container>
  )
}

