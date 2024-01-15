import { useScroll, useTransform , motion } from "framer-motion";
import { useRef } from "react"


import images from '../allImages'

const UnderWater = ()=>{
     const container = useRef();
    

     const {scrollYProgress} = useScroll(
        {
            target:container,
            offset:["start end","start start"]
        }
     )

     const {scrollYProgress:scrollYProgress1} = useScroll(
        {
            target:container,
            offset:["start start","end start"]
        }
     )

     const {scrollYProgress:scrollYProgress2} = useScroll(
        {
            target:container,
            offset:["start center","end start"]
        }
     )

     const {scrollYProgress:scrollYProgress3} = useScroll(
        {
            target:container,
            offset:["start end","end start"]
        }
     )

    const y = useTransform(scrollYProgress,[0,1],[500,0])
    const textY = useTransform(scrollYProgress,[0,1] , [-200,100])
    const bubble = useTransform(scrollYProgress,[0,1],[3000,-200])

    const fishSpeed1 = useTransform(scrollYProgress1,[0,1],[0,-3000])
    const fishSpeed2 = useTransform(scrollYProgress2,[0,1],[0,-1200])
    const jfishY = useTransform(scrollYProgress2,[0,1],[0,-500])
    const jfishX = useTransform(scrollYProgress2,[0,1],[-Math.random()*100,500])

    const turtal = useTransform(scrollYProgress3,[0,1],[0,900])
    const turtalX = useTransform(scrollYProgress3,[0,1],[0,-1300])
    const turtals = useTransform(scrollYProgress3,[0,1],[0,80])

    fishSpeed1.onChange((value)=> console.log(value))

    return(
        <div ref={container} className="w-screen h-screen relative overflow-hidden  bg-[#3a1473]">
            <motion.img style={{y:y}} src={images.underWaterLayer1} alt="under-water" className="absolute w-full h-full z-1"/>
            <motion.h1 style={{y:textY}} className="font-bold text-9xl absolute text-white font-serif left-5 z-2">IN TO THE OCIEN</motion.h1>

         {/* turtle */}
            <motion.img style={{y:turtal,x:turtalX,scale:turtals}} src={images.turtle} alt="turtle" className="absolute h-2 w-4 top-1/4 right-0 -rotate-12 z-20"/>

            <img style={{y:y}} src={images.underWaterLayer2} alt="wLayer1" className="absolute z-10 w-full h-full" /> 
            <motion.img style={{x:fishSpeed1}} src={images.fish1} alt="fish1" className="absolute w-40 h-32 bottom-[35%] -right-40 " /> 
            <motion.img style={{x:fishSpeed2,y:2}} src={images.fish2} alt="fish2" className="absolute w-48 h-28 bottom-[20%] left-2/4 z-[11] drop-shadow-2xl" /> 
            <motion.img style={{y:bubble}} src={images.bubbles} alt="bubbles" className="absolute w-40 h-1/5 left-[60%] z-[11] -top-40" /> 
            <motion.img style={{y:jfishY,x:jfishX}} src={images.jellyFish} alt="jelly-fish" className="absolute w-52 h-1/5 right-[10%] z-[11] bottom-12" /> 
        </div>
    )

}

export default UnderWater