import React from 'react';

const Smurfs = (props) => {
    return (
        <div>
            <h1> Name: {props.smurfs.name}</h1>
            <h2>Age: {props.smurfs.age}</h2>
            <h3>Height: {props.smurfs.height}</h3>
        </div>
    )
}
export default Smurfs; 
