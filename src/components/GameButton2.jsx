import { motion } from "framer-motion";

function GameButton2({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ x: -8, y: -8 }}
      whileHover={{ x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`bg-white outline-3 text-black font-press-start text-[12px] px-6 py-3 lg:px-8 lg:py-4 cursor-pointer ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default GameButton2;
