import React from 'react'

export default class DelayedButton extends React.Component {
  render() {
    return (
      <button
        onClick={(e) => {
          e.persist()
          setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
        }}
      />
    )
  }
}
