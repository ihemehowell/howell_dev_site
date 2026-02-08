// 'use client'
// import { motion } from 'framer-motion'

// export default function Particles() {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {[...Array(25)].map((_, i) => (
//         <motion.span
//           key={i}
//           className="absolute w-1.5 h-1.5 bg-blue-500/40 rounded-full"
//           initial={{
//             x: Math.random() * 1200,
//             y: Math.random() * 800,
//             opacity: Math.random(),
//           }}
//           animate={{
//             y: [0, -400],
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: 10 + Math.random() * 10,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         />
//       ))}
//     </div>
//   )
// }
