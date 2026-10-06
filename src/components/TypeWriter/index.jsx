import { useEffect, useState } from 'react';
const titles = ["passionné de cybersécurité", "développeur", "joueur de CTF", "secouriste"];

function TypeWriter({ setTitle }) {
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < titles[index].length) {
            const timeout = setTimeout(() => {
                setTitle((prev) => prev + titles[index][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 80); // Adjust typing speed

            return () => clearTimeout(timeout);
        } else if (charIndex === titles[index].length) {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setTitle(""); // Clear the title before typing the next word
                setIndex((prev) => (prev + 1) % titles.length); // Loop back to the first word
            }, 1600); // Pause before switching to the next word

            return () => clearTimeout(timeout);
        }
    }, [charIndex, index, setTitle]);

    return null;
}

export default TypeWriter;
