import Lottie from "lottie-react"
import { motion } from "motion/react"
import "./Hero.css"
import developer from "../../../public/animation/deveolper.json";
import { useRef } from "react";
const Hero = () => {
  const lottieRef = useRef()
  return (
    <section className="hero flex">
     <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1)"}}
          transition={{damping:6, type:"spring"}}
           src="./pop4.jpg" alt="" className="avatar" />
          <div className="icon-verified"/>
        </div>
        <motion.h1
        initial={{transform:"scale(0)"}}
        animate={{transform:"scale(1)"}}
        transition={{damping:6}}
         className="title">Software designer, founder, and amateur astronaut</motion.h1>
        <p className="sub-title">I’m Abanoub Emil, a software designer and entrepreneurbased in New York City. I’m founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
     </div>
     <div className="right-section animation">
     <Lottie
     lottieRef={lottieRef}
     onLoadedData={() => {
      lottieRef.current.setSpeed(0.5)
     }
     } 
       animationData={developer} />
     </div>
    </section>
  )
}

export default Hero
