import React from 'react'
import { connect } from 'react-redux'
import { setCategory } from '../../reducers/product'

/* -----------------    COMPONENT     ------------------ */

class ProductCategory extends React.Component {
  constructor(props) {
    super(props)
    this.category = this.props.category
  }

  render() {
    return (
      <div
        className="mr3"
        onClick={()=>this.props.setCategory(this.category)}
      >
        <img
          src={`/images/${this.category}/7.jpg`}
          className="br-100 pa1 ba b--black-10 h3 w3"
          alt={`${this.category} avatar`}
          style={{WebkitFilter: 'grayscale(100%)'}}
          />
        <h2 className="f6 gray fw2 ttu tracked">{this.category}</h2>
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({})

export default connect(mapProps, { setCategory })(ProductCategory)
