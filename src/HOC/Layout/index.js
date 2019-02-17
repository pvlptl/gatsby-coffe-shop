import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

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
