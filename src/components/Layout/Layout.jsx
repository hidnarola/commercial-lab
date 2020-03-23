import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { Header } from "./Header/Header";
class Layout extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <>
        <Sidebar />
        <div className="layout">
          <Header />
          {this.props.children}
        </div>
      </>
    );
  }
}

// export default withRouter(Layout);
export default Layout;
