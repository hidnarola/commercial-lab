import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { Header } from "./Header/Header";


class Layout extends Component {
  state = {
    open : false
  }

  handleopen = (value) => {
    this.setState({open: value})
  }

  render() {

    return (
      <div className={this.state.open ? "main open" : "main"}>
        <Sidebar open={this.state.open} handleopen={this.handleopen} />
        <div className="layout">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

// export default withRouter(Layout);
export default Layout;
