import React from "react"

const BlogPreview = ({blog}) => {
    return (
        <div className="blog-preview">
            <h4 className="blog-title">{blog.title}</h4>
            <div className="blog-shorttext">
                {blog.excerpt}
            </div>
        </div>
    )
}

export const BlogPreview;