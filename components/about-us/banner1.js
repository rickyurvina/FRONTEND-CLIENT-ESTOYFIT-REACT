import React, { Component } from 'react';
import Link from 'next/link';
import Register from '../../components/Modal/Register';

class Banner extends Component {
    state = {
        open: false
    };

    handleRegister = () => {
        this.setState({
            open: true
        });
    }

    render() {
        return (

            <div className="container-fluid" style={{padding: 0}}>

                <div className="about-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="about-banner-content">
                                <h1>HAZ <br />CRECER <br /></h1>
                                <h1 className="important">TU NEGOCIO</h1>

                                <Link href="#">
                                    <a className="btn" onClick={this.handleRegister} style={{ backgroundColor: '#FE5000', color: "white" }}>Registrate</a>
                                </Link>
                                {/* <Link href="#">
                                <a className="btn btn-light">Shop Men's</a>
                            </Link> */}
                            </div>
                        </div>
                    </div>
                    <Register start={this.state.open} />
                </div>
            </div>


        );


    }
}

export default Banner;
