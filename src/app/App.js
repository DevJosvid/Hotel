import React, { Component } from 'react';
//import './App.css'

class App extends Component {

    constructor() {
        super();
        this.state = {
            hotels: []
        };
    }

    componentDidMount() {
        this.fecthHotels();
    }

    fecthHotels() {
        fetch('/information')
            .then(res => res.json())
            .then(data => {
                this.setState({ hotels: data });
                console.log(hotels);
                console.log(this.state.hotels);
            });
    }

    render() {
        return (
            <div className="principal">
                <nav className="logo nav-wrapper" style={{
                    width: '100%',
                    height: '100px',
                    background: '#0e47a1'
                }}>
                    <img src="../assets/images/logo-aviatur.svg"></img>

                </nav>
                <div className="container">
                    <div className="row" >

                        <div className="filter col m3" style={{
                            height: "550px",
                            // background: "red"
                        }}>
                            <div className="card" style={{
                                padding: "0% 5%"
                            }}>

                                <div className="section" style={{
                                    display: "flex"
                                }}>
                                    <i class="material-icons">search</i>
                                    <h6 style={{
                                        margin: "0"
                                    }}>Nombre del Hotel</h6>
                                </div>
                                <div className="divider"></div>
                                <div className="section" style={{
                                    display: "flex"
                                }}>
                                    <i class="material-icons">hotel</i>
                                    <form>
                                        <div className="input-field col s12" style={{
                                            margin: "0"
                                        }}>
                                            <input id="Hoteles" type="text" className="validate" />
                                            <label htmlFor="Hotel">Hotel</label>

                                        </div>
                                    </form>
                                </div>
                                <div className="section"></div>
                                <div className="divider"></div>
                                <div className="section" style={{
                                    display: "flex"
                                }}>
                                    <i class="material-icons">star</i>
                                    <h6 style={{
                                        margin: "0"
                                    }}>Estrellas</h6>
                                </div>
                                <div className="divider"></div>
                                <div className="section" style={{

                                }}>
                                    <i className="material-icons">check</i>
                                    <p style={{
                                        margin: "0"
                                    }}>todas las estrellas</p>
                                </div>
                                <form className="star">
                                    <p>
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span><i class="material-icons">star</i></span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span><i class="material-icons">star</i><i class="material-icons">star</i></span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i></span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i></span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i></span>
                                        </label>
                                    </p>
                                </form>
                            </div>

                        </div>


                        {
                            this.state.hotels.map(hotel => {
                                return (
                                    <div className="card col m9">
                                        <div className="col m5">
                                            <img src={hotel.image}></img>
                                        </div>
                                        <div className="col m4">
                                            <h5 style={{
                                                color: "#2359a1",
                                                fontWeight: "bold"
                                            }}>{hotel.name}</h5>
                                            <p>{hotel.stars}</p>
                                            <p>{hotel.amenities}</p>
                                        </div>
                                        
                        <div className="col m3">
                            <p style={{
                                fontSize: "14px",
                                fontWeight: "lighter",
                                color: "#a2a2a2",
                                textAlign: "center"
                            }}>
                                Precio por noche de la habitacion
                            </p>
                            <h4 style={{
                                margin: "0",
                                textAlign: "center",
                                color: "#e59d24",
                                fontWeight: "lighter"
                            }}>
                                ARS
                                <span style={{
                                    fontWeight: "bold"
                                }}>{hotel.price}</span>
                            </h4>
                            <a className="waves-effect waves-blue darken-2 btn-small">Button</a>

                        </div>

                                    </div>

                                )
                            })
                        }


                    </div>
                </div>
            </div>

        )
    }
}

export default App;