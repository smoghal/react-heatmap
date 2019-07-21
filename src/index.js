import React from 'react';
import ReactDOM from 'react-dom';
// import Amplify from 'aws-amplify';
// import AWS from 'aws-sdk';
import App from './components/app';
import AppHeader from './components/header/header';
// TODO - check ENV and load appropriate config_* appropriately
import config from './config_dev';

/* eslint-disable camelcase */
// AWS SDK & AWS Amplity Configuration
// https://aws-amplify.github.io/amplify-js/media/api_guide#manual-configuration
// AWS.config.region = 'us-east-1';
// Amplify.configure({
//   aws_appsync_graphqlEndpoint: config.APPSYNC_GQL_ENDPOINT,
//   aws_appsync_region: config.AWS_REGION,
//   aws_appsync_authenticationType: config.APPSYNC_AUTH_TYPE,
//   aws_appsync_apiKey: config.APPSYNC_API_KEY
// });
/* eslint-enable camelcase */

ReactDOM.render(
  <div>
    <AppHeader />
    <App />
  </div>
  , document.querySelector('.app-container'));
