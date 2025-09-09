import React from 'react';
import ShortenedUrlItem from '../components/ShortenedUrlItem';

const StatisticsPage = ({ shortenedUrls }) => {
    return (
        <div>
            <h1>Statistics</h1>
            {shortenedUrls.length === 0 ? (
                <p>No shortened URLs available.</p>
            ) : (
                <ul>
                    {shortenedUrls.map((url) => (
                        <ShortenedUrlItem key={url.id} url={url} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StatisticsPage;