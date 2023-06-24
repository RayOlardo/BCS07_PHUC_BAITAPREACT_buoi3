import React, { Component } from 'react'
import { shoesArr } from './DataShoes'
import ModalExample from './ModalExample'
export default class ListShoes extends Component {
  render() {
    console.log(this.props.item)
    const {image, name, price} = this.props.item
    return (
        <div className='col-4 '>
             <div>
             <img className='img-fluid' src={image} alt="shoes" />
                <h3 className='fs-5'>{name}</h3>
                <p>{price}</p>
                <button className='btn btn-dark me-3'>
                    add to carts
                </button>
              <ModalExample item={this.props.item}/>
             </div>
                
        </div>

    )
  }
}
