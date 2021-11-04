import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch,Redirect } from 'react-router';
import About from './About';
import Contact from './Contact';
import Error404 from './Error';
import Home from './Home';
import Navbar from './NavbarComp';
import Service from './Service';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
const App = () => {
    useEffect(() => {
          Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    }, [])
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/error' component={Error404} />
        <Redirect from='/' to='/home'  />
      </Switch>
    <Footer />
    </>
  )
}

export default App;
