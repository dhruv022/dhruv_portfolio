import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const formRef  = useRef();

  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);


  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l7usuic', 'template_fznvenk', formRef.current, {
        publicKey: 'kTDSaEuuPdnK72X4n',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true)
        },
      );
  };


  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>dhruv0225@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>hello street gurugram</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 765 1070 617</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {/* <svg
            fill="#000000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <motion.path
              strokeWidth={0.2}
                fill="none"
                initial ={{pathLength :0}}
                animate ={ isInView && {pathLength :1}}
                transition={{duration:3}}
                d="M9.5547002,9.83205029 C9.83289886,9.64658452 10,9.33435319 10,9 L10,5 C10,3.34314575 8.65685425,2 7,2 L3,2 C2.44771525,2 2,2.44771525 2,3 C2,12.9411255 11.0588745,22 21,22 C21.5522847,22 22,21.5522847 22,21 L22,17 C22,15.3431458 20.6568542,14 19,14 L15,14 C14.6656468,14 14.3534155,14.1671011 14.1679497,14.4452998 L12.2626046,17.3033175 C10.187391,15.961484 8.36924805,14.1891773 6.97074067,12.1489624 L6.6966825,11.7373954 L9.5547002,9.83205029 Z M15.5351838,16 L19,16 C19.5522847,16 20,16.4477153 20,17 L20,19.9653271 C18.0627576,19.8312776 16.1721397,19.3131585 14.4087453,18.4915688 L14.0041032,18.2966209 L15.5351838,16 Z M14,6 C16.209139,6 18,7.790861 18,10 C18,10.5522847 17.5522847,11 17,11 C16.4871642,11 16.0644928,10.6139598 16.0067277,10.1166211 L15.9945143,9.85073766 C15.9181651,8.81587779 15.0543618,8 14,8 C13.4477153,8 13,7.55228475 13,7 C13,6.44771525 13.4477153,6 14,6 Z M14,2 C18.418278,2 22,5.581722 22,10 C22,10.5522847 21.5522847,11 21,11 C20.4477153,11 20,10.5522847 20,10 C20,6.6862915 17.3137085,4 14,4 C13.4477153,4 13,3.55228475 13,3 C13,2.44771525 13.4477153,2 14,2 Z M7,4 C7.55228475,4 8,4.44771525 8,5 L8,8.46481624 L5.70337914,9.99589681 C4.76882476,8.11844872 4.17903392,6.08626103 4.03467288,4 L7,4 Z"
              ></motion.path>
            </g>
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="450px"
            height="450px"
            viewBox="0 0 24 24"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <motion.path
                strokeWidth={0.2}
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                fill="none"
                d="M9.5547002,9.83205029 C9.83289886,9.64658452 10,9.33435319 10,9 L10,5 C10,3.34314575 8.65685425,2 7,2 L3,2 C2.44771525,2 2,2.44771525 2,3 C2,12.9411255 11.0588745,22 21,22 C21.5522847,22 22,21.5522847 22,21 L22,17 C22,15.3431458 20.6568542,14 19,14 L15,14 C14.6656468,14 14.3534155,14.1671011 14.1679497,14.4452998 L12.2626046,17.3033175 C10.187391,15.961484 8.36924805,14.1891773 6.97074067,12.1489624 L6.6966825,11.7373954 L9.5547002,9.83205029 Z M15.5351838,16 L19,16 C19.5522847,16 20,16.4477153 20,17 L20,19.9653271 C18.0627576,19.8312776 16.1721397,19.3131585 14.4087453,18.4915688 L14.0041032,18.2966209 L15.5351838,16 Z M14,6 C16.209139,6 18,7.790861 18,10 C18,10.5522847 17.5522847,11 17,11 C16.4871642,11 16.0644928,10.6139598 16.0067277,10.1166211 L15.9945143,9.85073766 C15.9181651,8.81587779 15.0543618,8 14,8 C13.4477153,8 13,7.55228475 13,7 C13,6.44771525 13.4477153,6 14,6 Z M14,2 C18.418278,2 22,5.581722 22,10 C22,10.5522847 21.5522847,11 21,11 C20.4477153,11 20,10.5522847 20,10 C20,6.6862915 17.3137085,4 14,4 C13.4477153,4 13,3.55228475 13,3 C13,2.44771525 13.4477153,2 14,2 Z M7,4 C7.55228475,4 8,4.44771525 8,5 L8,8.46481624 L5.70337914,9.99589681 C4.76882476,8.11844872 4.17903392,6.08626103 4.03467288,4 L7,4 Z"
              />{" "}
            </g>
          </svg>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          ref= {formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" placeholder="Name" name="from_name"/>
          <input type="email" placeholder="Email" name="from_email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
