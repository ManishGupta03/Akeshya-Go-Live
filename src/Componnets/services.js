import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiBasketballFill } from "react-icons/ri";
import { FaEarthAfrica } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";
import { GrNotes } from "react-icons/gr";

const Services = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processHeaderRef, inView: processHeaderInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processStep1Ref, inView: processStep1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processStep2Ref, inView: processStep2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processStep3Ref, inView: processStep3InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processStep4Ref, inView: processStep4InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: coreFeaturesRef, inView: coreFeaturesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div>
      <div id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div>
            <motion.div
              className="mb-2 flex justify-center items-center gap-5"
              ref={headerRef}
              initial={{ y: 180 }}
              animate={headerInView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                className="w-16 h-1 bg-blue-800"
                style={{ height: "3px" }}
              ></div>
              <h2 className="text-3xl font-semibold">SERVICES</h2>
              <div
                className="w-16 h-1 bg-blue-800"
                style={{ height: "3px" }}
              ></div>
            </motion.div>
            <div className="my-4 text-center">
              <motion.p
                ref={descriptionRef}
                initial={{ y: 180 }}
                animate={descriptionInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Akeshya will serve as your consultant and development partner to
                help you turn your idea into a reality.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="flex flex-wrap"
            ref={servicesRef}
            initial={{ y: 180 }}
            animate={servicesInView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="w-full md:w-1/2 lg:w-1/4 ">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <div className="icon mb-4">
                  <RiBasketballFill className="bg-blue-800 rounded-full text-gray-100 p-3 w-12 h-12" />
                </div>
                <h4 className="title text-xl font-semibold my-2">
                  <a href="#">Design</a>
                </h4>
                <p className="description">
                  Our web design services can assist you in reclaiming your
                  company's online image. Your business will flourish on the
                  Internet thanks to the combination of style and technology we
                  provide, as well as our experience.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-5">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <div className="icon mb-4">
                  <GrNotes className="bg-blue-800 rounded-full text-gray-100  p-2 w-12 h-12" />
                </div>
                <h4 className="title text-xl font-semibold mb-2">
                  <a href="#">Development</a>
                </h4>
                <p className="description">
                  Our development team can construct platforms to help your
                  business thrive by creating powerful customised solutions
                  tailored to your particular requirements. Akeshya makes use of
                  established and effective web development tools.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-5">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <div className="icon mb-4">
                  <FaEarthAfrica className="bg-blue-800 rounded-full text-gray-100 p-3 w-12 h-12" />
                </div>
                <h4 className="title text-xl font-semibold mb-2">
                  <a href="#">Marketing</a>
                </h4>
                <p className="description">
                  A beautiful website is the foundation of effective marketing.
                  Our customers achieve success where it counts—in the real
                  world—by combining our proven approach with our passion for
                  improving conversions and increasing ROI.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-5">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <div className="icon mb-4">
                  <TiTickOutline className="bg-blue-800 rounded-full text-gray-100 p-2 w-12 h-12" />
                </div>
                <h4 className="title text-xl font-semibold mb-2">
                  <a href="#">Support</a>
                </h4>
                <p className="description">
                  Since the beginning, we at Akeshya have specialised in website
                  maintenance. We recognise the significance of having your
                  business online 24 hours a day, seven days a week, and we've
                  created a system to ensure that we're always available.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            ref={processHeaderRef}
            initial={{ y: 180 }}
            animate={processHeaderInView ? { y: 0 } : { y: 90 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className=" flex justify-center items-center my-4">
              <div
                className="w-16 h-1 bg-blue-800"
                style={{ height: "3px" }}
              ></div>
              <h2 className="text-3xl font-semibold">Our Process</h2>
              <div
                className="w-16 h-1 bg-blue-800"
                style={{ height: "3px" }}
              ></div>
            </div>

            <p className="my-4">
              Over the years we’ve evolved a tested method for attaining
              achievement for each one of our clients.
            </p>
          </motion.div>
          <div className="flex flex-wrap">
            <motion.div
              className="w-full md:w-1/2 mb-4 "
              ref={processStep1Ref}
              initial={{ y: 180 }}
              animate={processStep1InView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className=" bg-cover bg-center h-64 p-6 rounded-lg shadow-md  mx-2 bg-gray-100">
                <div className="-body text-gray  ">
                  <h5 className="-title text-2xl font-semibold ">
                    <a href="#">1. Planning</a>
                  </h5>
                  <p className="-text">
                    We help you turn all of your ideas into a digital product
                    that meets all of your requirements. We begin each project
                    by determining its scope and needs. This is done by
                    collaborating closely with you to ensure that we're all on
                    the same page.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 mb-4 bg-gray-100"
              ref={processStep2Ref}
              initial={{ y: 180 }}
              animate={processStep2InView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className=" bg-cover bg-center h-64 p-6 rounded-lg shadow-md m-2 bg-gray-100">
                <div className="-body text-gray  ">
                  <h5 className="-title text-2xl font-semibold">
                    <a href="#">2. Design</a>
                  </h5>
                  <p className="-text">
                    We build our websites carefully through a series of
                    workshops, wire-framing, and user experience (UX) sessions,
                    resulting in a site that reinforces trust, conveys important
                    brand messaging, and provides a return on innovation.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 mb-4"
              ref={processStep2Ref}
              initial={{ y: 180 }}
              animate={processStep2InView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className=" bg-cover bg-center h-64 p-6 rounded-lg shadow-md m-2  bg-gray-100">
                <div className="-body text-gray ">
                  <h5 className="-title text-2xl font-semibold">
                    <a href="#">3. Development</a>
                  </h5>
                  <p className="-text">
                    We provide extensive front-end and back-end development that
                    allows your idea to stand alone. Our in-house developers
                    work side-by-side with the artistic team to seek out natural
                    breakpoints inside the content and order practicality based
                    on acknowledged statistics.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 mb-4"
              ref={processStep4Ref}
              initial={{ y: 180 }}
              animate={processStep4InView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className=" bg-cover bg-center h-64 p-6 rounded-lg shadow-md m-2 bg-gray-100">
                <div className="-body text-gray">
                  <h5 className="-title text-2xl font-semibold">
                    <a href="#">4. Marketing</a>
                  </h5>
                  <p className="-text">
                    We come up with ideas and campaigns to help your business
                    prosper online. Our campaigns and virtual approach have a
                    verified tune report of accomplishing brilliant results,
                    gathering new leads and site visitors in your website and
                    assist them convert.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="my-8"
            ref={processStep3Ref}
            initial={{ y: 180 }}
            animate={processStep3InView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex justify-center items-center my-4 ">
              <div
                className="w-16 h-1 bg-blue-800 mx-2"
                style={{ height: "3px" }}
              ></div>
              <h2 className="text-3xl font-semibold">Our Core Features</h2>
              <div
                className="w-16 h-1 bg-blue-800 mx-3"
                style={{ height: "3px" }}
              ></div>
            </div>
            <p>
              Akeshya is a forward-thinking and intelligent design firm that is
              technically and creatively capable of transforming your brand into
              its best digital self. Our approach to design and development
              results in compelling, engaging branding and immersive digital
              experiences that provide a value for money.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center"
            ref={coreFeaturesRef}
            initial={{ y: 180 }}
            animate={coreFeaturesInView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className=" m-3 w-full lg:w-1/4 md:w-1/3 p-4 ">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-window-line text-yellow-500 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Web design</a>
                </h3>
              </div>
            </div>
            <div className=" m-3 w-full lg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-code-box-line text-blue-500 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Development</a>
                </h3>
              </div>
            </div>
            <div className="w-full m-2 lg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-creative-commons-by-line text-pink-600 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Branding</a>
                </h3>
              </div>
            </div>
            <div className="w-full m-2 lg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-play-circle-line text-purple-600 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Media buying</a>
                </h3>
              </div>
            </div>
            <div className="w-full m-2 lg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-search-eye-line text-blue-400 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Search engine</a>
                </h3>
              </div>
            </div>
            <div className="w-full m-2 lg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-todo-line text-orange-400 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Brand strategy</a>
                </h3>
              </div>
            </div>
            <div className="w-full m-2 lg:w-1/4 md:w-1/3 p-4">
              <div className="bg-gray-100  p-6 shadow-md rounded-lg">
                <i className=" text-yellow-600 text-4xl ri-map-pin-line  mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Local search marketing</a>
                </h3>
              </div>
            </div>
            <div className="w-full m-2 lg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-bar-chart-grouped-line text-indigo-600 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Lead Tracking & Management</a>
                </h3>
              </div>
            </div>
            <div className="w-full m-2 lg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-contacts-book-line text-yellow-700 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Contact management</a>
                </h3>
              </div>
            </div>
            <div className="w-full m-2 lg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-disc-line text-pink-600 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Media management</a>
                </h3>
              </div>
            </div>
            <div className="w-full m-2 lg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100 shadow-md rounded-lg">
                <i className="ri-calendar-event-line text-orange-600 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Social scheduling</a>
                </h3>
              </div>
            </div>
            <div className="w-fulllg:w-1/4 md:w-1/3 p-4">
              <div className=" p-6 bg-gray-100  m-2  shadow-md rounded-lg">
                <i className="ri-advertisement-fill text-green-600 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold">
                  <a href="#">Ad retargeting</a>
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
