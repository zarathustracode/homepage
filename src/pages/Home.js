import HeroSection from "../components/HeroSection"
import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Features from "../components/Features"

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Cards title='Check out my portfolio' />
      <Footer />
    </>
  )
}

export default Home