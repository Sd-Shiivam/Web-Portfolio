import React, { useEffect, useState, useRef } from 'react';

const ViewCount = () => {
    const [viewCount, setViewCount] = useState(0);
    const hasFetched = useRef(false);
    const expiryTime = 300000;

    useEffect(() => {
        const fetchViewCount = async () => {
            try {
                const response = await fetch('https://foodmend.pythonanywhere.com/pf/sd_shiivam/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const now = new Date().getTime();
                const expiry = now + expiryTime;
                localStorage.setItem('viewCount', JSON.stringify({ count: data.view_count, expiry }));
                setViewCount(data.view_count);
            } catch (error) {
                console.error('Error fetching view count:', error);
            }
        };

        const checkLocalStorage = () => {
            const storedData = localStorage.getItem('viewCount');
            if (storedData) {
                const { count, expiry } = JSON.parse(storedData);
                const now = new Date().getTime();
                if (now < expiry) {
                    setViewCount(count);
                } else {
                    fetchViewCount();
                }
            } else {
                fetchViewCount();
            }
        };
        if (!hasFetched.current) {
            checkLocalStorage();
            hasFetched.current = true;
        }
    }, []);

    return (
        <>{viewCount}</>
    );
};

export default ViewCount;
