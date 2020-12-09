import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/actions';
import { URI } from '../../services/base';
import axios from 'axios';
import firebase from '../../services/firebase';
import { Checkbox } from '@material-ui/core';
import { Twitter, Facebook } from 'react-social-sharing'
import { toast } from 'react-toastify';


const url = URI + "/gymUser/getGymUserProfile/";


class UserProfile extends React.Component {
    state = {
        userData: [],
        data: [],
        form: {
            name: '',
            last_name: '',
            email: '',
            resume: '',
            province: '',
            mobile: '',
            city: '',
            secondary_street: '',
            main_street: '',
            neighborhood: '',
            iamge_profile: '',
            image_before: '',
            image_after: '',
            description: '',
            activities:[],
        },
        // activities: [],
        imageURL: '',
        imageURL1: '',
        imageURL2: '',
        uploadValue: 0,
        uploadValue1: 0,
        uploadValue2: 0,
        imageURL: null,
        provinces: [],
        cities: [],
        categories: [],
        activities:[],
        checkedItems: new Map(),
    }

    id = this.props.userData.userData.id;

      handleCheckboxChange = event => {
        
    
        let newArray = [...this.state.activities, event.target.id];
        if (this.state.activities.includes(event.target.id)) {
          newArray = newArray.filter(day => day !== event.target.id);
        } 
        this.state.form.activities=newArray
        console.log("actividiades/;/",this.state.form.activities)
        this.setState({
          activities: newArray
        });
      };

      handleChangeCB(event) {
        var isChecked = event.target.checked;
        var item = event.target.value;
         
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  handleSubmitCB(event) {
    console.log(this.state.checkedItems);
    event.preventDefault();
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
                    // imageURL:url
                    this.setState({
                        imageURL: url,
                    });
                    this.state.form.image_profile = url;
                    console.log(url);
                });

        },
        )
    }
    handleOnChange1(e) {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`pictures/${file.name}`)
        const task = storageRef.put(file)
        task.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
                uploadValue1: percentage
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
                    // imageURL:url
                    this.setState({
                        imageURL1: url,
                    });
                    this.state.form.image_before = url;
                    console.log("url imagen antes", this.state.form.image_before);
                });

        },
        )
    }
    handleOnChange2(e) {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`pictures/${file.name}`)
        const task = storageRef.put(file)
        task.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
                uploadValue2: percentage
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
                    // imageURL:url
                    this.setState({
                        imageURL2: url,
                    });
                    this.state.form.image_after = url;
                    console.log(url);
                });
        },
        )
    }

    petitionPut = () => {
       
        // this.state.form.activitiesSelected=JSON.parse(this.state.activities)
        console.log(this.state.form)
        axios.put(url + this.id, this.state.form).then(response => {
            console.log("actualiazdo exitosamente");
            toast.success('Guardado Exitosamente', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            this.petitionGet();

        }).catch(error => {
            console.log(error.message);
        })
    }

    petitionPut2 = () => {
        this.state.form.image_profile = '';
        this.setState({
            imageURL: ''
        })
        axios.put(url + this.id, this.state.form).then(response => {
            toast.success('Guardado Exitosamente', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            this.petitionGet();

        }).catch(error => {
            console.log(error.message);
        })
    }
    petitionPut3 = () => {
        this.state.form.image_before = '';
        this.setState({
            imageURL1: ''
        })
        axios.put(url + this.id, this.state.form).then(response => {
            toast.success('Guardado Exitosamente', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            this.petitionGet();

        }).catch(error => {
            console.log(error.message);
        })
    }
    petitionPut4 = () => {
        this.state.form.image_after = '';
        this.setState({
            imageURL2: ''
        })
        axios.put(url + this.id, this.state.form).then(response => {
            toast.success('Guardado Exitosamente', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            this.petitionGet();

        }).catch(error => {
            console.log(error.message);
        })
    }

    petitionGet = () => {
        axios.get(url + this.id).then(response => {
            console.log("DATA DESDE PERFIL", response)
            this.setState({ data: response.data });
            this.setState({ provinces: response.data.provinces });
            this.setState({ cities: response.data.cities });
            this.setState({ categories: response.data.categories });
            this.state.data.data.map(item => {
                // this.setState({activities:item.activities})
                this.setState({
                    form: {
                        name: item.name,
                        last_name: item.last_name,
                        email: item.email,
                        resume: item.resume,
                        province: item.province,
                        mobile: item.mobile,
                        city: item.city,
                        secondary_street: item.secondary_street,
                        main_street: item.main_street,
                        neighborhood: item.neighborhood,
                        image_profile: item.image_profile,
                        image_before: item.image_before,
                        image_after: item.image_after,
                        description: item.description,
                        // activities: JSON.parse(item.activities)
                    },
                })
            })
        }).catch(error => {
            console.log(error.message);
        })
    }


    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)

    }

    componentDidMount() {
        this.petitionGet();
    }

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-pane");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].className = tabcontent[i].className.replace("active", "");
        }

        tablinks = document.getElementsByTagName("a");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("profile-tab", "");
        }

        document.getElementById(tabNmae).className += " active";
        evt.currentTarget.className += " profile-tab";
    }
    showChecked = () => {
        const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked')
        // console.log("seleccionados",checkedBoxes);
        console.log("seleccionados", this.state.activities);

    }

    render() {
        const { form } = this.state;
        const { isLogged } = this.props
        const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked')

        return (
            <div className="container">
                {isLogged &&
                    <>
                        <h3>Perfil de Usuario</h3>
                        <p>Completa tus datos</p>
                        <div className="row profile-tabs">
                            <div className="col-3">
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link profile-tab" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'profile') }}>Perfil</a>
                                    {/*     <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'payment') }}>Forma de Pago</a>*/}
                                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'address') }}>Dirección</a>
                                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'pictures') }}>Seguimiento EstoyFit</a>

                                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'activities') }}>Actividades</a>

                                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'passes') }}>Pases</a>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane active" id="profile">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Datos Personales</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="">
                                                            <div>
                                                                <label>Imagen de Perfil:</label><br />
                                                                <img src={this.state.imageURL ? this.state.imageURL : form.image_profile} className="img-profile"></img><br />
                                                                <input type="file" className="btn-primary"
                                                                    onChange={this.handleOnChange.bind(this)}
                                                                />
                                                                <br />
                                                                <progress value={this.state.uploadValue} max='100'>
                                                                    {this.state.uploadValue} %
                                                     </progress><br />
                                                                <button className="btn-secondary btn-profile" onClick={this.petitionPut}>Guardar foto</button>
                                                                <button className="btn-secondary btn-delete" onClick={this.petitionPut2}>Eliminar foto</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Tus nombres:</label>
                                                            <input
                                                                name="name"
                                                                id="name"
                                                                onChange={this.handleChange}
                                                                value={form.name}
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Nombres"
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Tus apellidos:</label>
                                                            <input
                                                                name="last_name"
                                                                id="last_name"
                                                                value={form.last_name}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Apellidos"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Correo Electrónico:</label>
                                                            <input

                                                                name="email"
                                                                id="email"
                                                                value={form.email}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                type="email"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Resumen:</label>
                                                            <textarea className="form-control"
                                                                onChange={this.handleChange}
                                                                value={form.resume}
                                                                name="resume"
                                                                id="resume"
                                                                rows="5"
                                                                placeholder="Añade un pequeño resumen de tus actividades"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="form-group">

                                                            <button className="btn-primary btn-profile" onClick={this.petitionPut}>
                                                                Guardar Cambios</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="address" >
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Dirección</h4>
                                            </div>
                                            <div className="card-body">

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>Provincia:</label>
                                                            <select className="form-control" id="province" name="province"
                                                                value={form.province}
                                                                onChange={this.handleChange}>
                                                                {/*   <option value="Pichincha">Pichincha</option>
                                                            <option value="Guayas">Guayas</option>
<option value="Tunguragua">Tungurahua</option>*/}

                                                                {this.state.provinces.map((item, idx) => (
                                                                    <option value={item.id}>{item.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>Ciudad:</label>
                                                            <select className="form-control" name="city" id="city"
                                                                value={form.city}
                                                                onChange={this.handleChange}>
                                                                {/*   <option value='1'>Quito</option>
                                                            <option value='2'>Guayaquil</option>
                                                            <option value='3'>Cuenca</option>
                                                            <option value='4'>Loja</option>
                                                            <option value='5'>Ambato</option>
<option value='6'>Macas</option>*/}
                                                                {this.state.cities.map((item, idx) => (
                                                                    <option value={item.id}>{item.name}</option>
                                                                ))}

                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Barrio:</label>
                                                            <input

                                                                name="neighborhood"
                                                                onChange={this.handleChange}
                                                                value={form.neighborhood}
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Barrio"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Calle Principal:</label>
                                                            <input className="form-control"
                                                                value={form.main_street}
                                                                name="main_street" onChange={this.handleChange} type="text" placeholder="Ingresa la calle principal"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Calle Secundaria:</label>
                                                            <input className="form-control" type="text"
                                                                value={form.secondary_street}
                                                                name="secondary_street" onChange={this.handleChange} placeholder="Ingresa la calle secundaria"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Teléfono:</label>
                                                            <input className="form-control" type="text" name="mobile"
                                                                value={form.mobile}
                                                                onChange={this.handleChange} placeholder="Ingresa tu teléfono"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <button className="btn-primary btn-profile" onClick={this.petitionPut}>Guardar Cambios</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="pictures" >
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Progreso EstoyFit</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="">
                                                            <div>
                                                                <label>Imagen antes de EstoyFit</label><br />
                                                                <input type="file" className="" style={{ fontFamily: 'none' }}
                                                                    onChange={this.handleOnChange1.bind(this)}
                                                                />
                                                                <br /> <br />
                                                               
                                                          {/*}      {form.image_before ? <img src={this.state.imageURL1 ? this.state.imageURL1 : form.image_before} className="img" alt="Foto Antes de EstoyFit" width="300" height="400" /> : ''}
                                                                {this.state.imageURL1 ? <img src={this.state.imageURL1 ? this.state.imageURL1 : form.image_BEFORE} className="img" alt="Foto Antes de EstoyFit" width="300" height="400" /> : ''}
                                                                */}
                                                                {/*}   {this.state.imageUrl? <img src={this.state.imageURL} className="img" alt="Foto Antes de EstoyFit" width="300" height="400"></img>} : ''}
                                                            */}  <img src={this.state.imageURL1 ? this.state.imageURL1 : form.image_before} className="img" alt="Foto Antes de EstoyFit" width="300" height="400"></img><br />
                                                                
                                                                <progress value={this.state.uploadValue1} max='100'>
                                                                    {this.state.uploadValue} %
                                         </progress><br />
                                                                <button className="btn-secondary btn-profile" onClick={this.petitionPut}>Guardar foto</button>
                                                                <button className="btn-secondary btn-delete" onClick={this.petitionPut3}>Eliminar foto</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="">
                                                            <div>
                                                                <label>Imagen despues de EstoyFit</label><br />
                                                                <input type="file" className="" style={{ fontFamily: 'none' }}
                                                                    onChange={this.handleOnChange2.bind(this)}
                                                                />
                                                                <br /><br />
                                                             {/*   {form.image_after ? <img src={this.state.imageURL2 ? this.state.imageURL2 : form.image_after} className="img" alt="Foto Despues de EstoyFit" width="300" height="400" /> : ''}
                                                                {this.state.imageURL2 ? <img src={this.state.imageURL2 ? this.state.imageURL2 : form.image_after} className="img" alt="Foto Despues de EstoyFit" width="300" height="400" /> : ''}
                                                             */}   <img src={this.state.imageURL2 ? this.state.imageURL2 : form.image_after} className="img" alt="Foto Despues de EstoyFit" width="300" height="400"></img><br />

                                                                <progress value={this.state.uploadValue2} max='100'>
                                                                    {this.state.uploadValue} %
                                                </progress><br />
                                                                <button className="btn-secondary btn-profile" onClick={this.petitionPut}>Guardar foto</button>
                                                                <button className="btn-secondary btn-delete" onClick={this.petitionPut4}>Eliminar foto</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Descripcción:</label>
                                                            <textarea className="form-control"
                                                                onChange={this.handleChange}
                                                                value={form.description}
                                                                name="description"
                                                                id="description"
                                                                rows="5"
                                                                placeholder="Añade un pequeño resumen de tus actividades"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <button className="btn-primary btn-profile" onClick={this.petitionPut}>
                                                                Guardar Cambios</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="activities">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Actividades</h4>
                                            </div>
                                            <div className="card-body">
                                                {/*}   <form>
                                                    <div className="container">


                                                        <div className="col-lg-4" style={{ display: "contents" }}>
                                                            <div className="custom-control custom-switch" >
                                                                {this.state.categories.map(item => (
                                                                    <>
                                                                   
                                                                  


                                                                        <input type="checkbox" style={{ margin: 'auto', paddingRight: '2px', paddingLeft: '2px', marginRight: '2px', marginLeft: '2px' }} className="input-lg" value={item.id} id={item.name} />
                                                                        <label className="" style={{ marginLeft: '3px', marginRight: '3px', display: 'inline-block' }}>{item.name}</label>

                                                                     
                                                                        </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>


                                                    {/*   <input type="checkbox" className="custom-control-input input-lg" id="spinning" />
                                                            <label className="custom-control-label" >Spinning</label>*/}

                                                {/*  <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input input-lg" id="running" />
                                                                <label className="custom-control-label" >Running</label>
                                                            </div>
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input input-lg" id="cardio" />
                                                                <label className="custom-control-label" >Cardio</label>
                                                        </div>*/}

                                                {/*  <div className="col-lg-4">
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input input-lg" id="boxing" />
                                                                <label className="custom-control-label">Boxing</label>
                                                            </div>
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input input-lg" id="marciales" />
                                                                <label className="custom-control-label">Artes Marciales</label>
                                                            </div>
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input input-lg" id="karate" />
                                                                <label className="custom-control-label">Karate</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input input-lg" id="crossfit" />
                                                                <label className="custom-control-label">Crossfit</label>
                                                            </div>
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input input-lg" id="gym" />
                                                                <label className="custom-control-label">Gimnasio</label>
                                                            </div>
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input input-lg" id="calistenia" />
                                                                <label className="custom-control-label">Calistenia</label>
                                                            </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <br />
                                                            <button className="btn-primary btn-profile">Guardar Cambios</button>
                                                        </div>
                                                    </div>


                                                </form>*/}


                                                {/*<div className="col-lg-4" style={{ display: "contents" }}>*/}
                                                <div className="row">
                                             
                                                <div className="col-lg-4" style={{ display: 'contents' }}>
                                                        {this.state.categories.map(item => (
                                                            <div className="custom-control custom-switch">
                                                            <>
                                                                <input type="checkbox" className="custom-control-input" id={item.id} value={item.id} onChange={this.handleCheckboxChange} />
                                                                <label className="custom-control-label" style={{marginBottom:'1.25em',marginLeft:'0.5em'}} htmlFor={item.id}>{item.name}</label>
                                                            </>
                                                            </div>
                                                        ))}
                                                </div>
                                                </div>

                                                {/*} </div>*/}
                                                {/*  
                                                  
                                                    <div className="col-lg-4">
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input input-lg" id="crossfit" />
                                                            <label className="custom-control-label">Crossfit</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input input-lg" id="gym" />
                                                            <label className="custom-control-label">Gimnasio</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input" id="calistenia" />
                                                            <label className="custom-control-label" htmlFor='calistenia'>Calistenia</label>
                                                        </div>
                                                    </div>*/}

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <br />
                                                        <button className="btn-primary btn-profile" onClick={this.petitionPut}>Guardar Cambios</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="passes">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Pases</h4>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="container">

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <label>Puntos Obtenidos: <span style={{ fontWeight: "bolder" }}>20</span></label>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <label>Porcentaje de clases completadas: <span style={{ fontWeight: "bolder" }}>30%</span></label>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-striped">
                                                                        <thead>
                                                                            <tr style={{ backgroundColor: '#FE5000',textAlign:"center" }}>
                                                                                <th>Pase</th>
                                                                                <th>Fecha Pase</th>
                                                                                <th>Actividad</th>
                                                                                <th>Compra</th>
                                                                                <th>Establecimiento</th>
                                                                                <th>Fidelidad</th>
                                                                                <th>Estado</th>
                                                                                <th>Acciones</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Pase Mensual</td>
                                                                                <td>25/10/2020</td>
                                                                                <td></td>
                                                                                <td>24/10/2020</td>
                                                                                <td>Fit Gym</td>
                                                                                <td>10 pts</td>
                                                                                <td>Pendiente</td>
                                                                                <td>
                                                                                    <div style={{ width: "200px" }}>
                                                                                        <a className="btn btn-info" title="Regalar pase">
                                                                                            <i className="fas fa-gift"></i>
                                                                                        </a>
                                                                                        <a className="btn btn-warning" title="Detalle pase">
                                                                                            <i className="fas fa-info-circle"></i>
                                                                                        </a>
                                                                                        <a className="btn btn-success" title="Reasignar pase">
                                                                                            <i className="fas fa-sign-in-alt"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <br />
                                                                    <button className="btn-primary btn-profile">Guardar Cambios</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>


        );
    }
}

// export default UserProfile;

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        isLogged: state.isLogged,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(logout()) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile)
