import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    state = {
        routerQuery: {},
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.routerQuery !== this.props.routerQuery) {
            this.setState({ routerQuery: nextProps.routerQuery });
        }
    }
    render() {
        // suggestion: "Clases de", search: "Trx", nearIn: "Quito"
        const { routerQuery: { suggestion, search, nearIn = null } } = this.state;
        const strUrl = (nearIn) ? `${suggestion} / ${search} / ${nearIn}` : `${suggestion} / ${search}`;
        return (
            <div className="container-fluid">
                <div className="search-banner">
                    <img
                        src={require("../../images/banner/fondo-generico-2.jpg")}
                    />
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="search-banner-content">
                                    <h3>{strUrl}</h3>
                                    <h1>{search}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
