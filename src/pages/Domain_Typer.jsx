// src/Domain_Typer.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import INFO from '../data/user';

const Domain_Typer = () => {
    const el = useRef(null); // Create a ref for the element to attach Typed.js to

    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: INFO.homepage_about.title,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        };

        // Initialize Typed.js
        const typed = new Typed(el.current, options);

        // Cleanup function to destroy Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={el} className="domain-text" />; // Attach ref to the span element
};

export default Domain_Typer;
