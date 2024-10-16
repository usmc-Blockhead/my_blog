import { Jimp } from "jimp";
import { useEffect, useState } from "react";

export function JimpDemo({ imageUrl }) {
    const [jimpImage, setJimpImage] = useState(undefined);
    const [image, setImage] = useState(undefined);
    const [transformedImage, setTransformedImage] = useState(undefined);

    // loading an image every time imageUrl changes
    useEffect(() => {
        const loadImage = async () => {
            try {
                const response = await fetch(imageUrl);
                const arrayBuffer = await response.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const jimpImage = await Jimp.read(buffer);
                setJimpImage(jimpImage);

                const image = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
                setImage(image);
            } catch (error) {
                console.error("Error loading the image:", error);
            }
        };

        loadImage();
    }, [imageUrl]);

    // Resize the image to fit a 200px tall container, maintaining aspect ratio
    useEffect(() => {
        if (jimpImage) {
            const transformImage = async () => {
                // Resize the image to 200 px height while maintaining aspect ratio
                const transformed = jimpImage.resize(Jimp.AUTO, 200);

                // Convert the transformed image to Base64 and store it
                const transformedImage = await transformed.getBase64Async(
                    Jimp.MIME_JPEG
                );
                setTransformedImage(transformedImage);
            };

            transformImage();
        }
    }, [jimpImage]);

    return image && jimpImage ? (
        <>
            <h1>Original Image</h1>
            <img
                className="originalImage"
                src={image}
                alt="Original"
            />
            <h1>Transformed Image</h1>
            <img
                className="transformedImage"
                src={transformedImage}
                alt="Transformed"
            />
        </>
    ) : (
        <>Loading...</>
    );
}
