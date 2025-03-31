import { useEffect, useState } from 'react';

function TypeWriter({ setTitle }) {
    const titles = ["développeur", "étudiant"];
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < titles[index].length) {
            const timeout = setTimeout(() => {
                setTitle((prev) => prev + titles[index][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 200); // Adjust typing speed

            return () => clearTimeout(timeout);
        } else if (charIndex === titles[index].length) {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setTitle(""); // Clear the title before typing the next word
                setIndex((prev) => (prev + 1) % titles.length); // Loop back to the first word
            }, 1000); // Pause before switching to the next word

            return () => clearTimeout(timeout);
        }
    }, [charIndex, index, setTitle, titles]);

    return null;
}

export default TypeWriter;
