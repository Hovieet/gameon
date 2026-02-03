import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 30;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

function TiltCard({ children }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const transform = useMotionTemplate`
    rotateX(${xSpring}deg)
    rotateY(${ySpring}deg)
  `;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;

    x.set((mouseY * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1);
    y.set(mouseX * ROTATION_RANGE - HALF_ROTATION_RANGE);
  };

  return (
    <motion.div
      className="relative"
      style={{ perspective: 1000 }}
      whileHover="hover"
    >
      <motion.div
        variants={{
          hover: {
            opacity: 1,
            scale: 1.4,
          },
        }}
        initial={{ opacity: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 rounded-2xl blur-2xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(192,132,252,0.9), rgba(124,58,237,0.7), transparent 70%)",
          zIndex: 0,
        }}
      />

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{
          transformStyle: "preserve-3d",
          transform,
          zIndex: 1,
        }}
        className="relative rounded-xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default TiltCard;
