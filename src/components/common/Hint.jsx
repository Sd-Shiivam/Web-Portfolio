import React, { useEffect, useState } from 'react';


const Hint = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    const hintStyle = {
        display: visible ? 'block' : 'none',
        ursor: "pointer",
        bottom: '4vh',
        left: '38vw',
        padding: '30px 79px',
        fontSize: '1vw',
        borderRadius: '30px 0px',
        fontFamily: 'd',
        position: 'absolute',
        color: 'green',
        backgroundColor: 'black',
        border: '1px green double'
    };

    const openGit = () => {
        window.location = "https://github.com/Sd-Shiivam/Web-Portfolio"
    }

    return (
        <div style={hintStyle} onClick={openGit}>
            Portfolio - Sd-Shiivam
        </div>
    );
};

export default Hint;