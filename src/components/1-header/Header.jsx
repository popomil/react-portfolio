import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark")
  // const [changeIcon, setChangeIcon] = useState(false)
  useEffect(()=>{
    if (theme === "light") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  },[theme])
  return (
    <header className="flex">
      <button className="menu icon-menu flex" onClick={() => setShowModal(true)}/>
      <div/>
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button onClick={() => {
        // send value LocalStorage
        localStorage.setItem("currentMode",theme === "dark" ? "light":"dark")
        // get value from LocalStorage
        setTheme(localStorage.getItem("currentMode"))
        }} className="mode flex">
        {
          theme === "dark" ? (<span className="icon-moon-o"/>):<span className="icon-sun"/>
        }
      </button>
{
  showModal &&
  <div className="fixed">
  <ul className="modal">
    <li>
      <button className="icon-close" onClick={() => setShowModal(false)}/>
    </li>
    <li><a href="">About</a></li>
    <li><a href="">Articles</a></li>
    <li><a href="">Projects</a></li>
    <li><a href="">Speaking</a></li>
    <li><a href="">Contact</a></li>
  </ul>
</div>
}
    </header>
  );
};

export default Header;
