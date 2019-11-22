import ReactDOM from 'react-dom';
import React from 'react';

import FormContainer from "./components/container/FormContainer.jsx";
import TestComponent  from "./components/container/TestComponent.jsx";

window.FormContainer = FormContainer;

ReactDOM.render(React.createElement(FormContainer), document.getElementById("about"));