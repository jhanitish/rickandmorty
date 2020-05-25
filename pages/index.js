import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

const Index = () => {
  return(
      <>
        <App />
      </>
  )
};

export default Index;

// const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
// renderMethod(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
