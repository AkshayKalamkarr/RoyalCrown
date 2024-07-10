"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";


export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:'/assets/images/couple.jpg',
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:'/assets/images/couple.jpg',
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:'/assets/images/couple.jpg',
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:'/assets/images/couple.jpg',
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:'/assets/images/couple.jpg',
  },
];

function Hero() {
  return <HeroParallax products={products} />;
}
export default Hero