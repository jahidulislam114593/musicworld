"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Mastering Music Theory: A Deep Dive",
    description:
      "Explore the core concepts of music theory and unlock new levels of creativity and skill in your music.",
    slug: "mastering-music-theory",
    isFeatured: true,
  },
  {
    title: "The Craft of Songwriting: From Idea to Hit",
    description:
      "Discover the secrets behind great songwriting from professionals, covering everything from lyrics to melody.",
    slug: "the-craft-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Instrument Mastery: Taking Your Skills to the Next Level",
    description:
      "Gain advanced techniques and strategies to achieve true mastery of your instrument.",
    slug: "instrument-mastery",
    isFeatured: true,
  },
  {
    title: "Music Production 101: From Basics to Beats",
    description:
      "A step-by-step guide to music production, perfect for beginners looking to create their own tracks.",
    slug: "music-production-101",
    isFeatured: true,
  },
  {
    title: "Live Performance Masterclass: Captivate Your Audience",
    description:
      "Learn how to engage and impress your audience with proven performance techniques and expert insights.",
    slug: "live-performance-masterclass",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing: Grow Your Audience Online",
    description:
      "Discover how to effectively market your music in the digital space, from social media to streaming platforms.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

function UpcommingWebinar() {
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webiner) => ({
              title: webiner.title,
              description: webiner.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcommingWebinar;
