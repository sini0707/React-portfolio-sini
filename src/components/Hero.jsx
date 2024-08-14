import profilePhoto from "../assets/sini brocamp photo.jpg";
import { motion } from "framer-motion";

const container=(delay)=>({
  hidden: {x:-100 , opacity:0 },
  visible:{
    x:0,
    opacity:1,
    transition:{ duration:0.5,delay:delay },
  },
});


const Hero = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              //  initial={{ x: -100,opacity:0 }}
              // animate={{x:0,opacity:1}}
              // transition={{duration:0.5,delay:2}}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                Sini Thomas
              </motion.h2>
              <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Mern Stack Developer
              </motion.span>
              <motion.p variants={container(1)}
              initial="hidden"
              animate="visible" 
              className="my-2 max-w-xl py-6 font-light tracking-tighter">
                Self-taught Mern Stack Developer with proficiency in both front-end and back-end development. My dedication lies in the 
                transformation of conceptual ideas into fully functional web applications, leveraging my expertise in React.js and Node.js. 
                Deeply committed to remaining up-to-date with the latest trends in web development.
              </motion.p>
            </div>
          </div>
          <div className="w-full  lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial ={{ x:100, opacity : 0 }}
animate={{x:0 , opacity:1}}
transition={{duration:1,delay:1.2}}
             src={profilePhoto} alt="profilephoto"/>
            </div>   
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  