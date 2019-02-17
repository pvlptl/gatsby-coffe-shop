import React from "react"
import SEO from "../components/SEO"
import Header from "../components/Header";

class AboutUsPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="About Us"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <>
          <Header/>
          About us page
        </>
      </>
    )
  }
}

export default AboutUsPage
