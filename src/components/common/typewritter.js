import "../../styles/common.css";

import React, { useRef, useEffect } from "react";

const Typewriter = ({ text }) => {
  const typewriterRef = useRef(null);
  const words = text;
  let i = 0;
  let timer;

  function typingEffect() {
    let word = words[i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        typewriterRef.current.innerHTML += word.shift();
      } else {
        deletingEffect();
        return false;
      }
      timer = setTimeout(loopTyping, 300);
    };
    loopTyping();
  }

  function deletingEffect() {
    let word = words[i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        typewriterRef.current.innerHTML = word.join("");
      } else {
        if (words.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
        typingEffect();
        return false;
      }
      timer = setTimeout(loopDeleting, 110);
    };
    loopDeleting();
  }

  useEffect(() => {
    typingEffect();
  }, []);

  return (
    <div id="typewriter">
      <div id="text" ref={typewriterRef}></div>
      <div id="cursor"></div>
    </div>
  );
};

export default Typewriter;
