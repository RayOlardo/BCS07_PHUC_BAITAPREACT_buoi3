import React, { Component } from 'react';
import ListShoes from './ListShoes';
import { shoesArr } from './DataShoes';
import ModalExample from './ModalExample';

export default class ShoesShop extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center text-danger'>Shoes Shop</h1>
        <div className='container mt-5'>
          <div className='row'>
            {shoesArr.map((item, index) => (
              <ListShoes item={item} key={index} />
            ))}
       
          </div>
        </div>
      </div>
    );
  }
}
