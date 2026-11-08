// components/MotionProvider.tsx
'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';

// Skips transform animations for visitors who prefer reduced motion.
const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
