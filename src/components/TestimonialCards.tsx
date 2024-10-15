"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = [
  {
    quote:
      "Enrolling here completely changed how I approach music. I found my unique sound, and the guidance from top-notch instructors made all the difference!",
    name: "Alex Johnson",
    title: "Guitarist",
  },
  {
    quote:
      "The support and sense of community are incredible. I've evolved not just as a pianist but as a performer, all thanks to the school's holistic approach.",
    name: "Samantha Lee",
    title: "Pianist",
  },
  {
    quote:
      "This school gave me the confidence and the skills to elevate my singing. The one-on-one coaching was exactly what I needed, and I'm so thankful for it.",
    name: "Michael Chen",
    title: "Vocalist",
  },
  {
    quote:
      "It’s rare to find a mentor who truly understands your vision, but this school paired me with the perfect violin instructor to help me reach my goals.",
    name: "Emily Taylor",
    title: "Violinist",
  },
  {
    quote:
      "The music production courses were a game-changer. I learned the finer details of production and would highly recommend this program to future producers.",
    name: "Chris Morales",
    title: "Music Producer",
  },
];

function TestimonialCards() {
  return (
    <div
      className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center 
    justify-center overflow-hidden"
    >
      <h2 className="text-3xl font-black text-center mb-8">
        Hear our Hormony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={Testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
