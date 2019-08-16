import React from 'react';
import Smurf from './Smurf';

class SmurfForm extends React.Component {
    // constructor?
    state = {
        name: '',
        age: '',
        height: ''
    }
    
    //handle changes and submissions

    render() {
        return (
            <div className="addSmurfForm">
                <form>
                    <input
                        type= 'text'
                        name= 'name'
                        value={smurf.name}
                    />
                    <input
                        type= 'text'
                        name= 'age'
                        value={smurf.age}
                    />
                    <input
                        type= 'text'
                        name= 'height'
                        value={smurf.height}
                    />
                    <button onClick={this.addSmurf}>
                        Add Smurf
                    </button>
                </form>

            </div>

        )
    }
}