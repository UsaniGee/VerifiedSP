"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0f28" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1abc9c" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1abc9c" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0a0f28" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Floating shapes */}
        <motion.circle
          cx="200"
          cy="150"
          r="100"
          fill="url(#gradient1)"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="800"
          cy="400"
          r="150"
          fill="url(#gradient2)"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.ellipse
          cx="1000"
          cy="200"
          rx="120"
          ry="80"
          fill="url(#gradient1)"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.path
          d="M 100 600 Q 200 500 300 600 T 500 600"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          animate={{
            pathLength: [0, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  )
}

