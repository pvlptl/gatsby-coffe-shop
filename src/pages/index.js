import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import SEO from "../components/SEO"
import Header from "../components/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/normalize.css';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <>
          <Header/>
          <Posts>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div key={node.fields.slug}>
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              )
            })}
          </Posts>
        </>
      </>
    )
  }
}

const Posts = styled.div`
    padding: 44px;
`;

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
