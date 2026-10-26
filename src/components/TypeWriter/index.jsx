import { useEffect, useState } from 'react';
import { useLang } from '../../utils/i18n';

const titlesByLang = {
    fr: ["en recherche d'alternance", "joueur de CTF", "challmaker", "développeur en alternance"],
    en: ["looking for a work-study", "a CTF player", "a CTF challenge maker", "a work-study developer"],
};

// Remonté avec une key par langue (voir sections/Home/Top) pour repartir de zéro
function TypeWriter({ setTitle }) {
    const { lang } = useLang();
    const titles = titlesByLang[lang];
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        setTitle("");
    }, [setTitle]);

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
    }, [charIndex, index, setTitle, titles]);

    return null;
}

export default TypeWriter;
