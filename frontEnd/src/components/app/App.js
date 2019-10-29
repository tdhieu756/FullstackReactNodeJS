import React, { Component, Fragment } from 'react';
import HeadTitle from '../headTitle/HeadTitle';
import Products from '../products/Products';
import ProductItem from '../products/ProductItem';
import axios from 'axios';


const getProductsData = () =>
  axios.get('/getdata')
    .then((res) => res.data).catch((err) => console.log(err))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentWillMount() {
    if (this.state.data === null) {
      getProductsData().then((res) => {
        this.setState({
          data: res
        })
      })
    }
  }

  showProduct = () => {
    if (this.state.data !== null) {
      return (
        this.state.data.map((item, key) => {
          return (
            <ProductItem
              key={key}
              pImage={item.product_image}
              pName={item.product_name}
              pPrice={item.product_price}
            />
          )
        })
      )
    }
  }
  render() {
    console.log(this.state.data);

    return (
      <Fragment>
        <HeadTitle></HeadTitle>
        <Products>
          {this.showProduct()}
        </Products>
      </Fragment>
    );
  }
}

export default App;