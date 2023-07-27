import Header from "./Header"
import  Style  from '@/app/styles/Heropage.module.css';
import { Hero_content } from "./Hero_content";
import Aboutme from './Aboutme';
import Service from "./Service";
import Contact from "./Contact"
import Footer from "./Footer"
const Heropage = () => {
  return (
    <>
    <section className={Style.Heropagemodulecss}>
    <Header/>
    <Hero_content/>
    </section>
    <Aboutme/>
    <Service/>
    <Contact/>
   
    
    <Footer/>
    </>
  )
}

export default Heropage