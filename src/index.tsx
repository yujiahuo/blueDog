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
import PuppyStayAndTrain from './pages/puppyStayAndTrain';
import NewDog from './pages/newDog';
import NewPuppy from './pages/newPuppy';
import BabyPrep from './pages/babyPrep';
import About from './pages/about';
import Products from './pages/products';


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
        <Route path="/puppystayandtrain" element={<PuppyStayAndTrain />} />
        <Route path="/newdog" element={<NewDog />} />
        <Route path="/newpuppy" element={<NewPuppy />} />
        <Route path="/babyprep" element={<BabyPrep />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
