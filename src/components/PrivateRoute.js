import React from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import {userData} from "./helpers/authUtils";

const PrivateRoute = ({children, userIsLoggedIn, redirectTo, ...rest}) => {
  const authData = userData()

  return (
    <Route
      onUpdate={() => window.scrollTo(0, 0)}
      {...rest}
      render={() =>
        authData?.token || userIsLoggedIn ? (
          children
        ) : (
          unAuth(redirectTo)
        )
      }
    />
  );
}

function unAuth(redirectTo) {
  return <Redirect to={{pathname: redirectTo}}/>
}

const mapStateToProps = state => {
  return {
    userIsLoggedIn: state.auth.userIsLoggedIn
  }
}

export default connect(mapStateToProps)(PrivateRoute);
