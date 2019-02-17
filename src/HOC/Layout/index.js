import React from "react"
import "../../styles/bootstrap.css"

import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </>
    )
  }
}

export default Layout
