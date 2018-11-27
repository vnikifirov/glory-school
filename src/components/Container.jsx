import React, { Component } from "react";

import Sidebar from "./Sidebar";
import AddStudent from "./windowLayouts/AddStudent";
import Students from "./windowLayouts/Students";
import Settings from "./windowLayouts/Settings";
import About from "./windowLayouts/About";

import { connect } from "react-redux";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainList: [
        { content: AddStudent },
        { content: Students },
        { content: Settings },
        { content: About }
      ],
      activeTab: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeTab !== this.props.activeTab) {
      this.setState({ activeTab: nextProps.activeTab });
    }
  }

  render() {
    const main = this.state.mainList.find(
      (item, index) => index === this.state.activeTab
    );
    return (
      <div className="pane-group">
        <Sidebar i18n={this.props.i18n} locale={this.props.locale} />
        <main.content i18n={this.props.i18n} locale={this.props.locale} />
      </div>
    );
  }
}

const mapStateToProps = ({ tab }) => ({
  activeTab: tab.activeTab
});

export default connect(mapStateToProps)(Container);
