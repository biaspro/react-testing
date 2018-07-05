import React from "react";
import PropTypes from "prop-types";
import Switch from "../switch/switch";

class Toggle extends React.Component {
  static propTypes = {
    onToggle: PropTypes.func.required
  };

  state = { on: false };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on ? "on" : "off");
      }
    );
  render() {
    const { on } = this.state;
    return <Switch on={on} onClick={this.toggle} />;
  }
}

export default Toggle;
