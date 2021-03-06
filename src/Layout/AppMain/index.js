import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import LandingPage from "../../Pages/home";
import { ToastContainer } from "react-toastify";
import { FcLeft } from "react-icons/fc";

const UserPages = lazy(() => import("../../Pages/UserPages"));
const Applications = lazy(() => import("../../Pages/Applications"));
const Dashboards = lazy(() => import("../../Pages/Dashboards"));
// const Dashboards = lazy(() => import("../../Pages/Dashboards"));

const Widgets = lazy(() => import("../../Pages/Widgets"));
const Elements = lazy(() => import("../../Pages/Elements"));
const Components = lazy(() => import("../../Pages/Components"));
const Forms = lazy(() => import("../../Pages/Forms"));
const Tables = lazy(() => import("../../Pages/Tables"));

const AppMain = () => {
  return (
    <Fragment>
      {/* Components */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-pulse-rise" />
              </div>
              <h6 className="mt-5">
                Loading Components
                <small>Welcome to PrettyCoolPattern</small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/components" component={Components} />
      </Suspense>

      {/* Forms */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-pulse-rise" />
              </div>
              <h6 className="mt-5">
                Loading Forms
                <small>Welcome to PrettyCoolPattern</small>{" "}
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/forms" component={Forms} />
      </Suspense>

      {/* Tables */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-pulse-rise" />
              </div>
              <h6 className="mt-5">
                Loading Tables
                <small>Welcome to PrettyCoolPattern</small>{" "}
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/tables" component={Tables} />
      </Suspense>

      {/* Elements */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="line-scale" />
              </div>
              <h6 className="mt-3">
                Loading Elements
                <small>Welcome to PrettyCoolPattern</small>{" "}
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/elements" component={Elements} />
      </Suspense>

      {/* Dashboard Widgets */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-pulse-sync" />
              </div>
              <h6 className="mt-3">
                Loading Widgets
                <small>Welcome to PrettyCoolPattern</small>{" "}
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/widgets" component={Widgets} />
      </Suspense>

      {/* Pages */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="line-scale-party" />
              </div>
              <h6 className="mt-3">
                Loading Pages
                <small>Welcome to PrettyCoolPattern</small>{" "}
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/pages" component={UserPages} />
      </Suspense>

      {/* Applications */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-pulse" />
              </div>
              <h6 className="mt-3">
                Loading Application Tools
                <small>Welcome to PrettyCoolPattern</small>{" "}
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/apps" component={Applications} />
      </Suspense>

      {/* Dashboards */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center loader">
                <Loader
                  style={{
                    transform: "scale(5.5)",
                    top: "-100px",
                    position: "relative",
                    display: "center",
                    left: "25px",
                  }}
                  type="ball-clip-rotate-multiple"
                />
              </div>
              <h2 className="mt-3" style={{ color: "white" }}>
                Loading Dashboard Tools
                <small style={{ color: "white" }}>
                  Welcome to PrettyCoolPattern
                </small>
              </h2>
            </div>
          </div>
        }
      >
        <Route path="/dashboards" component={Dashboards} />
      </Suspense>

      <Route exact path="/" component={LandingPage} />
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
