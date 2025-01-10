import React from 'react'
import GreekSalad from './assets/GreekSalad.jpg'
import Bruchetta from './assets/Bruchetta.jpg'
import LemonDessert from './assets/LemonDessert.jpg'

const About = () => {

    const containerStyle = {
      position:"relative",
      width:"200px",
      height:"300px",
      display:"flex",
    };
    const img1Style = {
      position:"absolute",
      top:0,
      left:0,
      width:"100%",
      height:"100%",
      objectFit:"cover",
      zIndex: 1,
      borderRadius:"25px"
    };
    const img2Style = {
      position:"absolute",
      top:"50px",
      right:"50px",
      width:"100%",
      height:"100%",
      objectFit:"cover",
      zIndex: 2,
      borderRadius:"25px"
    };
    const img3Style = {
      position:"absolute",
      top:"100px",
      right:"100px",
      width:"100%",
      height:"100%",
      objectFit:"cover",
      zIndex: 2,
      borderRadius:"25px"
    };

  return (
    <section className='AboutSectionContainer'>
      <div className='AboutSectionLeftSide'>
        <p style={{margin:"0px",color:"#F4CE14",fontFamily:'Markazi Text',fontSize:"65px",fontWeight:"bold"}}>Little Lemon</p>
        <p style={{margin:"0px",color:"#495E57",fontFamily:'Markazi Text',fontSize:"35px"}}>Chicago</p>
        <p style={{width:"350px",height:"200px"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </div>
      <div className='AboutSectionRightSide' style={containerStyle}>
        <img style={img1Style} src={GreekSalad}/>
        <img style={img2Style} src={Bruchetta}/>
        <img style={img3Style} src={LemonDessert}/>
      </div>
    </section>
  )
}

export default About