import React ,{ Component } from 'react';


class ImportantNote extends Component
{
    render(){
        return(
            <React.Fragment>
            <span>Importante</span>
            <br></br>
            <span>La información facilitada por este medio no puede, en modo alguno, sustituir a un servicio de atención médica directa, así como tampoco debe utilizarse con el fin de establecer un diagnóstico, o elegir un tratamiento en casos particulares.</span>
            <br></br>
            <span>En este servicio no se hará ninguna recomendación, explícita o implícita, sobre fármacos, técnicas, productos, etc... que se citarán únicamente con finalidad informativa.</span>
            <br></br>
            <span>La utilización de este servicio se lleva a cabo bajo la exclusiva responsabilidad de los usuarios.</span>
            </React.Fragment>
        );
    }
}
export default ImportantNote;


