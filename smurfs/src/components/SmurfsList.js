import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import { fetchSmurfs } from '../actions';


const SmurfList = (props) => {
    useEffect(() => {
      props.fetchSmurfs();
    }, []);
    if (props.isFetching) {
      return (<h1>"La la la-la la la, Sing a happy song!"</h1>)
    }
  
  
    return (
        <div>
        {props.error && <p>{props.error}</p>}
        {props.Smurfs.map((smurfs) => (
            <Smurfs key={smurfs.id} smurfs={smurfs}/> 
        ))}
    </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      Smurfs: state.Smurfs,  
      isfetching: state.isfetching,
      error: state.error,
    }
  }
  
  export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);

