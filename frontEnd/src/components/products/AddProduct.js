import React, { Component } from 'react';
import axios from 'axios';

const AddProductAction = (pName, pPrice, pImage) => {
    return (        
        axios.post('/add', {
            pName: pName,
            pPrice: pPrice,
            pImage: pImage,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        )
}
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pName: "",
            pPrice: "",
            pImage: ""
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleClick = () => {
        console.log(JSON.stringify(this.state));
        var { pName, pPrice, pImage } = this.state;
        if(pName!== ""){
            AddProductAction(pName, pPrice, pImage);
        }
    }
    render() {
        return (
            <div className="card text-left" style={{ marginTop: '30px' }}>
                <div className="card-body form-group col-8 mx-auto">
                    <h4 className="card-title">Add Product</h4>
                    <div action="" method="post">
                        <form>
                            <div className="form-group">
                                <label htmlFor>Tên sản phẩm</label>
                                <input onChange={(event) => this.isChange(event)} type="text" name="pName" id className="form-control" placeholder aria-describedby="helpId" />
                                <small id="nameText" className="text-muted">Nhập tên sản phẩm</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor>Giá sản phẩm</label>
                                <input onChange={(event) => this.isChange(event)} type="text" name="pPrice" id className="form-control" placeholder aria-describedby="helpId" />
                                <small id="nameText" className="text-muted">Nhập giá sản phẩm</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor>Ảnh sản phẩm</label>
                                <input onChange={(event) => this.isChange(event)} type="text" name="pImage" id className="form-control" placeholder aria-describedby="helpId" />
                                <small id="nameText" className="form-text text-muted">Nhập ảnh sản phẩm</small>
                            </div>
                            <button type="reset" onClick={() => this.handleClick()} className="btn btn-info">Add new</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddProduct;