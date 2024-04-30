import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderMenu from './components/headerMenu';
import Footer from './components/footer';
import './styles/siteStyles.css';
import './scripts/setupPage';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import BehaviorModification from './pages/behaviorModification';
import About from './pages/about';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeaderMenu />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/behaviormodification" element={<BehaviorModification />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
