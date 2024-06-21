import React, { useEffect, useState } from "react";
import images1 from "../Assets/counts-img.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BsEmojiSmile } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

function About() {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: headerRef, inView: headerInView } = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processHeaderRef, inView: processHeaderInView } = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });

  const [reset, setReset] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setReset((prev) => !prev);
    }, 4000); // Adjust this duration to match the longest CountUp duration
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <div id="about" className="px-10 py-16">
        <div className="w-full container mx-auto">
          <motion.div
            className="flex justify-center gap-2 mb-8 gap-5 items-center"
            ref={headerRef}
            initial={{ y: 100 }}
            animate={headerInView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="line bg-blue-800"></div>
            <h2 className="text-3xl font-semibold">About Us</h2>
            <div className="line bg-blue-800"></div>
          </motion.div>
          <motion.div
            className="flex flex-wrap text-start"
            ref={descriptionRef}
            initial={{ y: 100 }}
            animate={descriptionInView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-full lg:w-1/2 my-8">
              <p className="mb-6">
                We are Akeshya, a firm that specializes in web design and
                marketing. We help transform ideas into reality with a team of
                passionate graphic designers, web developers, and seasoned
                marketing advisors.
              </p>
              <ul className=" space-y-2">
                <li className="flex items-start">
                  <i className="ri-check-double-line text-blue-500 mr-2"></i> We
                  started with a simple idea: do what is best for the client.
                </li>
                <li className="flex items-start">
                  <i className="ri-check-double-line text-blue-500 mr-2"></i>{" "}
                  Our methodical and individual approach to each project
                  delivers the finest possible results for your media.
                </li>
                <li className="flex items-start">
                  <i className="ri-check-double-line text-blue-500 mr-2"></i>{" "}
                  Our day-to-day work is to solve your problems utilizing the
                  most up-to-date, practical adaptive technology, and we have a
                  lot of fun doing it.
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 pt-4 lg:pt-0 my-8">
              <p className="mb-6">
                We're professional, but we're also friendly, and we'll always
                pay attention to your concerns. We expect to work with
                innovative people that have an open mind and are dedicated to
                making every idea a reality. We want to hear from you if you're
                interested in SEO, have Web Development ideas, or require a
                graphic designer who can match your goals.
              </p>
              <a
                href="#services"
                className="bg-blue-500 text-white inline-block  py-2 px-4 rounded-full hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div id="counts" className="counts">
        <div className="container">
          <div className="flex justify-center items-center gap-8">
            <div className="w-full xl:w-5/12 flex justify-center items-center xl:justify-start">
              <motion.img
                src={images1}
                alt=""
                className="img-fluid"
                ref={servicesRef}
                initial={{ x: -300 }}
                animate={servicesInView ? { x: 0 } : { x: -100 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </div>
            <div className="w-full xl:w-7/12 pt-4 xl:pt-0">
              <div className="content flex flex-col justify-center">
                <motion.div
                  className="flex flex-wrap"
                  ref={processHeaderRef}
                  initial={{ x: 200 }}
                  animate={processHeaderInView ? { x: -20 } : { x: 200 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-full md:w-1/2 flex justify-center items-center mb-4">
                    <div className="gap-5 flex justify-center items-center">
                      <BsEmojiSmile className="text-blue-800 w-10 h-10" />
                      <div>
                        {/* {inView && ( */}
                          <CountUp
                           key={reset}
                            start={0}
                            end={3835039}
                            duration={2}
                            className="countNumbers"
                          />
                        {/* )} */}
                        <p className="achieve">
                          <strong>Organic Reach</strong> (Global)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center  items-center mb-4">
                    <div className="gap-5 flex justify-center items-center">
                      <SlNotebook className="text-blue-800 w-10 h-10" />

                      <div >
                        {/* {inView && ( */}
                          <CountUp
                           key={reset}
                            start={0}
                            end={85}
                            duration={3}
                            className="countNumbers"
                          />
                        {/* )} */}
                        <p className="achieve">
                          <strong>Campaigns</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center  items-center mb-4">
                    <div className="gap-5 flex justify-center items-center">
                      <CiClock2 className="text-blue-800 w-12 h-12" />
                      <div>
                        {/* {inView && ( */}
                          <CountUp
                           key={reset}
                            start={0}
                            end={14081}
                            duration={3}
                            className="countNumbers"
                          />
                        {/* )} */}
                        <p className="achieve">
                          <strong>Watch Hours</strong> (Asia){" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex  justify-center  items-center mb-4">
                    <div className="gap-3 flex justify-center flex- start items-center">
                      <IoGlobeOutline className="text-blue-800 w-12 h-12" />
                      <div>
                        {/* {inView && ( */}
                          <CountUp
                           key={reset}
                            start={0}
                            end={17}
                            duration={1}
                            className="countNumbers"
                          />
                        {/* )} */}
                        <p>
                          <strong>Excellent CTR %</strong> (Asia)
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
