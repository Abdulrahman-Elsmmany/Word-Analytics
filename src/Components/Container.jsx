import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/Constants";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numOfCharachters: text.length,
    instagramCharachters: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharachters: FACEBOOK_MAX_CHARACTERS - text.length,
    numWords: text.split(/\s/).filter((word) => word !== "").length,
  };
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
