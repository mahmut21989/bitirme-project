import React from 'react'
import "./HeroSection.css"
import HeroImg from "../../assets/img/hero-section.png"

export const HeroSection = () => {
  return (
    <>
    
    <div className='container HeroSection'>
        <div>
            <img src= {HeroImg} alt="fotograf" />
        </div>
    </div>
    
    
    </>
  )
}
