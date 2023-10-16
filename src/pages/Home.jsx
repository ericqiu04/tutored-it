import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Features from '../components/Features'
import Footer from '../components/Footer'
import About from '../components/About'
import Stats from '../components/Stats'

export default function Home() {
  return (  
    <>
      <Navbar />
      <Intro />
      <Features />
      <Stats />
      <Footer />
    </>
  )
}