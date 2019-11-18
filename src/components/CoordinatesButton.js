import React from 'react'

export default class CoordinatesButton extends React.Component {
    handleClickEvent = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };

    render() {
        return <button onClick={this.handleClickEvent}>Button</button>
    }
}