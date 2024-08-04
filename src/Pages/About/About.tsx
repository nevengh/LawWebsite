import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <div className='About'>
        <div className="header_section">
            <h1>من نحن</h1>
        </div>
        <motion.div 
            className="about_content"
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
            whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.5 }} // Transition duration
        >
            <p>
                تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي 
                وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية 
                والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا 
                العمالية, ولنا أسلوب متميز في  فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب
                التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا.
            </p>
            <p className='second_text'>
                تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي 
                وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية 
                والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا 
                العمالية, ولنا أسلوب متميز في  فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب
                التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا.
            </p>
        </motion.div>
    </div>
  );
}

export default About;
