import React from 'react';
import homeImg from './Img/main.gif';
import Main from './Components/Main';
const Home = () => {
    return (
        <>
            <Main 
                codeLeft="Web Developer"
                codeSpan=" | " 
                codeRight="Graphic Designer" 
                nameSpan="Mukul" 
                name="Saini" 
                homeHeading="homeHeading"
                para="I'm a Full-Stack Web Developer. I spend my whole day, practically every day, experimenting with programming languages and designing tools; I build websites that delight and inform. I do it well." 
                btnFirst="My Services" 
                toFirst="/react-portfolio/service"
                btnSecond="Contact Me"  
                toSecond="/react-portfolio/contact"
                imgSrc={homeImg} 
            />
        </>
    )
}

export default Home;



