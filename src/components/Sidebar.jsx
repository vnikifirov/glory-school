import React, { Component } from "react";
import { connect } from "react-redux";
import { activateTab } from "../actions/tabActions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.i18n = props.i18n;
    this.state = {
      paneList: [
        {
          title: this.i18n.translate(
            "REGISTER_NEW_STUDENT",
            "Register new Student"
          ),
          icon: "icon icon-user-add"
        },
        {
          title: this.i18n.translate("STUDENTS_LIST", "Students list"),
          icon: "icon icon-list"
        },
        {
          title: this.i18n.translate("SETTINGS", "Settings"),
          icon: "icon icon-cog"
        },
        {
          title: this.i18n.translate("ABOUT", "About"),
          icon: "icon icon-info"
        }
      ]
    };
  }

  activateTab = activeTab => {
    this.props.activateTab(activeTab);
  };

  render() {
    const iconStyles = {
      marginRight: "15px",
      marginLeft: "7px",
      float: "right"
    };

    const { paneList } = this.state;
    const { activeTab } = this.props;
    return (
      <div className="pane-sm sidebar">
        <nav className="nav-group">
          <h5 className="nav-group-title">
            {this.i18n.translate("OPTIONS", "Options")}
          </h5>
          {paneList.map((item, index) =>
            activeTab === index ? (
              <a className="nav-group-item active" key={index}>
                <span className={item.icon} style={iconStyles} />
                {item.title}
              </a>
            ) : (
              <a
                className="nav-group-item"
                onClick={this.activateTab.bind(this, index)}
                key={index}>
                <span className={item.icon} style={iconStyles} />
                {item.title}
              </a>
            )
          )}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ tab }) => ({
  activeTab: tab.activeTab
});

export default connect(
  mapStateToProps,
  { activateTab }
)(Sidebar);
