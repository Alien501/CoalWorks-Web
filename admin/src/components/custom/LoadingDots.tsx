import React from 'react'
import { motion } from 'framer-motion'

export const LoadingDots: React.FC = () => {
  const dotVariants = {
    hidden: { opacity: 0.5, y: 0 },
    visible: { opacity: 1, y: -5 },
  }

  const containerVariants = {
    start: { transition: { staggerChildren: 0.2 } },
    end: { transition: { staggerChildren: 0.2 } },
  }

  return (
    <motion.div
      className="flex space-x-1"
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      {[0, 1, 2].map((_, i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-foreground rounded-full"
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          transition={{ repeat: Infinity, duration: 0.6, repeatType: 'reverse' }}
        />
      ))}
    </motion.div>
  )
}

