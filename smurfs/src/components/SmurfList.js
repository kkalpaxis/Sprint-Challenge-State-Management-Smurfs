import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { getSmurfs } from "../actions"

const SmurfList = (props) => {

    useEffect(() => {

    })
    
    return(
        <div>
            {props.smurf.map(smurf => 
            <Smurf smurf={smurf} key={smurf.id + smurf.name} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurfs} )(SmurfList)
