import React from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

// Helper function to get HTML-safe excerpt (showing only a part of the HTML)
const getHtmlExcerpt = (html, limit) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html; // Parse the HTML string

    // Extract the first paragraph (or limited content)
    const paragraphs = tempDiv.querySelectorAll("p");
    if (paragraphs.length > 0) {
        let excerpt = paragraphs[0].outerHTML; // Use the first paragraph as an excerpt

        // Optionally, trim the content if it's too long
        if (excerpt.length > limit) {
            excerpt = excerpt.substring(0, limit) + "...";
        }

        return excerpt;
    }

    // If there are no paragraphs, return plain text as a fallback
    return tempDiv.innerText.substring(0, limit) + "...";
};

const Card = ({ title, description, imgUrl, id, likes, comments }) => {
    return (
        <div className="col-sm-6 col-lg-4 mb-5">
            <div className="related-content card text-decoration-none overflow-hidden h-100">
                <img
                    className="related-img card-img-top"
                    src={imgUrl}
                    alt={title}
                />
                <div className="related-body card-body p-4">
                    <h5 className="title text-start py-2">{title}</h5>

                    {/* Render a sanitized HTML excerpt */}
                    <p
                        className="short-description text-start"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                getHtmlExcerpt(description, 150)
                            ), // Limit content to 150 characters
                        }}></p>

                    <div className="d-flex justify-content-between">
                        <Link
                            to={`/detail/${id}`}
                            style={{ textDecoration: "none" }}>
                            <span className="text-primary">Read More</span>
                        </Link>
                        <div>
                            <i className="bi bi-hand-thumbs-up m-2" />
                            {likes.length}
                            <i className="bi bi-chat-left m-2" />
                            {comments.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
