import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner banner-cart" style={{height:"200px"}}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="about-banner-content">
                            <h1 style={{ fontSize: "40px" }}>CONFIRMACIÓN DE PAGO<br /></h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;