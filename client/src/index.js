import React, { Fragment, useState, useEffect }  from "react";
import { render } from "react-dom";
import io from 'socket.io-client';
import 'babel-polyfill';

import C from './consts';
import E from './events';

const socket = io.connect(C.SOCKET_URL);

const Messages = props => {
  return <div>Messages component</div>
};

const Form = props => {
  return <div>Form component</div>
}

const UsersBar = props => {
  return <div>UsersBar component</div>
}

const OnlineUserBar = props => {
 return <div>onlineUserBar component</div>
}
const App = () => (
  <div>
    <h1>Hello world!!!!!</h1>
  </div>
);

render(<App/>, document.getElementById("root"));
