import React from 'react';
import {connect} from 'react-redux';
import {startLogIn} from '../actions/auth.js';

export const LoginPage = ({startLogIn}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Tag line for app.</p>
      <button
        onClick={startLogIn}
        className="button-layout__login"
        >Log In With Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogIn: () => dispatch(startLogIn())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
