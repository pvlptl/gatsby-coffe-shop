import React from "react"
import { Button } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Button color="danger">Danger!</Button>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </>
    )
  }
}

export default Layout
