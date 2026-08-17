import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    return null;
};

export default ScrollToAnchor;
