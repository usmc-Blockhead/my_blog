import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify"; // Import DOMPurify to sanitize HTML

// Helper function to extract a safe HTML excerpt
const getHtmlExcerpt = (html, limit) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html; // Parse the HTML string

    // Extract the first paragraph or part of the content
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

const BlogSection = ({
    id,
    title,
    description,
    category,
    imgUrl,
    userId,
    author,
    timestamp,
    user,
    handleDelete,
}) => {
    return (
        <div>
            <div
                className="row pb-4"
                key={id}>
                <div className="col-md-5">
                    <div className="hover-blogs-img">
                        <div className="blogs-img">
                            <img
                                src={imgUrl}
                                alt={title}
                            />
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="text-start">
                        <h6 className="category catg-color">{category}</h6>
                        <span className="title py-2">{title}</span>
                        <span className="meta-info">
                            <p className="author">{author}</p> -&nbsp;
                            {timestamp.toDate().toDateString()}
                        </span>
                    </div>
                    <div
                        className="short-description text-start"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                getHtmlExcerpt(description, 150)
                            ), // Limit to 150 characters
                        }}></div>
                    <Link to={`/detail/${id}`}>
                        <button className="btn btn-read">Read More</button>
                    </Link>
                    {user && user.uid === userId && (
                        <div style={{ float: "right" }}>
                            <FontAwesome
                                name="trash"
                                style={{ margin: "15px", cursor: "pointer" }}
                                size="2x"
                                onClick={() => handleDelete(id)}
                            />
                            <Link to={`/update/${id}`}>
                                <FontAwesome
                                    name="edit"
                                    style={{ cursor: "pointer" }}
                                    size="2x"
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
