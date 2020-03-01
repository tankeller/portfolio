import React from "react"
import { Link } from "gatsby"

import "./blog-preview.css"

const BlogPreview = ({ blog }) => {
  return (
    <div className="blog-preview">
      <h4>{blog.frontmatter.title}</h4>
      <div className="blog-shorttext">{blog.excerpt}</div>
      <Link to={`${blog.frontmatter.slug}`}>read full post &rarr;</Link>
    </div>
  )
}

export default BlogPreview
