import React, { Component } from "react";
const { remote } = window.require("electron");
const win = remote.getCurrentWindow();

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMaximized: win.isMaximized()
    };
  }

  onMinimize = () => {
    win.minimize();
  };

  onRestore = () => {
    win.restore();
  };

  onMaximize = () => {
    win.maximize();
  };

  onClose = () => {
    win.close();
  };

  componentWillMount() {
    win.on("maximize", this.updateState);
    win.on("unmaximize", this.updateState);
  }

  updateState = () => {
    this.setState({ isMaximized: win.isMaximized() });
  };

  render() {
    const { isMaximized } = this.state;
    return (
      <header className="toolbar toolbar-header">
        <div className="toolbar-actions">
          <button className="btn btn-default pull-right" onClick={this.onClose}>
            <span className="icon icon-cancel" />
          </button>
          {isMaximized ? (
            <button
              className="btn btn-default pull-right"
              onClick={this.onRestore}>
              <span className="icon icon-resize-small" />
            </button>
          ) : (
            <button
              className="btn btn-default pull-right"
              onClick={this.onMaximize}>
              <span className="icon icon-resize-full" />
            </button>
          )}
          <button
            className="btn btn-default pull-right"
            onClick={this.onMinimize}>
            <span className="icon icon-minus" />
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
