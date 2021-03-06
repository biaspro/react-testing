import "./switch.styles.css";
import PropTypes from "prop-types";
import React from "react";

const noop = () => {};

class Switch extends React.Component {
  static propTypes = {
    on: PropTypes.bool,
    onClick: PropTypes.func
  };

  render() {
    const { on, "aria-label": ariaLabel, onClick, ...props } = this.props;
    const btnClassName = [
      "toggle-btn",
      on ? "toggle-btn-on" : "toggle-btn-off"
    ].join(" ");
    return (
      <label
        aria-label={ariaLabel || "Toggle"}
        style={{ display: "inline-block" }}
      >
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={noop}
          onClick={onClick}
          data-testid="toggle-input"
        />
        <span className={btnClassName} {...props} />
      </label>
    );
  }
}

export default Switch;
