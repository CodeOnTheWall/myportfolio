"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function TypeWriter({ pageInfoo }) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Names's ${pageInfoo.name}`,
      "I love thinking in systems and steps",
      "To make processes smooth and efficient",
      "To build and scale businesses",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <>
      <span>{text}</span>
      <Cursor cursorColor="#023e8a" />
    </>
  );
}
