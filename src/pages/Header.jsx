import { organizers, img } from "../assets/assets";
import TiltCard from "../components/TiltCard";
import GameButton2 from "../components/GameButton2";
import JoinCards from "../components/JoinCards";
import videoBg from "../assets/video.mp4";
import { useState } from "react";
import Modal from "../components/Modal";
import Rating from "../components/Rating";

function Header() {
  const [open, setOpen] = useState(false);
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);

  return (
    <>
      {/* Header Section */}
      <section
        className="w-full min-h-screen px-6 py-12 lg:px-20 lg:py-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img.header})` }}
        id="home"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center gap-12">
          <div className="flex w-full flex-col justify-center items-center lg:items-start lg:pr-16 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-lg sm:text-xl uppercase font-oswald tracking-widest">
                blokuj · servuj · smečuj
              </p>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-linear-to-t from-[#AA7BEF] to-white">
                  GAME
                </span>
                <span className="text-[#AA7BEF]">ON</span>
              </h2>
            </div>
            <span className="w-106 lg:border-b-2 lg:border-gray-300" />
            <p className="mt-4 max-w-md text-base sm:text-lg font-light font-oswald text-white text-center lg:text-left">
              Komunita volejbalistů spojená láskou ke hře a společnému pohybu.
            </p>

            <div className="mt-10 lg:bg-black">
              <GameButton2>Přihlásit se</GameButton2>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center"></div>
        </div>
      </section>
      {/* Join Section */}
      <section
        className="w-full min-h-svh md:min-h-screen flex justify-center items-center md:mt-0 mt-10"
        id="join"
      >
        <div className="flex md:flex-row justify-center items-center flex-col w-auto rounded-xl text-black md:gap-0 gap-10">
          <div className="max-w-85 lg:max-w-87.5 aspect-9/16 ">
            <video
              src={videoBg}
              autoPlay
              loop
              muted
              className="w-auto h-full object-cover rounded-xl outline-6 bg-black"
            />
          </div>

          <div className="relative w-full h-full overflow-hidden">
            <div className="p-2">
              <JoinCards />
            </div>
          </div>
        </div>
      </section>
      {/* Organizers Section */}
      <section
        className="w-full min-h-svh md:min-h-screen relative bg-[#F6F2FF] text-black  py-16 px-6 md:px-20"
        id="org"
      >
        <div className="max-w-xl text-start mb-16 mt-10">
          <h1 className="font-inter mb-2 opacity-35">Organizátoři</h1>

          <h2 className="text-2xl md:text-3xl">Kdo stojí za GameOn</h2>

          <p className="mt-5 text-base font-inter font-light md:text-lg pb-10 border-b-2 font border-gray-300">
            Jsme tři kamarádi, které spojila láska k volejbalu. Vytváříme
            otevřenou volejbalovou komunitu pro hráče, kteří si chtějí kvalitně
            zahrát, zlepšovat se a užít si hru v přátelské atmosféře.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {organizers.map((organizer) => (
            <TiltCard key={organizer.id}>
              <div
                style={{ transform: "translateZ(30px)" }}
                className="text-start flex flex-col gap-3 max-w-xs bg-[#a97bef] border-2 border-black p-4 rounded-xl "
                onClick={() => {
                  setSelectedOrganizer(organizer);
                  setOpen(true);
                }}
              >
                <div
                  style={{ transform: "translateZ(50px)" }}
                  className="w-56 h-64 overflow-hidden outline-2 outline-[#803ae9c7]"
                >
                  <img
                    src={organizer.photo}
                    alt={organizer.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  style={{ transform: "translateZ(40px)" }}
                  className="pb-6 text-white"
                >
                  <h3 className="font-bold text-xl font-oswald">
                    {organizer.name}
                  </h3>
                  <p className="text-[10px] mt-2 font-press-start text-black">
                    {organizer.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
          <Modal open={open} onClose={() => setOpen(false)}>
            {selectedOrganizer && (
              <div
                className="
                  absolute top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  w-[95vw] max-w-5xl
                  max-h-[90vh]
                  overflow-y-auto
                  bg-white
                  rounded-xl
                  shadow-2xl
                "
              >
                <button
                  onClick={() => setOpen(false)}
                  className="
                    absolute top-3 right-3
                    z-10
                    w-10 h-10
                    rounded-full
                    bg-black/70
                    text-white
                    text-xl
                    flex items-center justify-center
                    hover:bg-black
                    active:scale-95
                  "
                  aria-label="Close modal"
                >
                  ✕
                </button>
                <div className="flex flex-col md:flex-row">
                  {/* Left */}
                  <div className="flex flex-col items-center text-center bg-amber-300 p-6 md:w-1/3">
                    <img
                      src={selectedOrganizer.photo}
                      alt={selectedOrganizer.name}
                      className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover rounded-full mb-4 shadow-md"
                    />

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                      {selectedOrganizer.name}
                    </h2>

                    <p className="text-xs sm:text-sm md:text-base">
                      {selectedOrganizer.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="flex-1 p-5 sm:p-6 text-black">
                    <p className="text-sm sm:text-base">
                      Lorem ipsum dolor sit amet...
                    </p>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-8 mb-4 text-center md:text-left">
                      Stats
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] sm:text-sm font-press-start">
                        <p>Serve:</p>
                        <Rating value={selectedOrganizer.rating.server} />
                        <p>Receive:</p>
                        <Rating value={selectedOrganizer.rating.receive} />
                        <p>Spike:</p>
                        <Rating value={selectedOrganizer.rating.spike} />
                        <p>Communication:</p>
                        <Rating
                          value={selectedOrganizer.rating.communication}
                        />
                      </div>

                      <img
                        src={selectedOrganizer.pixelart}
                        alt={selectedOrganizer.name}
                        className="w-28 sm:w-36 md:w-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </section>
      <section className="w-full h-screen text-center">3</section>
    </>
  );
}

export default Header;
