// import React, { Component, Fragment } from "react";
// import ReactDOM from "react-dom";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./layout/Header";
// import { createRoot } from "react-dom/client";
// import { Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import Dashboard from "./leads/Dashboard";
// import Alerts from "./layout/Alerts";
// import { Provider } from "react-redux";
// import store from "../store";
// import Login from "./accounts/Login";
// import Register from "./accounts/Register";
// import PrivateRoute from "./common/PrivateRoute";
// import { loadUser } from "../actions/auth";

// const alertOptions = {
//   timeout: 3000,
//   position: "top center",
// };

// class App extends Component {
//   componentDidMount() {
//     store.dispatch(loadUser());
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <AlertProvider template={AlertTemplate} {...alertOptions}>
//           <Router>
//             <Fragment>
//               <Header />
//               <Alerts />
//               <div className="container">
//                 <Routes>
//                   <Route
//                     path="/*"
//                     element={<PrivateRoute element={<Dashboard />} />}
//                   />

//                   {/* <PrivateRoute exact path="/" element={<Dashboard />} /> */}
//                   <Route path="/register" element={<Register />} />
//                   <Route path="/login" element={<Login />} />
//                 </Routes>
//               </div>
//             </Fragment>
//           </Router>
//         </AlertProvider>
//       </Provider>
//     );
//   }
// }
// // ReactDOM.render(<App />, document.getElementById("app"));

// const container = document.getElementById("app");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);

// App.js
import React, { useEffect, Fragment } from "react";
import { Routes, Route, HashRouter, Switch } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import store from "../store";
import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Dashboard from "./leads/Dashboard";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <HashRouter>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              {/* <Routes>
                <Route path="/*" element={<Navigate to="/login" replace />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/*"
                  element={<PrivateRoute element={<Dashboard />} />}
                />
              </Routes> */}

              {/* <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/dashboard/*"
                  element={<PrivateRoute element={<Dashboard />} />}
                />
              </Routes> */}

              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </HashRouter>
      </AlertProvider>
    </Provider>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
