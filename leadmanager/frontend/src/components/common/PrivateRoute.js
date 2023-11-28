import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) {
        return <h2>Loading...</h2>;
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
// PrivateRoute.js
// import React from "react";
// import { Route, Navigate, Routes } from "react-router-dom";
// import { connect } from "react-redux";

// const PrivateRoute = ({ element: Element, auth, ...rest }) => (
//   <Routes>
//     <Route
//       {...rest}
//       element={(props) => {
//         if (auth.isLoading) {
//           return <h2>Loading...</h2>;
//         } else if (!auth.isAuthenticated) {
//           // Redirect to login page if not authenticated
//           return <Navigate replace to="/login" />;
//         } else {
//           return <Element {...props} />;
//         }
//       }}
//     />
//   </Routes>
// );

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(PrivateRoute);
