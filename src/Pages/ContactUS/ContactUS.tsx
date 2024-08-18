import { Link } from 'react-router-dom';
import { useRef } from "react";
import translation, { Language } from '../../Db/translation';
import './ContactUS.css'
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import SeoComponnent from '../../Components/SeoComponnent/SeoComponnent';
interface ContactProps {
  language: Language;
}
const ContactUS: React.FC<ContactProps> = ({ language }) => {

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure form.current is not null before calling sendForm
    if (form.current) {
      emailjs
        .sendForm(
          "service_qnz4n1e",
          "template_9snqi76",
          form.current,
          "Dhw_22hh8etdn_F7B"
        )
        .then(
          (response) => {
            console.log(response);
            alert("Email sent successfully");
            e.currentTarget.reset(); // Reset the form after submission
          },
          (error) => {
            console.log(error);
            alert("Something went wrong");
          }
        );
    } else {
      alert("Form reference is not available.");
    }
  };

  const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0609464668028!2d55.36490247494584!3d25.302156327442166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c785ad1227b%3A0x4b873618560e813d!2sQamar%20Al%20Kassadi%20Advocates%20%26%20Legal%20Consultants!5e0!3m2!1sen!2s!4v1723213060571!5m2!1sen!2s"
  return (
    <div className='ContactUS'>
      <SeoComponnent
        title="Al Kassadi ContactUS Page"
        description="A specialized page that displays contact information with the company."
        type="website"
      />

      <div className="Sections_Hero">
        <div className="hero_text">
          <motion.h1
            className='hero_title'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {translation[language].contact_hero} / <Link to='/'>{translation[language].home}</Link>
          </motion.h1>
        </div>
      </div>
      <div className="form-container">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">{translation[language].form_name}</label>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{translation[language].form_email}</label>
            <input type="text" id="email" name="email"
              required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">{translation[language].form_phone}</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">{translation[language].form_message}</label>
            <textarea name="message" id="textarea" />
          </div>
          <button className="form-submit-btn" type="submit">{translation[language].form_submit}</button>
        </form>
      </div>
      <div className="contact_us_home_con ">
        <div className="conatct_us_info ">
          <h1 className="conatct_us_info_title">{translation[language].conatct_us_info_title}</h1>
          <div className="contact_phone">
            <h4 className="phone_title">
              {translation[language].phone_title}
            </h4>
            <p className='phone_number'>
              <a href="tel:0586689000" style={{ color: '#223343' }}>058 668 9000</a> |
              <a href="tel:0553122302" style={{ color: '#223343' }}> 055 312 2302</a> |
              <a href="tel:0553633377" style={{ color: '#223343' }}> 05 536 3377</a>
            </p>
          </div>
          <div className="conatct_email">
            <h4 className="phone_title">{translation[language].email_title}</h4>
            <p style={{ color: '#223343' }}>alkassadi.advocates@gmail.com</p>
          </div>
          <div className="work_time">
            <h4 className="work_time_title">P.O.BOX</h4>
            <p style={{ color: '#223343' }}>70607</p>
          </div>
        </div>
        <div className="contact_us_map">
          <div className="map-container">
            <div
              className="elementor-element elementor-element-9e5d0bf e-con-full e-flex e-con e-child"
              data-id="9e5d0bf"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-3e5ee4b elementor-widget elementor-widget-text-editor"
                data-id="3e5ee4b"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <iframe
                    src={map}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactUS