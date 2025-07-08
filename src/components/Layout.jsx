// Layout.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Generate stars with random position and speed
const stars = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 1,
  top: Math.random() * 100,
  left: Math.random() * 100,
  speed: Math.random() * 0.5 + 0.2,
}));

const StarBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ y: scrollY * 0.3 });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-80"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 3}px white`,
          }}
        />
      ))}
    </motion.div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <StarBackground />
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
