import React from 'react'
import "./Product.css"
import ProductImgOne from "../../assets/img/productImgOne.png"
import ProductImgTwo from "../../assets/img/productImgTwo.png"
import ProductImgThree from "../../assets/img/productImgTwo.png"
import ProductImgFour from "../../assets/img/productImgTwo.png"
import ProductImgFive from "../../assets/img/productImgTwo.png"
import ProductImgSix from "../../assets/img/productImgTwo.png"



export const Product = () => {
    return (
        <>

             <div className="container ProductArea justify-center flex mx-auto">
                <div className="review grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <img src={ProductImgOne} alt="image1" />
                    <img src={ProductImgTwo} alt="image1" />
                    <img src={ProductImgThree} alt="image1" />
                    <img src={ProductImgFour} alt="image1" />
                    <img src={ProductImgFive} alt="image1" />
                    <img src={ProductImgSix} alt="image1" />
                    
                </div>

        </div>


        </>
    )
}
