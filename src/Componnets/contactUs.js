import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processHeaderRef, inView: processHeaderInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="contact py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center items-center my-8"
          ref={headerRef}
          initial={{ y: 100 }}
          animate={headerInView ? { y: 0 } : { y: 100 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
           
             <div
                className="w-16 h-1 bg-blue-800 mx-2"
                style={{ height: "3px" }}
              ></div>
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <div
                className="w-16 h-1 bg-blue-800 mx-2"
                style={{ height: "3px" }}
              ></div>
        </motion.div>

        <div className="flex flex-wrap gap-5 justify-around">
          <motion.div
               ref={descriptionRef}
               initial={{ y: 100 }}
               animate={descriptionInView ? { y: 0 } : { y: 100 }}
               transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className=" bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Akeshya</h3>
              <p className="mt-4 text-gray-600 w-72 m-3">
                Designers, developers & marketeers capable of delivering
                solutions according to your needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/4 md:w-1/2 mb-8"
            ref={servicesRef}
            initial={{ y: 100 }}
            animate={servicesInView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className=" space-y-4">
              <div className="flex items-start">
                <i className="ri-map-pin-line text-2xl text-blue-500 mr-4"></i>
                <p className="text-gray-600">
                  26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                  524004
                </p>
              </div>
              <div className="flex items-start">
                <i className="ri-mail-send-line text-2xl text-blue-500 mr-4"></i>
                <p className="text-gray-600">
                  <p className="text-blue-500 underline">info@Akeshya.com</p>
                </p>
              </div>
              <div className="flex items-start">
                <i className="ri-phone-line text-2xl text-blue-500 mr-4"></i>
                <p className="text-gray-600">+91 94942 40922</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/3 md:w-full mb-8"
            ref={processHeaderRef}
            initial={{ y: 100 }}
            animate={processHeaderInView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <form
              className="bg-white p-6 rounded-lg shadow-md"
              method="POST"
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div >Loading</div>
                <div className=" text-red-500"></div>
                <div className="s text-green-500">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 rounded hover:bg-blue-600 text-white py-2 px-4 "
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
