import React, { Component } from 'react';
import Link from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Fade } from 'react-bootstrap';


class FrequentQuestions extends Component {
    _isMounted = false;
    
    state = {
        open: false
    };

    // shouldComponentUpdate(nextProps,nextState){
    //     if(this.props != nextProps){
    //         this.setState({
    //             open: true
    //         });
    //         return true
    //     }else if(this.state != nextState){
    //         return true
    //     }else{
    //         return false
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.start !== this.props.start) {
            this.setState({ open: nextProps.start });
        }
    }

    closeModal = (e) => {
        this._isMounted = true;
        e.preventDefault();
        this.setState({
            open: false
        });
        this.props.closeFq();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let {open} = this.state;
        return (
            <div className={`fq-popup ${open ? 'is-visible' : ''}`} role="alert">
                <div className="fq-popup-container">
                    <div className="container">
                        <div className="fq-logo">
                            <img src={require('../../images/logo.png')}>
                            
                            </img>
                        </div>
                        <div className="section-title" style={{backgroundColor:'#f4f4f3'}}>
                            <h2><span className="dot"></span> PREGUNTAS FRECUENTES</h2>
                        </div>

                        <div className="faq-accordion">
                            <ul className="accordion">
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            ¿Cuáles son los tiempos y costos de envío?
                                        </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                        </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            ¿Cuáles son los tiempos y costos de envío?
                                        </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                        </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            ¿Qué métodos de pago puedo utilizar?
                                        </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <ul>
                                            <li> Tarjeta de crédito: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. El total se cargará a su tarjeta cuando se envíe el pedido. </li>
                                            <li> Cuenta con una opción de Pago rápido, que le permite guardar de forma segura los detalles de su tarjeta de crédito para que no tenga que volver a ingresarlos para futuras compras. </li>
                                            <li> PayPal: compre fácilmente en línea sin tener que ingresar los detalles de su tarjeta de crédito en el sitio web. Se le cobrará a su cuenta una vez que se complete el pedido. Para registrarse para obtener una cuenta PayPal, visite el sitio web paypal.com. </li>
                                            <li> Tarjeta de crédito: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. El total se cargará a su tarjeta cuando se envíe el pedido. </li>
                                            </ul>
                                        </AccordionItemPanel>
                                    </AccordionItem>                                 
                                </Accordion>
                            </ul>
                        </div>
                    </div>
                    <Link href="#">
                        <a onClick={this.closeModal} className="fq-popup-close"></a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default FrequentQuestions;
