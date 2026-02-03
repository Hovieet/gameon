import { useState, useEffect } from "react";
import { img, hamburger, icons } from "../assets/assets";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import GameButton from "./GameButton";

function Navbar() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="fixed inset-0 z-50 pointer-events-none text-black font-inter font-semibold">
      <div className="w-full h-screen">
        <div className="md:border-[15px] border-[#F6F2FF] border-0 w-full h-screen" />
        <div className="absolute inset-0 rounded-[30px] md:ring-[15px] md:ring-[#F6F2FF] md:ring-inset" />
      </div>

      <div className="absolute top-0 left-0 w-full pointer-events-auto">
        <div className="flex justify-center">
          <nav className="relative bg-[#F6F2FF] md:outline w-full max-w-5xl p-6 md:rounded-b-[30px] flex items-center shadow-lg uppercase text-[13px] z-50">
            <ul className="hidden md:flex flex-1 gap-10">
              <li>
                <a className="nav" href="#join">
                  jak se přihlásit
                </a>
              </li>
              <li>
                <a className="nav" href="#org">
                  organizátoři
                </a>
              </li>
              <li>
                <a className="nav" href="#">
                  otázky
                </a>
              </li>
            </ul>

            <a href="#home">
              <motion.img
                src={img.ball}
                alt="logo"
                className="absolute left-1/2 -translate-x-1/2 top-4 md:w-12 md:h-12 w-15 h-15 cursor-pointer"
                animate={{ rotate: -360 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { type: "spring", stiffness: 300, damping: 20 },
                }}
              />
            </a>

            <div className="hidden md:flex flex-1 justify-end items-center gap-10 cursor-pointer">
              <a className="nav" href="#">
                galerie
              </a>
              <GameButton text="Eventy" onClick={() => {}} />
            </div>

            <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
              <motion.button
                aria-label="Menu"
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={() => setActive((pv) => !pv)}
                className="md:hidden ml-auto relative h-12 w-12 rounded-full hover:bg-black/10 z-[60]"
              >
                <motion.span
                  variants={hamburger.top}
                  className="absolute h-1 w-8 bg-black"
                  style={{ top: "35%", left: "50%", x: "-50%" }}
                />
                <motion.span
                  variants={hamburger.middle}
                  className="absolute h-1 w-8 bg-black"
                  style={{ top: "50%", left: "50%", x: "-50%" }}
                />
                <motion.span
                  variants={hamburger.bottom}
                  className="absolute h-1 w-8 bg-black"
                  style={{ top: "65%", left: "50%", x: "-50%" }}
                />
              </motion.button>
            </MotionConfig>
          </nav>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#F6F2FF] z-40 flex flex-col items-center justify-center pointer-events-auto"
            >
              <ul className="flex flex-col items-center gap-10 uppercase text-lg p-5">
                <li>
                  <a href="#" onClick={() => setActive(false)}>
                    jak se přihlásit
                  </a>
                </li>
                <li>
                  <a href="#org" onClick={() => setActive(false)}>
                    organizátoři
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setActive(false)}>
                    otázky
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setActive(false)}>
                    galerie
                  </a>
                </li>

                <GameButton text="Eventy" onClick={() => {}} />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Navbar;
