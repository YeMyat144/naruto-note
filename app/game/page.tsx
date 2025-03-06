"use client"

import { useState, useEffect } from "react"
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import VolumeOffIcon from "@mui/icons-material/VolumeOff"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import ReplayIcon from "@mui/icons-material/Replay"
import NarutoJumpGame from "@/components/naruto-jump-game"

export default function GamePage() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [muted, setMuted] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [showHighScoreAlert, setShowHighScoreAlert] = useState(false)

  // Load high score from localStorage on component mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem("naruto-jump-high-score")
    if (savedHighScore) {
      setHighScore(Number.parseInt(savedHighScore))
    }
  }, [])

  const handleStartGame = () => {
    setGameStarted(true)
    setGameOver(false)
    setScore(0)
  }

  const handleGameOver = (finalScore: number) => {
    setGameOver(true)
    setScore(finalScore)

    // Check if this is a new high score
    if (finalScore > highScore) {
      setHighScore(finalScore)
      localStorage.setItem("naruto-jump-high-score", finalScore.toString())
      setShowHighScoreAlert(true)
    }
  }

  const toggleMute = () => {
    setMuted(!muted)
  }

  const toggleHelp = () => {
    setHelpOpen(!helpOpen)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton onClick={toggleMute} color="primary" aria-label={muted ? "unmute" : "mute"}>
            {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
          <IconButton onClick={toggleHelp} color="primary" aria-label="help">
            <HelpOutlineIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6">Score: {score}</Typography>
        <Typography variant="h6">High Score: {highScore}</Typography>
      </Box>

      <Paper
        sx={{
          width: "100%",
          height: "300px",
          overflow: "hidden",
          position: "relative",
          mb: 4,
          backgroundColor: "#333333",
          border: "2px solid",
          borderColor: "primary.main",
        }}
      >
        {!gameStarted && !gameOver ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Ready to run?
            </Typography>
            <Button
              variant="contained"
              onClick={handleStartGame}
              sx={{
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Start Game
            </Button>
          </Box>
        ) : gameOver ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Game Over!
            </Typography>
            <Typography variant="h6" gutterBottom>
              Your Score: {score}
            </Typography>
            <Button
              variant="contained"
              onClick={handleStartGame}
              startIcon={<ReplayIcon />}
              sx={{
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Play Again
            </Button>
          </Box>
        ) : (
          <NarutoJumpGame onGameOver={handleGameOver} muted={muted} />
        )}
      </Paper>

      <Dialog open={helpOpen} onClose={toggleHelp}>
        <DialogTitle>How to Play</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            <strong>Controls:</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            • Press SPACEBAR to jump (on desktop)
          </Typography>
          <Typography variant="body2" paragraph>
            • Tap the screen to jump (on mobile)
          </Typography>
          <Typography variant="body2" paragraph>
            • Press P to pause the game
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>Objective:</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            Help Naruto run through the forest by jumping over obstacles. The game gets faster as your score increases.
            Try to beat your high score!
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>Tips:</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            • Time your jumps carefully
          </Typography>
          <Typography variant="body2" paragraph>
            • Some obstacles are taller than others and require precise timing
          </Typography>
          <Typography variant="body2">• The game speeds up gradually, so be prepared for faster obstacles</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleHelp}>Close</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={showHighScoreAlert} autoHideDuration={3000} onClose={() => setShowHighScoreAlert(false)}>
        <Alert onClose={() => setShowHighScoreAlert(false)} severity="success" sx={{ width: "100%" }}>
          New High Score: {highScore}!
        </Alert>
      </Snackbar>
    </Container>
  )
}

