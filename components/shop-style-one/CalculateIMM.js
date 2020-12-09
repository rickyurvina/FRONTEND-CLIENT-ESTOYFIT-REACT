import React, { Component } from 'react';
import Link from 'next/link';

const levels = [
    'Usted está dentro de su peso ideal',
    'Usted está obeso',
    'Usted presenta obesidad morbida',
];

const img = [
    require('../../images/IMM/normal.png'),
    require('../../images/IMM/underweight.png'),
    require('../../images/IMM/obese.png')
]

class CalculateIMM extends Component {
    state = {
        height: '',
        weight: '',
        age: '',
        gender: '',
        activity: '',
        textRange: '',
        icon: ''
    };

    calculate = () => {
        const { height, weight, age, gender, activity } = this.state;
        const numberRange = this.calculateRange(weight);
        this.setState({ textRange: levels[numberRange] });
        this.setState({ icon: img[numberRange] });
    }

    calculateRange = weight => {
        if (weight < 80) { return 0; }
        if (weight >= 80 && weight < 100) { return 1; }
        if (weight >= 100) { return 2; }
    }

    render() {
        const { height, weight, age, gender, activity, textRange, icon } = this.state;
        return (
           

                <section className="row-imm ptb-60">
                    <div className="container" style={{paddingBottom:'300px'}}>
                        <div className="row row-inm">
                            <div className="col-lg-6 calc-imm">
                                <h5>CALCULADORA DE IMM</h5>
                                <div>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                                <img src={require("../../images/custom-images/IMM.png")} alt="image" className="img-imm" />
                                {/* Diego este es el componente que debes maquetar para calculo. 
                            Debes colocar el resultado del calculo tal cual como esta en la pagina https://prowess.qodeinteractive.com/ */}


                                {/* Hasta aqui. */}
                            </div>
                            <div className="col-lg-6 calc-imm">
                                <h5 className="h2-products">CALCULA TU INDICE DE MASA CORPORAL</h5>
                                <div>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                                <div className="row row-input">
                                    <div className="col-sm-6">
                                        <input
                                            value={height}
                                            type="number"
                                            className="form-imm"
                                            placeholder="Altura/cm"
                                            onChange={(event) => this.setState({ height: event.target.value })}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            value={weight}
                                            type="number"
                                            className="form-imm"
                                            placeholder="Masa Corporal/kg"
                                            onChange={(event) => this.setState({ weight: event.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="row row-input">
                                    <div className="col-sm-6">
                                        <input
                                            value={age}
                                            type="number"
                                            className="form-imm"
                                            placeholder="Edad"
                                            onChange={(event) => this.setState({ age: event.target.value })}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <select
                                            value={gender}
                                            className="form-imm"
                                            onChange={(event) => this.setState({ gender: event.target.value })}
                                        >
                                            <option value={0}>Género</option>
                                            <option value={1}>Masculino</option>
                                            <option value={2}>Femenino</option>
                                            <option value={3}>Otro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row row-input">
                                    <div className="col-sm-12">
                                        <select
                                            value={activity}
                                            className="form-imm"
                                            onChange={(event) => this.setState({ activity: event.target.value })}
                                        >
                                            <option value={0}>Seleccione un factor de actividad:</option>
                                            <option value={1}>Poco o Sin ejercicio / Trabajo Oficina</option>
                                            <option value={2}>Deporte ligero / Deporte 1-3 días a la semana</option>
                                            <option value={3}>Ejercicio Moderado / Deporte 3-5 días a la semana</option>
                                            <option value={4}>Ejercicio Pesado / Deporte 6-7 días a la semana</option>
                                            <option value={5}>Ejercicio Muy Pesado / Trabajo Físico / Entrenamiento 2 veces a la semana</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row row-input">
                                    <div className="col-sm-6">
                                        <button className="button-imm button-imm-solid button-imm-icon" onClick={this.calculate}>
                                            <span className="imm-button-text">Calcular</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="imm-message">
                                    <img src={icon}></img>
                                    {textRange}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
           
        );
    }
}

export default CalculateIMM;
