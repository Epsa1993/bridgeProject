import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import LoginPage from './components/login/LoginPage';
import ForgotPassword from './components/login/ForgotPassword';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="login" component={LoginPage} />
    <Route path="forgot-password" component={ForgotPassword} />
  </Route>
);
