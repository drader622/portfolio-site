/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { headshot } from "../assets";

const Hero = () => {
   return (
      <>
         <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto overflow-hidden">
            <div
               className={`absolute inset-0 sm:top-[200px] top-[150px] 
          lg:top-[150px] xl:top-[200px] ${styles.paddingAbout} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
            >
               <div className="flex flex-col justify-center items-center mt-5 ml-3">
                  <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
                  <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
               </div>

               <div>
                  <h1
                     className={`${styles.heroHeadText} font-poppins uppercase`}
                  >
                     Hello, I'm{" "}
                     <span
                        className="sm:text-orange sm:text-[50px] lg:text-[90px]
                text-orange text-[50px] font-mova
                font-extrabold uppercase"
                     >
                        Danielle
                     </span>
                  </h1>
                  <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
                     A Software Engineer with a passion for all things involving
                     tech. I work with HTML, CSS, JavaScript, and C# to create
                     full stack web applications{" "}
                     <br className="sm:block hidden" />I have a deep passion for
                     understanding how things work, and then I use that
                     knowledge to logically develop improvements on that item’s
                     functionality. Developing responsive, well designed, and
                     well tested applications is something I take pride in.
                  </p>
               </div>
               <div
                  className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
               ></div>

               <div></div>
            </div>

            <div
               className="absolute xs:bottom-10 bottom-4 w-full 
          flex justify-center items-center"
            >
               <a href="#projects">
                  <div
                     className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
                  >
                     <motion.div
                        animate={{
                           y: [0, 24, 0],
                        }}
                        transition={{
                           duration: 1.5,
                           repeat: Infinity,
                           repeatType: "loop",
                        }}
                        className="w-3 h-3 rounded-full bg-taupe mb-1"
                     />
                  </div>
               </a>
            </div>

            <div>
               <img
                  className="headshot absolute bottom-13 ml-[60vw] 
            lg:ml-[65vw] lg:mt-[10vw] md:ml-[60vw] xmd:ml-[60vw]"
                  src={headshot}
                  alt="shaquille"
               />
            </div>
         </section>
      </>
   );
};

export default Hero;
