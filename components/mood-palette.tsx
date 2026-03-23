"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  useColorExtraction,
  type ExtractedColor,
} from "@/hooks/use-color-extraction"

const INDICATOR_SIZE = 32

export function MoodPalette() {
  const [image, setImage] = useState<string | null>(null)
  const [colors, setColors] = useState<ExtractedColor[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isDraggingOver, setIsDraggingOver] = useState(false)

  const imageContainerRef = useRef<HTMLDivElement>(null)
  const displayedImageRef = useRef<HTMLImageElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { extractColors, getColorAtPosition } = useColorExtraction()

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return

      const reader = new FileReader()
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string
        setImage(dataUrl)
        setColors([])
        setSelectedIndex(null)

        const img = new Image()
        img.onload = () => {
          const extracted = extractColors(img)
          setColors(extracted)
        }
        img.src = dataUrl
      }
      reader.readAsDataURL(file)
    },
    [extractColors]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDraggingOver(false)
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingOver(false)
  }, [])

  const openFilePicker = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const getIndicatorPosition = useCallback(
    (color: ExtractedColor) => {
      const container = imageContainerRef.current
      const img = displayedImageRef.current
      if (!container || !img) return { left: 0, top: 0 }

      const imgRect = img.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      const scaleX = imgRect.width / img.naturalWidth
      const scaleY = imgRect.height / img.naturalHeight

      const offsetX = imgRect.left - containerRect.left
      const offsetY = imgRect.top - containerRect.top

      return {
        left: Math.max(
          0,
          offsetX + color.x * scaleX - INDICATOR_SIZE / 2
        ),
        top: Math.max(
          0,
          offsetY + color.y * scaleY - INDICATOR_SIZE / 2
        ),
      }
    },
    []
  )

  return (
    <div className="flex h-svh w-full bg-[#f8f9fa]">
      {/* Sidebar */}
      <div className="flex w-72 shrink-0 flex-col border-r border-[#e5e7eb] bg-white">
        <div className="flex flex-col gap-3 p-5">
          <div>
            <h1 className="text-lg font-semibold text-[#111]">Mood palette</h1>
            <p className="text-sm text-[#888]">
              Extract colors that match your image&apos;s vibe
            </p>
          </div>
          <Button
            onClick={openFilePicker}
            className="w-full"
            style={{ backgroundColor: "#0F5CD4" }}
          >
            Choose image
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleFile(file)
            }}
          />
        </div>

        {/* Color list */}
        <div className="flex-1 overflow-y-auto px-5 pb-5">
          <p className="mb-3 text-xs font-medium tracking-wide text-[#999] uppercase">
            Extracted colors
          </p>
          <div className="flex flex-col gap-2">
            {colors.length === 0
              ? // Placeholders
                Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border border-[#eee] p-2.5 opacity-50"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="h-10 w-10 shrink-0 rounded-md bg-[#e5e7eb]" />
                    <div>
                      <div className="text-sm font-medium text-[#ccc]">
                        #------
                      </div>
                      <div className="text-xs text-[#ccc]">
                        RGB(---, ---, ---)
                      </div>
                    </div>
                  </div>
                ))
              : colors.map((color, i) => (
                  <div
                    key={i}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border p-2.5 transition-all"
                    style={{
                      borderColor:
                        selectedIndex === i ? "#0F5CD4" : "#eee",
                      backgroundColor:
                        selectedIndex === i
                          ? "rgba(15, 92, 212, 0.05)"
                          : "transparent",
                    }}
                    onMouseDown={() => setSelectedIndex(i)}
                    onMouseUp={() => setSelectedIndex(null)}
                  >
                    <div
                      className="h-10 w-10 shrink-0 rounded-md"
                      style={{
                        backgroundColor: color.hex,
                      }}
                    />
                    <div>
                      <div className="text-sm font-medium text-[#333]">
                        {color.hex}
                      </div>
                      <div className="text-xs text-[#888]">
                        RGB({color.r}, {color.g}, {color.b})
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* Main canvas area */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div
          ref={imageContainerRef}
          className="relative flex h-full w-full items-center justify-center rounded-lg transition-colors"
          style={{
            border: image
              ? "none"
              : isDraggingOver
                ? "2px dashed #0F5CD4"
                : "2px dashed #d1d5db",
            backgroundColor: image
              ? "transparent"
              : isDraggingOver
                ? "rgba(15, 92, 212, 0.03)"
                : "#fff",
            cursor: image ? "default" : "pointer",
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => {
            if (!image) openFilePicker()
          }}
        >
          {image ? (
            <>
              <img
                ref={displayedImageRef}
                src={image}
                alt="Uploaded"
                className="max-h-full max-w-full rounded-lg object-contain"
                style={{ userSelect: "none" }}
                draggable={false}
              />
              {colors.map((color, i) => (
                <ColorIndicator
                  key={i}
                  index={i}
                  color={color}
                  isSelected={selectedIndex === i}
                  getPosition={getIndicatorPosition}
                  containerRef={imageContainerRef}
                  displayedImageRef={displayedImageRef}
                  getColorAtPosition={getColorAtPosition}
                  onSelect={setSelectedIndex}
                  onUpdateColor={(idx, updated) => {
                    setColors((prev) => {
                      const next = [...prev]
                      next[idx] = { ...next[idx], ...updated }
                      return next
                    })
                  }}
                />
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="text-4xl opacity-30">🖼️</div>
              <p className="text-sm text-[#999]">
                Drop an image here or click to upload
              </p>
              <p className="text-xs text-[#bbb]">
                Supports JPG, PNG, WebP, and more
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ColorIndicator({
  index,
  color,
  isSelected,
  getPosition,
  containerRef,
  displayedImageRef,
  getColorAtPosition,
  onSelect,
  onUpdateColor,
}: {
  index: number
  color: ExtractedColor
  isSelected: boolean
  getPosition: (color: ExtractedColor) => { left: number; top: number }
  containerRef: React.RefObject<HTMLDivElement | null>
  displayedImageRef: React.RefObject<HTMLImageElement | null>
  getColorAtPosition: (
    x: number,
    y: number,
    w: number,
    h: number
  ) => { r: number; g: number; b: number; hex: string } | null
  onSelect: (index: number | null) => void
  onUpdateColor: (
    index: number,
    color: { r: number; g: number; b: number; hex: string }
  ) => void
}) {
  const indicatorRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null)

  // Calculate position when color or image changes
  useEffect(() => {
    const updatePos = () => {
      const p = getPosition(color)
      setPos(p)
    }
    updatePos()
    window.addEventListener("resize", updatePos)
    return () => window.removeEventListener("resize", updatePos)
  }, [color, getPosition])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()

      const container = containerRef.current
      const img = displayedImageRef.current
      if (!container || !img) return

      onSelect(index)

      // Disable text selection during drag
      document.body.style.userSelect = "none"
      document.body.style.webkitUserSelect = "none"

      const onMouseMove = (moveEvent: MouseEvent) => {
        moveEvent.preventDefault()
        moveEvent.stopPropagation()

        const containerRect = container.getBoundingClientRect()
        const imgRect = img.getBoundingClientRect()

        const offsetX = imgRect.left - containerRect.left
        const offsetY = imgRect.top - containerRect.top

        // Clamp to image bounds
        const relX = Math.max(
          0,
          Math.min(moveEvent.clientX - imgRect.left, imgRect.width)
        )
        const relY = Math.max(
          0,
          Math.min(moveEvent.clientY - imgRect.top, imgRect.height)
        )

        setPos({
          left: offsetX + relX - INDICATOR_SIZE / 2,
          top: offsetY + relY - INDICATOR_SIZE / 2,
        })

        // Update color at new position
        const newColor = getColorAtPosition(
          relX,
          relY,
          imgRect.width,
          imgRect.height
        )
        if (newColor) {
          onUpdateColor(index, newColor)
        }
      }

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseup", onMouseUp)
        document.body.style.userSelect = ""
        document.body.style.webkitUserSelect = ""
        onSelect(null)
      }

      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseup", onMouseUp)
    },
    [
      index,
      containerRef,
      displayedImageRef,
      getColorAtPosition,
      onSelect,
      onUpdateColor,
    ]
  )

  if (!pos) return null

  return (
    <div
      ref={indicatorRef}
      className="absolute cursor-grab rounded-full active:cursor-grabbing"
      style={{
        left: pos.left,
        top: pos.top,
        width: INDICATOR_SIZE,
        height: INDICATOR_SIZE,
        backgroundColor: color.hex,
        border: isSelected
          ? "3px solid #0F5CD4"
          : "3px solid rgba(255,255,255,0.9)",
        zIndex: isSelected ? 20 : 10,
        transition: "border-color 0.15s",
      }}
      onMouseDown={handleMouseDown}
      onDragStart={(e) => e.preventDefault()}
    />
  )
}
