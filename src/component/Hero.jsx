import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import cloud from '../images/cloud.png'
import sky from "../images/sky.jpg"
import mountain from '../images/mountain.png'
import airballon1 from '../images/airBallon1.png'
import airballon2 from '../images/airBallon2.png'
import sun from "../images/sun.png"

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const textX = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const airballons = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const mountainSpeed = useTransform(scrollYProgress, [0, 1], [200,0 ]);


  // textY.onChange((value) => {
  //   console.log(value);
  // });

  return (
    <div
      ref={container}
      className="w-screen h-screen relative overflow-hidden"
    >
      <img src={sky} alt="sky" className="absolute z-[0] bottom-4 w-full h-full"/>
      <motion.img style={{y:mountainSpeed}}  src={mountain} alt="mountain" className="absolute z-[10] bottom-[-0%] border-0 w-full" />
      <motion.img style={{y:textY}} src={sun} alt="sun" className="absolute top-[-30%] left-[30%] w-[800px] h-[800px]"/>

      <motion.div style={{y:textY}}
        className="text-9xl absolute
      font-bold text-white left-[32%] top-1/4 font-serif"
      >
        WELCOME
      </motion.div>

        <motion.img style={{y:airballons}} src={airballon1} alt="airballon1" className="absolute bottom-[70%] right-48 w-16 h-20" />
        <motion.img style={{y:airballons}} src={airballon2} alt="airballon2" className="absolute bottom-[80%] right-60 w-16 h-20"/>
        <motion.img  style={{x:textX}} src={cloud} alt="cloud" className="w-32 h-32 absolute bottom-1/3 left-16"/>
        <motion.img  style={{x:textX}} src={cloud} alt="cloud" className="w-40 h-40 absolute bottom-2/3 left-28"/>
        <motion.img  style={{x:textX}} src={cloud} alt="cloud" className="w-36 h-36 absolute bottom-2/4 left-40"/>
    
    </div>
  );
};

export default Hero;
