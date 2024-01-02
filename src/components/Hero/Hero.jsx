/* eslint-disable react/display-name */

import  { useEffect, useRef } from "react"
import "./Hero.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import video from "../../assets/Hero_video.mp4"


const Hero = () => {
    const Heading1 = useRef(null);
    const Heading2 = useRef(null);
    const videoRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: Heading1.current,
                scroller: ".main",
                start: "top 8%",
                end: "top 0%",
                scrub: 2,
              },
        });

        tl.to(Heading1.current, {
            x:-100,
            
        },'anim')

        tl.to(Heading2.current, {
            x:100,
        }, 'anim')

        tl.to(videoRef.current, {
            width:'95%',
        }, 'anim')

        var tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: Heading1.current,
                scroller: ".main",
                start: "top -100%",
                end: "top -120%",
                scrub: 2,
              },
        });

        tl1.to('.main', {
            backgroundColor:"white"
        })
        
    },[])
  return (
    <section className="hero">
        <div className="Hero_content">
            <h1 ref={Heading1}>Digitally Crafted</h1>
            <h2 ref={Heading2}>Brand Experience.</h2>
        </div>
        {/* <img ref={imgRef} src="https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" width={1000} /> */}
        <video autoPlay muted loop ref={videoRef} src={video}></video>
    </section>
  );
};

export default Hero