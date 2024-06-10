import React from 'react'
import "./Bestseller.css"
import BestsellerOne from "../../assets/img/BestsellerOne.png"
import BestsellerTwo from "../../assets/img/BestsellerTwo.png"
import BestsellerThree from "../../assets/img/BestsellerThree.png"
import BestsellerFour from "../../assets/img/BestsellerFour.png"
import BestsellerFive from "../../assets/img/BestsellerFive.png"
import BestsellerSix from "../../assets/img/Bestsellersix.png"


export const Bestseller = () => {
    return (
        <>
            <div className='container Bestseller flex justify-center mt-20 mx-auto'>
            <div className='flex justify-center '>
                <div className='productBestseller grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                    
                    <img src={BestsellerOne} alt="Fotograf" />
                    <img src={BestsellerTwo} alt="Fotograf" />
                    <img src={BestsellerThree} alt="Fotograf" />
                    <img src={BestsellerFour} alt="Fotograf" />
                    <img src={BestsellerFive} alt="Fotograf" />
                    <img src={BestsellerSix} alt="Fotograf" />
                </div>
            </div>
            </div>

        </>
    )
}
