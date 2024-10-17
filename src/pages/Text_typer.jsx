// src/Text_typer.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Text_typer = ({ text, speed }) => {
    const el = useRef(null); // Create a ref for the element to attach Typed.js to

    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: [text],  // Use the prop `text` here for the typing effect
            typeSpeed: speed,
            backSpeed: 100,
            backDelay: 3000,
            loop: false
        };

        // Initialize Typed.js
        const typed = new Typed(el.current, options);

        // Cleanup function to destroy Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, [text, speed]); // Re-run effect if `text` prop changes

    return <span ref={el} className="bio-text" />; // Attach ref to the span element
};

export default Text_typer;
