import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddSmurf from '../actions';


class SmurfForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <div className="addSmurfForm">
                <form onSubmit={this.submitHandler}>
                    <input
                        type= 'text'
                        name= 'name'
                        value={this.state.name}
                        placeholder='name'
                        onChange={this.inputHandler}
                    />
                    <input
                        type= 'number'
                        name= 'age'
                        value={this.state.age}
                        placeholder='age'
                        onChange={this.inputHandler}
                    />
                    <input
                        type= 'number'
                        name= 'height'
                        value={this.state.height}
                        placeholder='height'
                        onChange={this.inputHandler}
                    />
                    <button type='submit' onClick={this.addSmurf}>
                        Add Smurf
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addSmurf: addSmurf} )(AddSmurf)