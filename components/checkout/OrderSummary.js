import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';


class OrderSummary extends Component {
    
    render() {
        return (
            <div className="order-table table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Detalle Pases</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.products.map((data, idx) => (
                            <tr key={idx}>
                                <td className="product-name">
                                    <Link href="#">
                                        <a>{data.title}</a>
                                    </Link>
                                </td>

                                <td className="product-total">
                                    <span className="subtotal-amount">${data.original_price * data.quantity}</span>
                                </td>
                            </tr>
                        ))}

                        <tr>
                            <td className="order-subtotal">
                                <span>Subtotal Orden</span>
                            </td>

                            <td className="order-subtotal-price">
                                <span className="order-subtotal-amount">${this.props.total}</span>
                            </td>
                        </tr>

                        <tr>
                            <td className="order-subtotal">
                                <span>IVA 12%</span>
                            </td>

                            <td className="order-subtotal-price">
                                <span className="order-subtotal-amount">$</span>
                            </td>
                        </tr>
                        
                        <tr>
                            <td className="total-price">
                                <span>Total</span>
                            </td>

                            <td className="product-subtotal">
                                {/* <span className="subtotal-amount">${this.props.total + this.props.shipping}</span> */}
                                <span className="subtotal-amount">${this.props.total}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total,
        shipping: state.shipping,
        userData: state.userData,
    }
}

export default connect(
    mapStateToProps
)(OrderSummary)
