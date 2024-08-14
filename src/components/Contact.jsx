import { CONTACT } from "../constraints/index.js";
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{ duration:0.5 }}
      className="my-10 text-center text-4xl">Get in touch</motion.h1>
      <div className="text-center tracking-tighter">
        {CONTACT.map((contact, index) => (
          <div key={index}>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{ duration:1 }}
            className="my-4">{contact.address}</motion.p>
            <motion.p 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{ duration:1 }}
            
            className="my-4">{contact.phoneNo}</motion.p>
            <a href={`mailto:${contact.email}`} className="border-b">{contact.email}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
