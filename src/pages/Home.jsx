import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Features from '../components/Features'
import Footer from '../components/Footer'
import About from '../components/About'
import { Divider } from '@chakra-ui/react'

export default function Home() {
  return (  
    <>
      <Navbar />
      <Intro />
      <Features />
      <Divider />
      <About />
      <Footer />
    </>
  )
}