import React, { Component } from 'react'
import firebase from '../../services/firebase';

class UploadImage extends Component {
    constructor() {
        super()
        this.state = {
            uploadValue: 0,
            imageURL: null,
        } 
    }

    handleOnChange(e) {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`pictures/${file.name}`)
        const task = storageRef.put(file)

        task.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
                uploadValue: percentage
            })
        }, (error) => {
            console.error(error.message)
        }, () => {
            // Upload complete
            firebase.storage().
                ref('pictures')
                .child(file.name)
                .getDownloadURL()
                .then((url) => {                   
                    this.setState({
                        imageURL: url
                    })
                })
        },
        )
    }


    render() {
        return (
            <div>
                <label>Imagen de Perfil:</label><br />

                <img src={this.state.imageURL} className="img-profile"></img><br />

                <input type="file" className="btn-primary" 
                onChange={this.handleOnChange.bind(this)} /><br />

                <progress value={this.state.uploadValue} max='100'>
                    {this.state.uploadValue} %
                    </progress><br />
                    <button className="btn-secondary btn-profile">Añadir foto</button>
                <button className="btn-secondary btn-delete">Eliminar foto</button>
            </div>
        )
    }
}

export default UploadImage;