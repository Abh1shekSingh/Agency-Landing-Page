/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import Hero from "./components/Hero/Hero"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import About from "./components/About/About"
const App = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

  }, [])

  

  return (
    <div className="main">
      <div className="page1">
        <Navbar />
        <Hero ref={mainRef} />
      </div>
      <div className="page2">
        <About />
      </div>
    </div>
  )
}

export default App