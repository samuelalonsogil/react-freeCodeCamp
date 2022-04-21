import './App.css';
import Navbar from "./components/Navbar";
import {Route,Routes} from "react-router-dom";
import FirstComponent from "./components/FirstComponent";
import Home from "./components/Home";
import SecondComponent from "./components/SecondComponent";
import FirstChallenge from "./components/FirstChallenge";
import BusinessCard from "./components/BusinessCard";
import ContactApp from "./components/Contact/ContactApp";

export default function App() {
  return (
      <>
        <Navbar/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/first-component'} element={<FirstComponent/>}/>
            <Route path={'/second-component'} element={<SecondComponent/>}/>
            <Route path={'/first-challenge'} element={<FirstChallenge/>}/>
            <Route path={'/business-card'} element={<BusinessCard/>}/>
            <Route path={'/contact'} element={<ContactApp/>}/>

        </Routes>
      </>
  );
}


