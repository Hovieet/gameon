import ball from "./ball.png";
import lenka from "./lenka.png";
import vitek from "./vitek.png";
import misa from "./misa.png";
import header from "./headerbg.jpeg";
import full from "./fullpoint.png";
import half from "./halfpoint.png";
import nopoint from "./nopoint.png";
import { ArrowRight } from "lucide-react";
import lenka_pixel from "./lenka_pixelart.png";
import vitek_pixel from "./vitek_pixelart.png";
import misa_pixel from "./misa_pixelart.png";

export const img = {
  ball,
  header,
  full,
  half,
  nopoint,
};

export const icons = {
  arrowright: ArrowRight,
};

export const organizers = [
  {
    id: 1,
    name: "Lenka Tikovská",
    description: "Co-founder",
    photo: lenka,
    pixelart: lenka_pixel,
    links: {
      instagram: "https://instagram.com/lenka",
      facebook: "https://facebook.com/lenka",
    },
    email: "",
    rating: {
      server: 2.5,
      receive: 3,
      spike: 2,
      communication: 5,
    },
  },

  {
    id: 2,
    name: "Vítek Hoang",
    description: "Co-founder",
    photo: vitek,
    pixelart: vitek_pixel,
    links: {
      instagram: "https://instagram.com/vitek",
      facebook: "https://facebook.com/vitek",
    },
    email: "",
    rating: {
      server: 4,
      receive: 3.5,
      spike: 4,
      communication: 2,
    },
  },
  {
    id: 3,
    name: "Míša Luongová",
    description: "Co-founder",
    photo: misa,
    pixelart: misa_pixel,
    links: {
      instagram: "https://instagram.com/misa",
      facebook: "https://facebook.com/misa",
    },
    email: "",
    rating: {
      server: 4.5,
      receive: 3,
      spike: 2.5,
      communication: 4.5,
    },
  },
];

export const hamburger = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["65%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "65%"], //
    },
  },
};
