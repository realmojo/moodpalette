"use client"

import { useCallback, useRef } from "react"

export interface ExtractedColor {
  r: number
  g: number
  b: number
  hex: string
  x: number
  y: number
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((c) => {
        const hex = Math.round(c).toString(16)
        return hex.length === 1 ? "0" + hex : hex
      })
      .join("")
      .toUpperCase()
  )
}

function colorDistance(
  a: [number, number, number],
  b: [number, number, number]
): number {
  return Math.sqrt(
    (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2
  )
}

function kMeansExtract(
  imageData: ImageData,
  k: number = 20,
  iterations: number = 15
): ExtractedColor[] {
  const { data, width, height } = imageData
  const pixels: { r: number; g: number; b: number; x: number; y: number }[] =
    []

  // Sample every 4th pixel for performance
  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      const i = (y * width + x) * 4
      pixels.push({ r: data[i], g: data[i + 1], b: data[i + 2], x, y })
    }
  }

  if (pixels.length < k) return []

  // Smart initial seeding: maximize distance between centroids
  const centroids: [number, number, number][] = []
  const centroidPositions: { x: number; y: number }[] = []

  // First centroid is random
  const firstIdx = Math.floor(Math.random() * pixels.length)
  const first = pixels[firstIdx]
  centroids.push([first.r, first.g, first.b])
  centroidPositions.push({ x: first.x, y: first.y })

  // Subsequent centroids: pick the pixel most distant from all existing centroids
  for (let c = 1; c < k; c++) {
    let bestDist = -1
    let bestIdx = 0
    const candidates = Math.min(pixels.length, 50)
    const step = Math.max(1, Math.floor(pixels.length / candidates))

    for (let i = 0; i < pixels.length; i += step) {
      const p = pixels[i]
      const pColor: [number, number, number] = [p.r, p.g, p.b]
      let minDist = Infinity
      for (const cent of centroids) {
        const d = colorDistance(pColor, cent)
        if (d < minDist) minDist = d
      }
      if (minDist > bestDist) {
        bestDist = minDist
        bestIdx = i
      }
    }
    const chosen = pixels[bestIdx]
    centroids.push([chosen.r, chosen.g, chosen.b])
    centroidPositions.push({ x: chosen.x, y: chosen.y })
  }

  // K-means iterations
  const assignments = new Array(pixels.length).fill(0)

  for (let iter = 0; iter < iterations; iter++) {
    // Assign pixels to nearest centroid
    for (let i = 0; i < pixels.length; i++) {
      const p = pixels[i]
      const pColor: [number, number, number] = [p.r, p.g, p.b]
      let minDist = Infinity
      let nearest = 0
      for (let c = 0; c < k; c++) {
        const d = colorDistance(pColor, centroids[c])
        if (d < minDist) {
          minDist = d
          nearest = c
        }
      }
      assignments[i] = nearest
    }

    // Update centroids
    for (let c = 0; c < k; c++) {
      let sumR = 0,
        sumG = 0,
        sumB = 0,
        count = 0
      let bestPixelDist = Infinity
      let bestPixelIdx = -1

      for (let i = 0; i < pixels.length; i++) {
        if (assignments[i] === c) {
          const p = pixels[i]
          sumR += p.r
          sumG += p.g
          sumB += p.b
          count++
        }
      }

      if (count > 0) {
        centroids[c] = [sumR / count, sumG / count, sumB / count]

        // Find the pixel closest to the centroid for positioning
        for (let i = 0; i < pixels.length; i++) {
          if (assignments[i] === c) {
            const p = pixels[i]
            const d = colorDistance(
              [p.r, p.g, p.b],
              centroids[c]
            )
            if (d < bestPixelDist) {
              bestPixelDist = d
              bestPixelIdx = i
            }
          }
        }
        if (bestPixelIdx >= 0) {
          centroidPositions[c] = {
            x: pixels[bestPixelIdx].x,
            y: pixels[bestPixelIdx].y,
          }
        }
      } else {
        // Reinitialize empty cluster
        const randIdx = Math.floor(Math.random() * pixels.length)
        const rp = pixels[randIdx]
        centroids[c] = [rp.r, rp.g, rp.b]
        centroidPositions[c] = { x: rp.x, y: rp.y }
      }
    }
  }

  // Enforce minimum distance between colors for distinctness
  const minDistance = 30
  const result: ExtractedColor[] = []

  for (let c = 0; c < k; c++) {
    const color = centroids[c]
    let tooClose = false

    for (const existing of result) {
      if (
        colorDistance(color, [existing.r, existing.g, existing.b]) < minDistance
      ) {
        tooClose = true
        break
      }
    }

    if (tooClose) {
      // Find a replacement from common colors that's distinct
      let bestCandidate: [number, number, number] | null = null
      let bestPos = centroidPositions[c]
      let bestMinDist = 0

      for (let attempt = 0; attempt < 50; attempt++) {
        const randIdx = Math.floor(Math.random() * pixels.length)
        const rp = pixels[randIdx]
        const candidate: [number, number, number] = [rp.r, rp.g, rp.b]
        let candidateMinDist = Infinity

        for (const existing of result) {
          const d = colorDistance(candidate, [
            existing.r,
            existing.g,
            existing.b,
          ])
          if (d < candidateMinDist) candidateMinDist = d
        }

        if (candidateMinDist > bestMinDist) {
          bestMinDist = candidateMinDist
          bestCandidate = candidate
          bestPos = { x: rp.x, y: rp.y }
        }
      }

      if (bestCandidate && bestMinDist >= minDistance) {
        result.push({
          r: Math.round(bestCandidate[0]),
          g: Math.round(bestCandidate[1]),
          b: Math.round(bestCandidate[2]),
          hex: rgbToHex(bestCandidate[0], bestCandidate[1], bestCandidate[2]),
          x: bestPos.x,
          y: bestPos.y,
        })
      } else {
        // Fall back to the original color
        result.push({
          r: Math.round(color[0]),
          g: Math.round(color[1]),
          b: Math.round(color[2]),
          hex: rgbToHex(color[0], color[1], color[2]),
          x: centroidPositions[c].x,
          y: centroidPositions[c].y,
        })
      }
    } else {
      result.push({
        r: Math.round(color[0]),
        g: Math.round(color[1]),
        b: Math.round(color[2]),
        hex: rgbToHex(color[0], color[1], color[2]),
        x: centroidPositions[c].x,
        y: centroidPositions[c].y,
      })
    }
  }

  return result.slice(0, k)
}

export function useColorExtraction() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  const extractColors = useCallback(
    (img: HTMLImageElement): ExtractedColor[] => {
      const canvas = document.createElement("canvas")
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext("2d")
      if (!ctx) return []

      // Fill with white for PNG transparency
      ctx.fillStyle = "#FFFFFF"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0)

      canvasRef.current = canvas
      imageRef.current = img

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      return kMeansExtract(imageData, 20)
    },
    []
  )

  const getColorAtPosition = useCallback(
    (
      x: number,
      y: number,
      displayWidth: number,
      displayHeight: number
    ): { r: number; g: number; b: number; hex: string } | null => {
      const canvas = canvasRef.current
      if (!canvas) return null

      const ctx = canvas.getContext("2d")
      if (!ctx) return null

      const scaleX = canvas.width / displayWidth
      const scaleY = canvas.height / displayHeight
      const pixelX = Math.round(x * scaleX)
      const pixelY = Math.round(y * scaleY)

      if (
        pixelX < 0 ||
        pixelX >= canvas.width ||
        pixelY < 0 ||
        pixelY >= canvas.height
      ) {
        return null
      }

      const pixel = ctx.getImageData(pixelX, pixelY, 1, 1).data
      return {
        r: pixel[0],
        g: pixel[1],
        b: pixel[2],
        hex: rgbToHex(pixel[0], pixel[1], pixel[2]),
      }
    },
    []
  )

  return { extractColors, getColorAtPosition, canvasRef }
}
