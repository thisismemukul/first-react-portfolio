import React from 'react';
import Main from './Components/Main';
const About = () => {
    const aboutImg = "https://c.tenor.com/PVAblEdADjMAAAAi/venom-marvel-vs-capcom.gif";
    return (
        <>
        <Main 
            codeLeft="Know"
            codeSpan=" | " 
            codeRight="About Me" 
            nameSpan="I’m a designer who codes," 
            name=" with 3+ Years of Experience" 
            para="I've worked remotely on projects for leading brands, and startups.I care about creating world-class, and useful products that help people and make a difference.I can be as involved in your project as you need me to be, from the seed of the idea, creative direction, web development, graphic design, and even the back-end development." 
            btnFirst="Home"
            toFirst="/home"
            btnSecond="Contact Me"  
            toSecond="/contact"
            imgSrc={aboutImg} 
        />
        </>
    )
}

export default About;



