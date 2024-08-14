import about from "../assets/background image-pic.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <img className="rounded-2xl w-full" src={about} alt="about" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          <div>
            <p>
              Highly skilled MERN STACK developer, driven by self-learning and a passion for innovation. Proficient in crafting
              dynamic front-end interfaces and robust back-end solutions. Skilled in designing RESTful APIs and adept at cloud
              deployment. Passionate about staying ahead of industry trends for innovative web development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
