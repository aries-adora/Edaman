import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../routes';
import { Container, Row, Col } from "react-bootstrap";
import '../css/sidebar.css'

// Page
import Signin from './Main/Signin';
import Signup from './Main/Signup';
import Dashboard from './Main/Dashboard';
// import LoginBeta from './Main/LoginBeta';


//components
import Sidebar from '../components/Sidebar';
import Preloader from '../components/Preloader';

const FullPageView = ({ component: Component, ...rest }) => {
  const [, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Component {...props} /> </> ) } />
  );
};

const WithSideView = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <>
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">      
              <Sidebar />
            </Col>
      
            <Col xs={10}>
              <Component {...props} />
            </Col>
          </Row>
        </Container>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <FullPageView exact path={ routes.Signin.path } component={ Signin } />
    <FullPageView exact path={ routes.Signup.path } component={ Signup } />
    <WithSideView exact path={ routes.Dashboard.path } component={ Dashboard } />
    <WithSideView exact path={ routes.MainContent.path } component={ Dashboard } />
    {/*} <WithSideView exact path={ routes.LoginBeta.path } component={ LoginBeta } />
       {*/}
  </Switch>
);
