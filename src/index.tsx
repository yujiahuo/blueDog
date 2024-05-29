import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderMenu from './components/headerMenu';
import Footer from './components/footer';
import './styles/siteStyles.css';
import './scripts/setupPage';
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
import AnimalActors from './pages/animalActors';
import OutAndAbout from './pages/outAndAbout';
import Skills from './pages/skills';
import Seminars from './pages/seminars';
import BehaviorAssessment from './pages/behaviorAssessment';
import ServiceDog from './pages/serviceDog';
import About from './pages/about';
import Products from './pages/products';
import PickingNewDog from './pages/pickingNewDog';


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
        <Route path="/animalactors" element={<AnimalActors />} />
        <Route path="/outandabout" element={<OutAndAbout />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/seminars" element={<Seminars />} />
        <Route path="/behaviorassessment" element={<BehaviorAssessment />} />
        <Route path="/pickingnewdog" element={<PickingNewDog />} />
        <Route path="/servicedog" element={<ServiceDog />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
