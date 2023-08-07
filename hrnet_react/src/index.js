import React from 'react';
import ReactDOM from 'react-dom/client';
//CSS
import '../src/utils/style/index.css';
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//composant
import Header from './components/Header';
// Pages
import Home from './pages/Home';
import CreateEmployee from './pages/CreateEmployee';
import EmployeesList from './pages/EmployeesList';
import NotFound from './pages/Notfound';
// store
import { Provider } from 'react-redux';
import store from './utils/redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>

    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CreateEmployee" element={<CreateEmployee/>} />
          <Route path="/EmployeesList" element={<EmployeesList/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
