import React from "react"
import PropTypes from "prop-types"
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }
  goToStore = e => {
    e.preventDefault()
    const storeName = this.storeInput.value
    this.props.history.push(`/store/${storeName}`)
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={storeInput => {
            this.storeInput = storeInput
          }}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker
