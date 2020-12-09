import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';

const passesColors = [
    require('../../images/passes/pase_fucsia.png'),
    require('../../images/passes/pase_naranja.png'),
    require('../../images/passes/pase_turquesa.png'),
    require('../../images/passes/pase_verde.png'),
    require('../../images/passes/pase_violeta.png'),
    require('../../images/passes/pase_amarillo.png'),
    require('../../images/passes/pase_rojo.png'),
    require('../../images/passes/pase_rosa.png'),
 ];

class Cart extends Component {

    state = {
        display: false
    };

    closeCart = () => {
        this.props.onClick(this.state.display);
    }

    render() {
        let { products, total } = this.props;
        console.log('IN CART JS ',products, total)
        return (
            <div 
                className="modal right fade show shoppingCartModal" 
                style={{
                    display: "block", paddingRight: "16px"
                }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={this.closeCart}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <div className="modal-body">
                            <h3>Mi carrito ({products.length})</h3>

                            <div className="product-cart-content">

                                {products.length > 0 ? products.map((product, idx) => (
                                    <div className="product-cart" key={idx}>
                                        <div className="product-image">
                                            {/* <img src={product.image} alt="image" /> */}
                                            <img src={passesColors[product.color]} alt="image" />
                                        </div>

                                        <div className="product-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>{product.name}</a>
                                                </Link>
                                            </h3>
                                            <span>{product.description} </span>
                                            <div className="product-price">
                                                <span>{product.quantity}</span>
                                                <span>x</span>
                                                <span className="price">${product.original_price}</span>
                                            </div>
                                        </div>
                                    </div>
                                )) : 'Vacio'}
                                
                            </div>

                            <div className="product-cart-subtotal">
                                <span>Subtotal</span>

                                <span className="subtotal">${total}</span>
                            </div>

                            <div className="product-cart-btn">
                                <Link href="/checkout">
                                    <a className="btn btn-primary">Ir a Pagar</a>
                                </Link>
                                <Link href="/cart">
                                    <a className="btn btn-light">Ver carrito de compras</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)