import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {jsx as _jsx} from "react/jsx-dev-runtime"
import App from './App.jsx';


// Custom React component
function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );

  }
// JSX syntax for a React element
const anotherElement = (
  <a href = "https://google.com" target='_blank' >Visit Google</a>
)
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'Click me to visit google'
)

// Rendering the custom component and the manually created element
ReactDOM.createRoot(document.getElementById('root')).render(
 // anotherElement
   //reactElement
 // <MyApp/>  
   <App />
)

