"use client"

import { Card, CardContent, CardMedia, Typography, Box, Chip } from "@mui/material"
import { useRouter } from "next/navigation"
import type { Character } from "@/types"

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const router = useRouter()

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
        },
      }}
      onClick={() => router.push(`/characters/${character.id}`)}
    >
      <CardMedia component="img" height="240" image={character.image} alt={character.name} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          {character.name}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Chip
            label={character.village}
            size="small"
            sx={{ mr: 1, mb: 1, backgroundColor: "primary.main", color: "white" }}
          />
          <Chip
            label={character.rank}
            size="small"
            sx={{ mr: 1, mb: 1, backgroundColor: "secondary.main", color: "white" }}
          />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {character.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

