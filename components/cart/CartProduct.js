import React, { Component } from 'react';
import Link from "next/link";
import { connect } from 'react-redux';
import { removeItem, addQuantity, subtractQuantity } from '../../store/actions/actions';
import { toast } from 'react-toastify';

class CartProduct extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);

        toast.error('Removido del carrito', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render() {
        let cartItems = this.props.products.length ?
        (
            this.props.products.map((data, idx) => {
                return (
                    <tr key={idx}>
                        <td className="product-thumbnail">
                            <Link href="#">
                                <a>
                                    {/* <img src={data.image} alt="item" /> */}
                                    <img src={require('../../images/passes/pase_turquesa.png')} alt="item" />  
                                </a>
                            </Link>
                        </td>

                        <td className="product-name">
                            <Link href="#">
                                <a>{data.name}</a>
                            </Link>
                            <ul>
                                <li>Descripción: <strong>{data.description}</strong></li>
                                {/* <li>Size: <strong>XL</strong></li>
                                <li>Material: <strong>Cotton</strong></li> */}
                            </ul>
                        </td>

                        <td className="product-price">
                            <span className="unit-amount">${data.original_price}</span>
                        </td>

                        <td className="product-quantity">
                            <div className="input-counter">
                                <span 
                                    className="minus-btn"
                                    onClick={()=>{this.handleSubtractQuantity(data.id)}}
                                >
                                    <i className="fas fa-minus"></i>
                                </span>
                                <input 
                                    type="text" 
                                    value={data.quantity} 
                                    min="1" 
                                    max={10} 
                                    readOnly={true}
                                    onChange={e => (e)}
                                />
                                <span 
                                    className="plus-btn"
                                    onClick={()=>{this.handleAddQuantity(data.id)}}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>
                        </td>

                        <td className="product-subtotal">
                            <span className="subtotal-amount">${data.original_price * data.quantity}</span>

                            <Link href="#">
                                <a
                                    className="remove"
                                    onClick={(e)=>{e.preventDefault();this.handleRemove(data.id)}}
                                >
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </Link>
                        </td>
                    </tr>
                )
            })
        ): (
            <tr>
                <td className="product-thumbnail" colspan="5">
                    <p>Vacio.</p>
                </td>
            </tr>
        );

        return (
            <>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio Unitario</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartProduct)
