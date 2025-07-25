import React from 'react';
import { motion } from 'framer-motion';

export function App() {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Animation is working!
      </motion.h1>
    </div>
  );
} 