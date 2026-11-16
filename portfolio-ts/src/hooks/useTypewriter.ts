import { useEffect, useState } from "react";

export function useTypewriter(words: readonly string[]): string {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const nextText = isDeleting
      ? current.substring(0, text.length - 1)
      : current.substring(0, text.length + 1);

    let delay = isDeleting ? 40 : 75;
    if (!isDeleting && nextText === current) delay = 1800;
    if (isDeleting && nextText === "") delay = 400;

    const id = window.setTimeout(() => {
      setText(nextText);
      if (!isDeleting && nextText === current) {
        setIsDeleting(true);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }, delay);

    return () => window.clearTimeout(id);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}
