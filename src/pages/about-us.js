import React from "react"

import Layout from "../HOC/Layout"
import SEO from "../components/SEO"

class AboutUsPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title='About Us'>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div>
          About us page
        </div>
      </Layout>
    )
  }
}

export default AboutUsPage
