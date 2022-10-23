import { graphql, Link, PageProps } from "gatsby"
//import Img, { FixedObject, FluidObject } from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BlogPostDataQuery } from "./__generated__/BlogPostDataQuery"
import SEO from "../components/seo"
//import { BLOCKS } from "@contentful/rich-text-types"

import styles from "./blog-post.module.css"

const BlogPost: React.FC<PageProps<BlogPostDataQuery>> = ({ data }) => {
  // const options = {
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: node => {
  //       const alt = node.data.target.fields.title["en-US"]
  //       //const url = node.data.target.fields.file["en-US"].url
  //       return //<img alt={alt} src={url} className={styles.embeddedImages} />
  //     },
  //     [BLOCKS.PARAGRAPH]: (node, children) => (
  //       <p style={{ marginBottom: "1rem" }}>{children}</p>
  //     ),
  //   },
  // }

  return (
    <Layout>
      <SEO title={data.contentfulPost?.title || ""} />
      <div className={styles.container}>
        <h1 className={styles.title}>{data.contentfulPost?.title}</h1>
        {/* <p className={styles.date}>{data.contentfulBPost?.publishedDate}</p>
        {data.contentfulPost?.featuredImage && (
          <Img
            fluid={data.contentfulPost?.featuredImage?.fluid as FluidObject}
            className={styles.featuredImage}
          />
        )} */}

        {/* {documentToReactComponents(
          data.contentfulPost?.body?.json,
          options
        )}

        <div className={styles.authorContainer}>
          <Img
            fluid={
              data.contentfulPost?.author?.profilePicture
                ?.fluid as FluidObject
            }
            style={{ width: "35%" }}
          /> 
          {/* <div className={styles.authorInfo}>
            <p style={{ fontSize: "small" }}>ABOUT AUTHOR</p>
            <h3 style={{ margin: "4px 0", fontWeight: 600 }}>
              {data.contentfulPost?.author?.name}
            </h3>
            <p>{data.contentfulPost?.author?.bio?.bio}</p>
          </div> */}
        {/* </div> */}
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostDataQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
    }
  }
`

// publishedDate(formatString: "Do MMMM, YYYY")
//       body {
//         json
//       }
//       featuredImage {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       author {
//         name
//         bio {
//           bio
//         }
//         profilePicture {
//           fluid(maxWidth: 150) {
//             ...GatsbyContentfulFluid
//           }
//         }
//       }