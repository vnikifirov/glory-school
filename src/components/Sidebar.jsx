import React, { Component } from "react";
import { PersonAdd, List, Settings, Info } from "@material-ui/icons";

import { connect } from "react-redux";

import { activateTab } from "../actions/tabActions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paneList: [
        { title: "إضافة تلميذ", icon: PersonAdd },
        { title: "قائمة التلاميذ", icon: List },
        { title: "الإعدادات", icon: Settings },
        { title: "حول", icon: Info }
      ],
      activeTab: 0
    };
  }

  activateTab = activeTab => {
    this.props.activateTab(activeTab);
    this.setState({ activeTab: activeTab });
  };

  render() {
    const iconToRight = {
      float: "right",
      marginLeft: "7px",
      marginRight: "15px"
    };

    const iconStyles = {
      marginRight: "15px",
      marginLeft: "7px",
      marginTop: "3px",
      fontSize: "18px",
      display: "inline",
      width: "19px",
      height: "18px",
      float: "right",
      opacity: "0.75"
    };

    const { paneList, activeTab } = this.state;
    return (
      <div className="pane-sm sidebar">
        <nav className="nav-group">
          <h5 className="nav-group-title">الخيارات</h5>
          {paneList.map((item, index) =>
            activeTab === index ? (
              <a className="nav-group-item active" key={index}>
                <item.icon style={iconStyles} />
                {item.title}
              </a>
            ) : (
              <a
                className="nav-group-item"
                onClick={this.activateTab.bind(this, index)}
                key={index}>
                <item.icon style={iconStyles} />
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
