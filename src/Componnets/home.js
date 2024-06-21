import React from "react";
import Hero from "../Assets/hero-img.png";
import img1 from "../Assets/client-1.png";
import img2 from "../Assets/client-2.png";
import img3 from "../Assets/client-3.png";
import img4 from "../Assets/client-4.png";
import img5 from "../Assets/client-5.png";
import img6 from "../Assets/client-6.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedImage = ({ src, alt, duration, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,  
  });

  return (
    <motion.img
      ref={ref}
      src={src}
      className="img-fluid"
      alt={alt}
      initial={{ scale:0, }}
      animate={inView ? { scale:1} : { scale:0 }}
      transition={{ duration, delay }}
    />
  );
};

const Home = () => {

  return (
    <div>
      <div id="home" className="flex items-center h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 pt-20 lg:pt-0 order-2 lg:order-1 flex flex-col justify-center">
              <motion.h1
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Grow your business with Akeshya
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-2xl"
              >
                We are a team of talented website designers, developers &
                digital marketers
              </motion.h2>
              <div className="mt-8" data-aos="fade-up" data-aos-delay="800">
                <motion.a
                  href="#about"
                  className="bg-white-600 text-blue-700  border-2 border-blue-700 px-6 py-3 rounded-3xl hover:bg-blue-700 hover:text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Get Started
                </motion.a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <motion.img
                src={Hero}
                className="w-90 h-auto"
                alt="banner..."
                initial={{ opacity: 0, x: 80, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 10 }}
                transition={{
                  y: {
                    type: "smooth",
                    repeatType: "mirror",
                    duration: 2,
                    repeat: Infinity,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="clients" className="clients">
      <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
          <AnimatedImage src={img1} alt="Image 1" duration={1} delay={0} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
          <AnimatedImage src={img2} alt="Image 2" duration={.5} delay={0.2} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
          <AnimatedImage src={img3} alt="Image 3" duration={.5} delay={0.4} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
          <AnimatedImage src={img4} alt="Image 4" duration={.5} delay={0.6} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
          <AnimatedImage src={img5} alt="Image 5" duration={.5} delay={0.8} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
        <AnimatedImage src={img6} alt="Image 5" duration={.5} delay={0.8} />

        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Home;
