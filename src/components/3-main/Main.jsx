import { useState } from "react"
import "./Main.css"
import { myProjects } from "./myProjects"
import { AnimatePresence, motion } from "motion/react"

const Main = () => {
  const [currentActive, setCurrentActive] = useState("All")
  const [array, setArray] = useState(myProjects)
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory)
    const newArray3 = myProjects.filter((item) => {
      const nestedArray3 = item.category.filter((myItem) => {
        return myItem == buttonCategory
      })
        return nestedArray3[0] == buttonCategory
    })
     setArray(newArray3)
    
  }
  return (
    <main className="flex">
      <section className="left-section flex">
        <button onClick={() => {
          setCurrentActive("all");
          setArray(myProjects)
        }} className={currentActive === "all"? "active": null}>All projects</button>
        <button onClick={() => handleClick("css")} className={currentActive === "css"? "active" : null}>HTML & CSS</button>
        <button onClick={() => handleClick("js")} className={currentActive === "JavaScript" ? "active" : null}>JavaScript</button>
        <button onClick={() => {handleClick("react")}} className={currentActive === "react" ? "active" : null}>React & MUI</button>
        <button onClick={() => handleClick("bootstrap")} className={currentActive === "bootstrap" ? "active" : null}>Bootstrap</button>
        <button onClick={() => {handleClick("node")}} className={currentActive === "node" ? "active" : null}>Node & Express</button>
      </section>



      <section className="right-section flex">
        <AnimatePresence>
{array.map((item) => {
  return(
    <motion.article
    layout
    initial={{transform: "scale(0)"}}
    animate={{transform: "scale(1)"}}
    transition={{damping:8, type:"spring",stiffness:50}}
    key={item.imgPath} className="card">
    <img width={266} src={item.imgPath} alt=""/>
    <div style={{width:"266px"}} className="box">
      <h1 className="title">{item.projectTitle}</h1>
      <p className="sub-titile">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veniam error voluptatem sed iusto. Ipsum fuga quis deleniti dolores, officiis earum fugiat, esse quia eos impedit nobis, reiciendis maxime nulla.</p>
      <div className="flex icons">
        <div style={{gap:"11px"}} className="flex">
          <div className="icon-link"></div>
          <div className="icon-github"></div>
        </div>
        <a href="" className="link flex">
          more
          <span style={{alignSelf:"end"}} className="icon-arrow-right"></span>
        </a>
      </div>
    </div>
  </motion.article>
  )
})}
</AnimatePresence>
      </section>
    </main>
  )
}

export default Main
