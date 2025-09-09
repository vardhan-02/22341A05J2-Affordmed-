import React from 'react';

const ShortenedUrlItem = ({ urlData }) => {
    return (
        <div className="shortened-url-item">
            <p>Shortened URL: <a href={urlData.shortUrl} target="_blank" rel="noopener noreferrer">{urlData.shortUrl}</a></p>
            <p>Original URL: {urlData.originalUrl}</p>
            <p>Creation Date: {new Date(urlData.creationDate).toLocaleString()}</p>
            <p>Expiry Date: {urlData.expiryDate ? new Date(urlData.expiryDate).toLocaleString() : 'Never'}</p>
            <p>Click Count: {urlData.clickCount}</p>
        </div>
    );
};

export default ShortenedUrlItem;