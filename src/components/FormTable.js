import React, {Component} from 'react';
import './FormTable.css';
import axios from "axios";


class FormTable extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            url: '',
            httpMethod: '',
            controlPeriod: ''
        }
    }

    // properties

    handleSubmit = (event) => {
        event.preventDefault();
        const newAlert = {
            name: this.state.name,
            url: this.state.url,
            httpMethod: this.state.httpMethod,
            controlPeriod: this.state.controlPeriod
        };

        axios.post('http://localhost:8080/alerts', newAlert)
            .then(res => console.log(res.data))
            .catch(error => {console.log("error: ", error)});

        this.setState({
            name: '',
            url: '',
            httpMethod: '',
            controlPeriod:''

        });

    };



    handleAlertNameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    };

    handleUrlChange = (event) => {
        this.setState({
            url: event.target.value,
        })
    };

    handleHttpMethodChange = (event) => {
        this.setState({
            httpMethod: event.target.value,
        })
    };

    handleControlPeriodChange = (event) => {
        this.setState({
            controlPeriod: event.target.value,
        })
    };


    render(){
        return(
            <div className="wrapper" >
                <div className="form-wrapper">
                    <h1> Form </h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="alertName">
                           <label htmlFor="alertName"> Alert Name </label>
                            <input type= 'text'
                                   placeholder='Alert Name'
                                   value={this.state.name}
                                   onChange={this.handleAlertNameChange}/>
                        </div>

                        <div className="url">
                            <label> Url </label>
                            <input type= 'text'
                                   placeholder='Url'
                                   value={this.state.url}
                                   onChange={this.handleUrlChange}/>
                        </div>

                        <div className="httpMethod">
                            <label> HTTP Method </label>
                            <select value={this.state.httpMethod} onChange={this.handleHttpMethodChange} defaultValue={false} >
                                <option value='' selected="selected" class="SelectedHttpMethod">Select a method </option>
                                <option value="get"> GET </option>
                                <option value="post"> POST </option>
                                <option value="put"> PUT </option>
                                <option value="delete"> DELETE </option>
                            </select>
                        </div>

                        <div className="controlPeriod">
                            <label> Control Period</label>
                            <input type='text'
                                   placeholder='Control Period'
                                   value={this.state.controlPeriod}
                                   onChange={this.handleControlPeriodChange}/>
                        </div>

                        <div className="save">
                            <button type = 'save' > Save </button>
                        </div>

                    </form>
                </div>
            </div>

        )

    }
}

export default FormTable