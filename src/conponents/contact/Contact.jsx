import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";

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

function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_29hdhch", "template_o7zao8g", formRef.current, {
        publicKey: "bQ50evbYsT9hH210v",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
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
        <motion.h1 variants={variants}>
          Let's Work <motion.span variants={variants}>Together</motion.span>
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email:</h2>
          <span>prajatech355@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone:</h2>
          <span>+91 74940 29640</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address:</h2>
          <span>Patna, Bihar (844506)</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="phoneSVG"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            viewBox="0 0 90 90"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="_x32_5_attachment"></g> <g id="_x32_4_office"></g>{" "}
              <g id="_x32_3_pin"></g> <g id="_x32_2_business_card"></g>{" "}
              <g id="_x32_1_form"></g> <g id="_x32_0_headset"></g>{" "}
              <g id="_x31_9_video_call"></g> <g id="_x31_8_letter_box"></g>{" "}
              <g id="_x31_7_papperplane"></g> <g id="_x31_6_laptop"></g>{" "}
              <g id="_x31_5_connection"></g> <g id="_x31_4_phonebook"></g>{" "}
              <g id="_x31_3_classic_telephone">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      d="M5.7783,24.7686c1.9902,1.085,5.0967,0.269,8.0811-0.6533c4.8364-1.3472,7.019-2.6401,7.168-6.7412 c0.0034-0.1011-0.0083-0.2021-0.0352-0.2998c-0.0029-0.0122,0.0063-0.1108,0.1294-0.2905 c0.7661-1.1177,3.6714-2.4893,7.2095-2.8501c0.9307-0.0977,1.9409-0.1489,2.9951-0.1523 c1.0571,0.0034,2.0674,0.0547,3.0049,0.1523c3.5352,0.3608,6.4395,1.7324,7.2061,2.8501 c0.123,0.1797,0.1328,0.2783,0.1289,0.2905c-0.0264,0.0972-0.0381,0.1982-0.0342,0.2988 c0.1445,4.1001,2.3271,5.3936,7.1377,6.7344c1.9893,0.6147,4.0195,1.1802,5.7432,1.1802c0.8848,0,1.6895-0.1494,2.3652-0.5176 c1.4609-0.7915,2.2539-3.3052,2.417-4.1216c1.3721-6.8125-3.7441-12.9063-9.0781-15.6851 C45.3633,2.4341,38.3145,0.9468,31.3296,1.001c-6.9517-0.0498-14.0381,1.4336-18.8872,3.9624 c-5.3335,2.7783-10.4502,8.8721-9.0811,15.686C3.5264,21.4678,4.3257,23.9814,5.7783,24.7686z M13.3667,6.7368 c4.5747-2.3862,11.2939-3.7954,17.9561-3.7358c0.0039,0,0.0098,0,0.0137,0c6.6821-0.0381,13.3774,1.3501,17.9565,3.7358 c4.6914,2.4443,9.209,7.7168,8.041,13.519c-0.2002,1.0054-0.8896,2.4741-1.4111,2.7568 c-1.4189,0.7725-4.8926-0.3003-6.5898-0.8242c-4.7744-1.3306-5.5859-2.2759-5.6982-4.7632 c0.0791-0.4399,0.0391-1.062-0.4482-1.7725c-1.2266-1.7891-4.7842-3.314-8.6504-3.7085c-1.002-0.1045-2.0796-0.1597-3.21-0.1631 c-1.1279,0.0039-2.2061,0.0586-3.2012,0.1631c-3.8682,0.3945-7.4263,1.9194-8.6528,3.708 c-0.4873,0.7104-0.5273,1.3325-0.4487,1.7725c-0.1143,2.4883-0.9272,3.4341-5.728,4.7715 c-1.6694,0.5161-5.1431,1.5889-6.562,0.8149c-0.5171-0.2798-1.2085-1.7505-1.4116-2.7568 C4.1563,14.4536,8.6748,9.1812,13.3667,6.7368z"
                    ></motion.path>{" "}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      d="M61.5771,54.4614l-3.1309-19.0518c-0.8037-4.9136-4.1641-8.2148-8.3623-8.2148h-9.3481l-1.313-5.1528 c-0.5342-2.1182-1.8789-3.3823-3.5967-3.3823H27.498c-1.7393,0-3.0513,1.2319-3.5996,3.3799l-1.314,5.1553h-8.8257 c-4.1934,0-7.5542,3.3008-8.3628,8.2139L2.4893,53.0884c-0.6113,3.7251-0.2471,6.314,1.1128,7.915 c1.6968,1.9971,4.4331,1.9941,6.9116,1.9961h42.7012L53.5371,63c0.1074,0,0.2139,0,0.3213,0 c2.4238,0,5.0947-0.0757,6.6797-1.9399C61.7354,59.6523,62.0752,57.4941,61.5771,54.4614z M25.8364,22.5337 c0.1787-0.6997,0.6323-1.874,1.6616-1.874h8.3281c1.0313,0,1.4805,1.1729,1.6582,1.874l1.1875,4.6611H24.6484L25.8364,22.5337z M59.0146,59.7642C57.959,61.0059,55.7178,61.0039,53.54,61l-42.9087-0.0005h-0.1182c-2.0977,0-4.2891,0.001-5.3867-1.291 c-0.9434-1.1108-1.167-3.229-0.6636-6.2959l2.9067-17.6792c0.4961-3.0166,2.4673-6.5386,6.3892-6.5386H50.084 c3.9268,0,5.8955,3.5215,6.3887,6.5381l3.1318,19.0527C59.9951,57.1694,59.7969,58.8442,59.0146,59.7642z"
                    ></motion.path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 4 }}
                      transition={{ duration: 3 }}
                      d="M32.002,58.4673c-7.3721,0-13.3701-5.998-13.3701-13.3701c0-7.3706,5.998-13.3667,13.3701-13.3667 c7.3701,0,13.3662,5.9961,13.3662,13.3667C45.3682,52.4692,39.3721,58.4673,32.002,58.4673z M32.002,33.7305 c-6.2695,0-11.3701,5.0991-11.3701,11.3667c0,6.2695,5.1006,11.3701,11.3701,11.3701c6.2676,0,11.3662-5.1006,11.3662-11.3701 C43.3682,38.8296,38.2695,33.7305,32.002,33.7305z"
                    ></motion.path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      d="M32.002,49.9707c-2.6875,0-4.8735-2.186-4.8735-4.8735c0-2.6855,2.186-4.8701,4.8735-4.8701 c2.6855,0,4.8701,2.1846,4.8701,4.8701C36.8721,47.7847,34.6875,49.9707,32.002,49.9707z M32.002,42.2271 c-1.5845,0-2.8735,1.2876-2.8735,2.8701c0,1.5845,1.2891,2.8735,2.8735,2.8735c1.583,0,2.8701-1.2891,2.8701-2.8735 C34.8721,43.5146,33.585,42.2271,32.002,42.2271z"
                    ></motion.path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path d="M32.002,37.7339c-0.5522,0-1.0298-0.4478-1.0298-1s0.418-1,0.9702-1h0.0596c0.5522,0,1,0.4478,1,1 S32.5542,37.7339,32.002,37.7339z"></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path d="M32.002,54.4644c-0.5522,0-1.0298-0.4478-1.0298-1s0.418-1,0.9702-1h0.0596c0.5522,0,1,0.4478,1,1 S32.5542,54.4644,32.002,54.4644z"></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path d="M23.6348,46.127c-0.5522,0-1-0.418-1-0.9702v-0.0596c0-0.5522,0.4478-1,1-1s1,0.4478,1,1S24.187,46.127,23.6348,46.127z"></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path d="M40.3652,46.127c-0.5527,0-1-0.418-1-0.9702v-0.0596c0-0.5522,0.4473-1,1-1c0.5527,0,1,0.4478,1,1 S40.918,46.127,40.3652,46.127z"></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path d="M26.0547,40.1924c-0.2539,0-0.5063-0.0928-0.6963-0.2827c-0.3906-0.3906-0.4116-1.0024-0.021-1.3931l0.042-0.042 c0.3906-0.3906,1.0234-0.3906,1.4141,0s0.3906,1.0234,0,1.4141C26.5933,40.0894,26.3232,40.1924,26.0547,40.1924z"></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path d="M37.8857,52.0234c-0.2549,0-0.5068-0.0928-0.6973-0.2827c-0.3896-0.3906-0.4111-1.0024-0.0205-1.3931l0.042-0.042 c0.3906-0.3906,1.0234-0.3906,1.4141,0s0.3906,1.0234,0,1.4141C38.4238,51.9204,38.1533,52.0234,37.8857,52.0234z"></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path d="M26.0977,52.0444c-0.2437,0-0.4863-0.0928-0.6763-0.2827l-0.042-0.042c-0.3906-0.3906-0.3906-1.0234,0-1.4141 s1.0234-0.3906,1.4141,0s0.4116,1.0444,0.021,1.4351C26.6143,51.9414,26.355,52.0444,26.0977,52.0444z"></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path d="M37.9287,40.2134c-0.2441,0-0.4863-0.0928-0.6768-0.2827l-0.042-0.042c-0.3906-0.3906-0.3906-1.0234,0-1.4141 s1.0234-0.3906,1.4141,0s0.4111,1.0444,0.0215,1.4351C38.4443,40.1104,38.1855,40.2134,37.9287,40.2134z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
              <g id="_x31_2_sending_mail"></g> <g id="_x31_1_man_talking"></g>{" "}
              <g id="_x31_0_date"></g> <g id="_x30_9_review"></g>{" "}
              <g id="_x30_8_email"></g> <g id="_x30_7_information"></g>{" "}
              <g id="_x30_6_phone_talking"></g>{" "}
              <g id="_x30_5_women_talking"></g> <g id="_x30_4_calling"></g>{" "}
              <g id="_x30_3_women"></g> <g id="_x30_2_writing"></g>{" "}
              <g id="_x30_1_chatting"></g>{" "}
            </g>
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={10} placeholder="Message" name="message"></textarea>
          <button>
            Submit
          </button> 
          {error && "Error"}
          {success && "Send Successfully"}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
