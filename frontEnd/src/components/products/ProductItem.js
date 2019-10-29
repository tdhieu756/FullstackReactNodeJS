import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="col-4">
              <div className="card text-left">
                <img className="card-img-top" src={this.props.pImage} alt="hinh san pham" />
                <div className="card-body">
                  <h4 className="card-title float-left">{this.props.pName}</h4>
                  <p className="card-text float-right">{this.props.pPrice}$</p>
                </div>
              </div>
            </div>
        );
    }
}

export default ProductItem;