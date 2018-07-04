import React from 'react'
import {Switch} from '../switch/switch'

class Toggle extends React.Component {
    state = {on: false}
    toggle = () =>
        this.setState(
            ({on}) => ({on: !on}),
            () => {
                this.props.onToggle(this.state.on ? 'on' : 'off')
            },
        )
    render() {
        const {on} = this.state
        return <Switch on={on} onClick={this.toggle} />
    }
}

export default Toggle
