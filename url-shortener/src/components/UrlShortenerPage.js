import React, { useState } from 'react';

const UrlShortenerPage = () => {
    const [longUrl, setLongUrl] = useState('');
    const [customCode, setCustomCode] = useState('');
    const [validity, setValidity] = useState('');
    const [shortenedUrls, setShortenedUrls] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!longUrl) {
            alert('Please enter a valid URL');
            return;
        }

        const newShortenedUrl = {
            longUrl,
            shortUrl: `short.ly/${customCode || Math.random().toString(36).substring(2, 8)}`,
            createdAt: new Date().toLocaleString(),
            expiryDate: validity ? new Date(Date.now() + validity * 24 * 60 * 60 * 1000).toLocaleString() : 'Never',
            clicks: 0,
        };

        setShortenedUrls([...shortenedUrls, newShortenedUrl]);
        setLongUrl('');
        setCustomCode('');
        setValidity('');
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter long URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Custom shortcode (optional)"
                    value={customCode}
                    onChange={(e) => setCustomCode(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Validity in days (optional)"
                    value={validity}
                    onChange={(e) => setValidity(e.target.value)}
                />
                <button type="submit">Shorten URL</button>
            </form>
            <h2>Shortened URLs</h2>
            <ul>
                {shortenedUrls.map((url, index) => (
                    <li key={index}>
                        <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a> - {url.longUrl} (Created: {url.createdAt}, Expires: {url.expiryDate}, Clicks: {url.clicks})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UrlShortenerPage;