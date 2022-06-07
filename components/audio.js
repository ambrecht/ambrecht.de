import { useState, useEffect } from 'react';

export default function Player({ children }, { url }) {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(url));
  }, []);

  return (
    <button
      onClick={() => {
        audio.loop = true;
        audio?.play();
      }}
    >
      {children}
    </button>
  );
}
