"use client"

import { useEffect, useRef, useState } from "react"
import { Box } from "@mui/material"

interface NarutoJumpGameProps {
  onGameOver: (score: number) => void
  muted: boolean
}

interface GameObject {
  x: number
  y: number
  width: number
  height: number
  speed?: number
}

interface Naruto extends GameObject {
  jumping: boolean
  jumpHeight: number
  jumpSpeed: number
  originalY: number
}

interface Obstacle extends GameObject {
  type: "log" | "rock" | "shuriken"
  passed: boolean
}

const GROUND_HEIGHT = 30
const JUMP_HEIGHT = 120
const INITIAL_SPEED = 3
const SPEED_INCREMENT = 0.0005
const OBSTACLE_SPAWN_RATE = 0.02
const OBSTACLE_MIN_DISTANCE = 300

export default function NarutoJumpGame({ onGameOver, muted }: NarutoJumpGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameLoopRef = useRef<number>(0)
  const [isPaused, setIsPaused] = useState(false)

  // Game state
  const gameStateRef = useRef({
    naruto: {
      x: 50,
      y: 0, // Will be set based on canvas height
      width: 40,
      height: 60,
      jumping: false,
      jumpHeight: JUMP_HEIGHT,
      jumpSpeed: 4,
      originalY: 0,
    } as Naruto,
    obstacles: [] as Obstacle[],
    score: 0,
    speed: INITIAL_SPEED,
    gameOver: false,
    lastObstacleTime: 0,
    groundY: 0, // Will be set based on canvas height
    trees: [] as GameObject[],
    clouds: [] as GameObject[],
  })

  // Images
  const imagesRef = useRef({
    naruto: new Image(),
    narutojump: new Image(),
    log: new Image(),
    rock: new Image(),
    shuriken: new Image(),
    ground: new Image(),
    tree: new Image(),
    cloud: new Image(),
    background: new Image(),
    loaded: false,
  })

  // Sounds
  const soundsRef = useRef({
    jump: new Audio(),
    hit: new Audio(),
    point: new Audio(),
    loaded: false,
  })

  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Initialize game state
    const groundY = canvas.height - GROUND_HEIGHT
    gameStateRef.current.groundY = groundY
    gameStateRef.current.naruto.y = groundY - gameStateRef.current.naruto.height
    gameStateRef.current.naruto.originalY = gameStateRef.current.naruto.y

    // Load images
    const images = imagesRef.current
    images.naruto.src = "/naruto.png?height=60&width=40"
    images.narutojump.src = "/jump.png?height=60&width=40"
    images.log.src = "/log.png?height=30&width=50"
    images.rock.src = "/rock.png?height=40&width=40"
    images.shuriken.src = "/shuriken.png?height=30&width=30"
    images.ground.src = "/ground.png?height=200&width=800"
    images.tree.src = "/tree.png?height=100&width=60"
    images.cloud.src = "/cloud.png?height=40&width=80"
    images.background.src = "/back.jpg?height=300&width=800"

    // Initialize background elements
    initBackgroundElements(canvas.width, canvas.height)

    // Load sounds
    const sounds = soundsRef.current
    sounds.jump.src = "/jump.mp3" // These would be actual sound files in a real implementation
    sounds.hit.src = "/hit.mp3"
    sounds.point.src = "/point.mp3"

    let loadedSounds = 0
    const totalSounds = 3
    
    const onSoundLoad = () => {
        loadedSounds++
        if (loadedSounds === totalSounds) {
            sounds.loaded = true
            startGameLoop()
        }
    }

    // Wait for images to load
    let loadedImages = 0
    const totalImages = 9

    const onImageLoad = () => {
      loadedImages++
      if (loadedImages === totalImages) {
        images.loaded = true
        startGameLoop()
      }
    }
    sounds.jump.oncanplaythrough = onSoundLoad
    sounds.hit.oncanplaythrough = onSoundLoad
    sounds.point.oncanplaythrough = onSoundLoad

    images.naruto.onload = onImageLoad
    images.narutojump.onload = onImageLoad
    images.log.onload = onImageLoad
    images.rock.onload = onImageLoad
    images.shuriken.onload = onImageLoad
    images.ground.onload = onImageLoad
    images.tree.onload = onImageLoad
    images.cloud.onload = onImageLoad
    images.background.onload = onImageLoad

    // Event listeners
    window.addEventListener("keydown", handleKeyDown)
    canvas.addEventListener("touchstart", handleTouchStart)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      canvas.removeEventListener("touchstart", handleTouchStart)
      cancelAnimationFrame(gameLoopRef.current)
    }
  }, [])

  // Initialize background elements
  const initBackgroundElements = (canvasWidth: number, canvasHeight: number) => {
    const gameState = gameStateRef.current

    // Create trees
    gameState.trees = []
    for (let i = 0; i < 5; i++) {
      gameState.trees.push({
        x: Math.random() * canvasWidth,
        y: gameState.groundY - 100,
        width: 60,
        height: 100,
      })
    }

    // Create clouds
    gameState.clouds = []
    for (let i = 0; i < 3; i++) {
      gameState.clouds.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * 100,
        width: 80,
        height: 40,
        speed: 0.5 + Math.random() * 0.5,
      })
    }
  }

  // Handle keyboard input
  const handleKeyDown = (e: KeyboardEvent) => {
    const gameState = gameStateRef.current

    if (e.code === "Space" && !gameState.naruto.jumping && !gameState.gameOver) {
      jump()
    }

    if (e.code === "KeyP") {
      togglePause()
    }
  }

  // Handle touch input
  const handleTouchStart = () => {
    const gameState = gameStateRef.current

    if (!gameState.naruto.jumping && !gameState.gameOver) {
      jump()
    }
  }

  // Jump function
  const jump = () => {
    const gameState = gameStateRef.current
    gameState.naruto.jumping = true

    // Play jump sound
    if (!muted && soundsRef.current.loaded) {
      soundsRef.current.jump.currentTime = 0
      soundsRef.current.jump.play().catch(() => {})
    }
  }

  // Toggle pause
  const togglePause = () => {
    setIsPaused((prev) => !prev)
  }

  // Start game loop
  const startGameLoop = () => {
    if (!canvasRef.current) return

    const gameLoop = () => {
      if (!isPaused) {
        update()
        draw()
      }

      if (!gameStateRef.current.gameOver) {
        gameLoopRef.current = requestAnimationFrame(gameLoop)
      }
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop)
  }

  // Update game state
  const update = () => {
    const gameState = gameStateRef.current
    const canvas = canvasRef.current
    if (!canvas) return

    // Update score
    gameState.score += 1

    // Increase speed gradually
    gameState.speed += SPEED_INCREMENT

    // Update Naruto's position (jumping)
    if (gameState.naruto.jumping) {
      gameState.naruto.y -= gameState.naruto.jumpSpeed

      // Check if reached max jump height
      if (gameState.naruto.originalY - gameState.naruto.y >= gameState.naruto.jumpHeight) {
        gameState.naruto.jumpSpeed = -gameState.naruto.jumpSpeed // Start falling
      }

      // Check if landed
      if (gameState.naruto.y >= gameState.naruto.originalY) {
        gameState.naruto.y = gameState.naruto.originalY
        gameState.naruto.jumping = false
        gameState.naruto.jumpSpeed = Math.abs(gameState.naruto.jumpSpeed) // Reset jump speed to positive
      }
    }

    // Update obstacles
    gameState.obstacles.forEach((obstacle) => {
      obstacle.x -= gameState.speed

      // Check if obstacle passed Naruto
      if (!obstacle.passed && obstacle.x + obstacle.width < gameState.naruto.x) {
        obstacle.passed = true

        // Play point sound
        if (!muted && soundsRef.current.loaded) {
          soundsRef.current.point.currentTime = 0
          soundsRef.current.point.play().catch(() => {})
        }
      }

      // Check collision
      if (checkCollision(gameState.naruto, obstacle)) {
        gameState.gameOver = true

        // Play hit sound
        if (!muted && soundsRef.current.loaded) {
          soundsRef.current.hit.currentTime = 0
          soundsRef.current.hit.play().catch(() => {})
        }

        onGameOver(Math.floor(gameState.score / 10))
      }
    })

    // Remove obstacles that are off screen
    gameState.obstacles = gameState.obstacles.filter((obstacle) => obstacle.x > -obstacle.width)

    // Spawn new obstacles
    if (
      Math.random() < OBSTACLE_SPAWN_RATE &&
      (gameState.obstacles.length === 0 ||
        canvas.width - gameState.obstacles[gameState.obstacles.length - 1].x > OBSTACLE_MIN_DISTANCE)
    ) {
      spawnObstacle()
    }

    // Update background elements
    updateBackgroundElements(canvas.width)
  }

  // Update background elements
  const updateBackgroundElements = (canvasWidth: number) => {
    const gameState = gameStateRef.current

    // Update trees
    gameState.trees.forEach((tree) => {
      tree.x -= gameState.speed * 0.5

      if (tree.x + tree.width < 0) {
        tree.x = canvasWidth + Math.random() * 200
      }
    })

    // Update clouds
    gameState.clouds.forEach((cloud) => {
      cloud.x -= cloud.speed || 1

      if (cloud.x + cloud.width < 0) {
        cloud.x = canvasWidth + Math.random() * 200
        cloud.y = Math.random() * 100
      }
    })
  }

  // Spawn a new obstacle
  const spawnObstacle = () => {
    const gameState = gameStateRef.current
    const canvas = canvasRef.current
    if (!canvas) return

    const obstacleTypes: ("log" | "rock" | "shuriken")[] = ["log", "rock", "shuriken"]
    const type = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)]

    let width, height

    switch (type) {
      case "log":
        width = 50
        height = 30
        break
      case "rock":
        width = 40
        height = 40
        break
      case "shuriken":
        width = 30
        height = 30
        break
    }

    const obstacle: Obstacle = {
      x: canvas.width,
      y: gameState.groundY - height,
      width,
      height,
      type,
      passed: false,
    }

    gameState.obstacles.push(obstacle)
  }

  // Check collision between two objects
  const checkCollision = (obj1: GameObject, obj2: GameObject) => {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    )
  }

  // Draw game
  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gameState = gameStateRef.current
    const images = imagesRef.current

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background
    ctx.drawImage(images.background, 0, 0, canvas.width, canvas.height)

    // Draw clouds
    gameState.clouds.forEach((cloud) => {
      ctx.drawImage(images.cloud, cloud.x, cloud.y, cloud.width, cloud.height)
    })

    // Draw trees
    gameState.trees.forEach((tree) => {
      ctx.drawImage(images.tree, tree.x, tree.y, tree.width, tree.height)
    })

    // Draw ground
    for (let i = 0; i < canvas.width; i += 800) {
      ctx.drawImage(images.ground, i, gameState.groundY, 800, GROUND_HEIGHT)
    }

    // Draw obstacles
    gameState.obstacles.forEach((obstacle) => {
      switch (obstacle.type) {
        case "log":
          ctx.drawImage(images.log, obstacle.x, obstacle.y, obstacle.width, obstacle.height)
          break
        case "rock":
          ctx.drawImage(images.rock, obstacle.x, obstacle.y, obstacle.width, obstacle.height)
          break
        case "shuriken":
          // Rotate shuriken
          ctx.save()
          ctx.translate(obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2)
          ctx.rotate((gameState.score / 10) % (Math.PI * 2))
          ctx.drawImage(images.shuriken, -obstacle.width / 2, -obstacle.height / 2, obstacle.width, obstacle.height)
          ctx.restore()
          break
      }
    })

    // Draw Naruto
    if (gameState.naruto.jumping) {
      ctx.drawImage(
        images.narutojump,
        gameState.naruto.x,
        gameState.naruto.y,
        gameState.naruto.width,
        gameState.naruto.height,
      )
    } else {
      ctx.drawImage(
        images.naruto,
        gameState.naruto.x,
        gameState.naruto.y,
        gameState.naruto.width,
        gameState.naruto.height,
      )
    }

    // Draw score
    ctx.fillStyle = "#FF8000"
    ctx.font = "bold 20px Arial"
    ctx.fillText(`Score: ${Math.floor(gameState.score / 10)}`, 20, 30)

    // Draw pause indicator if paused
    if (isPaused) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "white"
      ctx.font = "bold 30px Arial"
      ctx.textAlign = "center"
      ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2)
      ctx.textAlign = "start"
    }
  }

  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          cursor: "pointer",
        }}
      />

      {isPaused && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={togglePause}
        >
          PAUSED - Click to Resume
        </Box>
      )}
    </Box>
  )
}

