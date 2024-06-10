import { Bestseller } from "./Components/Bestseller/Bestseller"
import Footer from "./Components/Footor/Footer"
import { HeroSection } from "./Components/HeroSection/HeroSection"
import Navbar from "./Components/Navbar/Navbar"
import { Product } from "./Components/Product/Product"
import { SecondSection } from "./Components/SecondSection/SecondSection"



function App() {
  

  return (
    <>
      <Navbar />
      <Product />
      <Bestseller />
      <HeroSection />
      <SecondSection />
      <Footer />
    </>
  )
}

export default App
