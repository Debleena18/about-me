import "../../styles/common.css";
import React, { useRef, useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const typewriterRef = useRef(null);
  const [index, setIndex] = useState(0);
  const words = text;
  let timer;

  useEffect(() => {
    function typingEffect() {
      let word = words[index].split("");
      const loopTyping = () => {
        if (word.length > 0) {
          typewriterRef.current.textContent += word.shift();
        } else {
          deletingEffect();
          return false;
        }
        timer = setTimeout(loopTyping, 300);
      };
      loopTyping();
    }

    function deletingEffect() {
      let word = words[index].split("");
      const loopDeleting = () => {
        if (word.length > 0) {
          word.pop();
          typewriterRef.current.textContent = word.join("");
        } else {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          typingEffect();
          return false;
        }
        timer = setTimeout(loopDeleting, 110);
      };
      loopDeleting();
    }

    typingEffect();

    return () => {
      clearTimeout(timer);
    };
  }, [index, words]);

  return (
    <div id="typewriter">
      <div id="text" ref={typewriterRef}></div>
      <div id="cursor"></div>
    </div>
  );
};

export default Typewriter;
