import React, { Component } from 'react'
import '../App.css'


export default class Outstation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isReturnTrip:false
        }
    }
    
    render() {
        console.log(this.state.isReturnTrip)
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-row align-items-center">                      
                        <div className="col-12">
                            <label className="sr-only" htmlFor="inlineFormInputGroup">Source</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text mw-80 bg-default">From</div>
                                </div>
                                <input type="text" className="form-control form-control-lg" id="inlineFormInputGroup" placeholder="Enter a city or address" />
                            </div>
                        </div>


                        <div className="col-12">
                            <label className="sr-only" htmlFor="inlineFormInputGroup">Destination</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text mw-80 bg-default">To</div>
                                </div>
                                <input type="text" className="form-control form-control-lg" id="inlineFormInputGroup" placeholder="Enter a city or address"  />
                            </div>
                        </div>


                        
                        <div className="col-12">
                            <label className="sr-only" htmlFor="inlineFormInputGroup">Journey</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text mw-80 bg-default">Journey</div>
                                </div>
                                <select type="text" className="form-control form-control-lg" onChange={(e)=>this.setState({isReturnTrip:e.target.value=='roundtrip'})}>
                                    <option value='oneway'>One Way</option>
                                    <option value='roundtrip'>Round Trip</option>
                                </select>
                            </div>
                        </div>


                        <div className="col-12">
                            <label className="sr-only" htmlFor="inlineFormInputGroup">Depart</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text mw-80 bg-default">Depart</div>
                                </div>
                                <select type="text" className="form-control form-control-lg">
                                    <option>Today</option>
                                    <option>Tomorrow</option>
                                </select>

                                <select type="text" className="form-control form-control-lg">                                    
                                    <option>12:00 AM</option>
                                    <option>12:30 AM</option>
                                    <option>01:00 AM</option>
                                    <option>01:30 AM</option>                                    
                                </select>
                            </div>
                        </div>

                        {this.state.isReturnTrip && (<div className="col-12">
                            <label className="sr-only" htmlFor="inlineFormInputGroup">Return</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text mw-80 bg-default">Return</div>
                                </div>
                                <select type="text" className="form-control form-control-lg">
                                    <option>Today</option>
                                    <option>Tomorrow</option>
                                </select>

                                <select type="text" className="form-control form-control-lg">                                    
                                    <option>12:00 AM</option>
                                    <option>12:30 AM</option>
                                    <option>01:00 AM</option>
                                    <option>01:30 AM</option>                                    
                                </select>
                            </div>
                        </div>) }

                    <div className="container-fluid mt-5">
                        {/* <div className="row mt-5">
                            <div className="col-2"></div>
                            <div className="col-10">
                                <p className="text-highlighted">8 day round trip 1260 km</p>
                                <p>No pre-payment required</p>
                                <p>Free cancellation</p>
                            </div>                            
                        </div>
                     */}
                        <div className="row">
                             <div className="col-3">
                            <img src="https://olawebcdn.com/images/v1/cabs/sl/ic_mini.png"/>
                             </div>
                             <div className="col-9">
                                <div className="text-big-1">
                                    Mini
                                </div>

                                <p className="m-0">Indica, Manza Ritz</p>
                                <p>Affordable AC cabs with Free Wi-Fi</p>
                             </div>
                        </div>

                        <div className="row">
                             <div className="col-3">
                            <img src="https://olawebcdn.com/images/v1/cabs/sl/ic_mini.png"/>
                             </div>
                             <div className="col-9">
                                <div className="text-big-1">
                                    Mini
                                </div>

                                <p className="m-0">Indica, Manza Ritz</p>
                                <p>Affordable AC cabs with Free Wi-Fi</p>
                             </div>
                        </div>
                    
                        
                    </div>


                     
                        <div className="col-12">
                            <button type="submit" className="btn py-2 mt-3 mb-2 btn-block bg-ceocabs">Save Inquiry</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
