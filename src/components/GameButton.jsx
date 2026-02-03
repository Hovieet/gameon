import { icons } from "../assets/assets";

export default function GameButton({ text = "Event", onClick }) {
  return (
    <button
      onClick={onClick}
      className="group bg-[#aa7bef] text-[10px] font-press-start py-2 px-5 text-white rounded-xl inline-flex items-center gap-2 
             ring-2 ring-gray-600 ring-offset-1 transition-all duration-150 hover:ring-0 hover:bg-[#9c65e0] hover:scale-105 cursor-pointer"
    >
      <span>{text}</span>
      <icons.arrowright className="text-base transition-transform group-hover:translate-x-2 animate-pulse" />
    </button>
  );
}
