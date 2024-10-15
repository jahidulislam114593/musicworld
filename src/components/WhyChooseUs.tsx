"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicContent = [
  {
    title: "Unleash Your Unique Sound: A Path to Musical Mastery",
    description:
      "Start a personalized musical journey with us. Our tailored lessons are designed to meet your individual goals, helping you grow creatively and master your instrument in a way that reflects your unique style.",
  },
  {
    title: "Find Your Rhythm: Your Personal Musical Adventure Awaits",
    description:
      "Explore music in a way that’s all about you. Our instructors focus on your needs, offering a learning experience that inspires creativity and helps you master your instrument on your own terms.",
  },
  {
    title: "Craft Your Own Musical Story: A Journey with Us",
    description:
      "Join us for a musical journey tailored to your aspirations. With our support, you’ll unlock your full potential, building skills and creativity that bring your musical dreams to life.",
  },
  {
    title: "Real-Time Feedback for Real Results",
    description:
      "Dive into an engaging learning experience where feedback is immediate, allowing you to fine-tune your skills in real-time. This interactive approach helps solidify your understanding of music and performance techniques.",
  },
  {
    title: "Innovative Curriculum for Modern Musicians",
    description:
      "Stay ahead with our forward-thinking curriculum, regularly updated with the latest trends in music education. You’ll learn with the most relevant tools and methods, keeping your skills current and competitive.",
  },
  {
    title: "Endless Growth with Unlimited Resources",
    description:
      "Discover a wealth of learning materials and courses at your fingertips. Our platform ensures you have access to the resources you need to keep advancing and pushing your musical abilities further.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicContent} />
    </div>
  );
}

export default WhyChooseUs;
