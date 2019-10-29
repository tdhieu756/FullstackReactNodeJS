import React, { Component } from 'react';
import AddProduct from './AddProduct';

class Products extends Component {
    render() {
        return (
            <div className="container">
                <AddProduct></AddProduct>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Products;