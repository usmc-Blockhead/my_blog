// CanvasImageResizer.js
import React, { useEffect, useState } from "react";

export function CanvasImageResizer({ imageUrl, targetHeight = 200 }) {
    const [resizedImage, setResizedImage] = useState(null);

    useEffect(() => {
        const loadImageAndResize = async () => {
            const image = new Image();
            image.crossOrigin = "Anonymous"; // Handle CORS
            image.src = imageUrl;

            image.onload = () => {
                const originalWidth = image.width;
                const originalHeight = image.height;
                const aspectRatio = originalWidth / originalHeight;
                const newWidth = targetHeight * aspectRatio;

                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                canvas.width = newWidth;
                canvas.height = targetHeight;

                ctx.drawImage(image, 0, 0, newWidth, targetHeight);

                const resizedImageDataUrl = canvas.toDataURL("image/jpeg");
                setResizedImage(resizedImageDataUrl);
            };
        };

        loadImageAndResize();
    }, [imageUrl, targetHeight]);

    return (
        <div>
            {resizedImage ? (
                <img
                    src={resizedImage}
                    alt="Resized"
                />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
}
