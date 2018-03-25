import React from "react"

export class AddFishForm extends React.Component {
  createFish = e => {
    e.preventDefault()
    const fish = {
      name: this.nameRef.value,
      price: parseFloat(this.priceRef.value),
      status: this.statusRef.value,
      desc: this.descRef.value,
      image: this.imageRef.value
    }
    this.props.addFish(fish)
    e.currentTarget.reset()
  }

  render() {
    return (
      <div>
        <form className="fish-edit" onSubmit={this.createFish}>
          <input
            name="name"
            ref={nameRef => (this.nameRef = nameRef)}
            type="text"
            placeholder="Name"
          />
          <input
            name="price"
            ref={priceRef => (this.priceRef = priceRef)}
            type="text"
            placeholder="Price"
          />
          <select name="status" ref={statusRef => (this.statusRef = statusRef)}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea
            name="desc"
            ref={descRef => (this.descRef = descRef)}
            placeholder="Description"
          />
          <input
            name="image"
            ref={imageRef => (this.imageRef = imageRef)}
            type="text"
            placeholder="Image"
          />
          <button type="submit">+ Add Fish</button>
        </form>
      </div>
    )
  }
}

export default AddFishForm
