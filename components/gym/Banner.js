import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="gym-banner item-bg2">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="gym-banner-content">
                               <h1>Nombre del gym</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
