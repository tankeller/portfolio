import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import BlogPreview from "../components/blog-post/blog-preview"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx {
        blogs: nodes {
          frontmatter {
            title
            slug
            date(formatString: "YYYY MMMM DD")
          }
          excerpt
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="blog-listing">
        {data.allMdx.blogs.map((blog, index) => {
          return <BlogPreview key={index} blog={blog} />
        })}
      </div>
    </Layout>
  )
}

export default Blog
