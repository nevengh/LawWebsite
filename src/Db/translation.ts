// src/Db/translation.ts
export type Language = "en" | "ar";

export interface TranslationStrings {
  [key: string]: string;
  home: string;
  about: string;
  services: string;
  team: string;
  contact: string;
  lawyer: string;
  hero_title: string;
  contact_call: string;
  about_title: string;
  about_content_1: string;
  about_content_2: string;
  our_team_subhead: string;
  our_team_mainhead: string;
  our_services_subhead: string;
  our_services_mainhead: string;
  about_hero: string;

  text_about: string
  about_services: string
  about_services_title: string
  our_partner: string
  our_partner_title: string
  our_work_title: string
  quality_title: string
  quality_text: string
  work_knowledg_text: string
  work_knowledg_title: string
  important_advice_title: string
  important_advice_text: string
  capicity_title: string
  capicity_text: string
  read_more: string
  why_choose_subhead: string
  why_choose_mainhead: string
  why_choose_text_3: string
  why_choose_text_2: string
  why_choose_text_1: string
  team_1_name: string
  team_1_info: string
  // team_1_number:string
  team_2_name: string
  team_2_info: string
  team_3_name: string
  team_3_info: string
  team_4_name: string
  team_4_info: string
  team_5_name: string
  team_5_info: string
  Our_team_Head_text_1: string
  Our_team_Head_text_2: string
  Our_team_Head_text_3: string
  team_3_phone: string
  team_2_phone: string
  team_1_phone: string
  paragraph_footer: string
  mainTitle1_footer: string
  mainTitle2_footer: string
  titleLink1_footer: string
  titleLink2_footer: string
  titleLink3_footer: string
  titleLink4_footer: string
  titleLink5_footer: string
  service_1_name: string
  service_2_name: string
  service_3_name: string
  service_4_name: string
  service_5_name: string
  service_6_name: string
  service_7_name: string
  service_1_contentDescription1: string
  service_1_contentDescription2: string
  service_1_contentDescription3: string
  service_1_contentDescription4: string
  service_2_contentDescription1: string
  service_2_contentDescription2: string
  service_2_contentDescription3: string
  service_3_contentDescription1:string
  service_3_contentDescription2:string
  service_3_contentDescription3:string
  service_3_contentDescription4:string
  service_4_contentDescription1:string
  service_4_contentDescription2:string
  service_4_contentDescription3:string
  service_5_contentDescription1:string
  service_5_contentDescription2:string
  service_5_contentDescription3:string
  service_6_contentDescription1:string
  service_6_contentDescription2:string
  service_6_contentDescription3:string
  service_6_contentDescription4:string
  service_7_contentDescription1:string
  service_7_contentDescription2:string
  service_7_contentDescription3:string
  service_7_contentDescription4:string
  service_7_contentDescription5:string
  allLegalServices_mainhead: string
  readMore: string
  showAll: string
  our_value_mainhead: string;
  value_excelence_text_1: string;
  value_excelence_title_1: string;
  value_Honesty_text: string;
  value_Honesty_title: string;
  value_transparency_title: string;
  value_transparency_text: string;
  justic_text: string;
  justic_title: string;
  conatct_us_info_title: string;
  phone_title: string;
  email_title: string;
  conatct_us_subhead: string;
  conatct_us_mainhead: string;
  work_time_title: string;
  contact_hero: string;
  form_name: string;
  form_email: string;
  form_message: string;
  form_phone: string;
  form_submit:string

}

export type Translation = Record<Language, TranslationStrings>;

const translation: Translation = {
  en: {

    Our_team_Head_text_1: "Whatever the size of your business",
    Our_team_Head_text_2: "Or the pressures you are exposed to",
    Our_team_Head_text_3: "We have the experience and skill to provide you with a strategic partnership through which we bear all the burdens of work from a technical standpoint (preparing memoranda, lawsuits and appeals before all courts at all levels) so that you can devote yourself to developing a network of relationships and serving your clients to reach unprecedented levels of development and growth.",

    form_submit:"Submit",
    form_email: "Email",
    form_name: "Name",
    form_phone: "Phone Number",
    form_message: "Message",
    contact_hero: "Contact Us",
    email_title: "Email Address",
    phone_title: "Phone Number",
    conatct_us_subhead: "conatct us",
    conatct_us_mainhead: "Contact Us",
    justic_title: "Justice",
    justic_text:
      "Achieving justice represents the top of our commitment and the priorities of our work because of our confidence that achieving and preserving justice leads to the establishment of a society in which there is tranquility, security and peace to achieve the desired progress.",
    value_Honesty_title: "Honesty and integrity",
    value_Honesty_text:
      "We believe that communications with transparency are the basis of success in any professional relationship",
    value_transparency_title: "Transparency",
    value_transparency_text:
      "We believe that honest and transparent communication is the foundation for success in any professional relationship.",
    value_excelence_title_1: "Excellence",
    value_excelence_text_1:
      "We always strive to achieve impressive results with high quality and skill for all our clients.",
    our_value_mainhead: "Our Values",
    Our_team_Head_text_1: "Whatever the size of your business",
    Our_team_Head_text_2: "Or the pressures you are exposed to",
    Our_team_Head_text_3:
      "We have the experience and skill to provide you with a strategic partnership through which we bear all the burdens of work from a technical standpoint (preparing memoranda, lawsuits and appeals before all courts at all levels) so that you can devote yourself to developing a network of relationships and serving your clients to reach unprecedented levels of development and growth.",

    team_1_name: "MR. AHMED BAGHDADI",
    team_1_info: "LEGAL CONSULTANT",
    team_2_name: "MR. AHMED BIN MOUSA",
    team_2_info: "EXECUTIVE DIRECTOR / CEO",
    team_3_name: "MS. QAMAR AL KASSADI",
    team_3_info: "LAWYER AND LEGAL CONSULTANT / FOUNDER",
    team_4_name: "MIKE SANTOUNE",
    team_4_info: "RECEPTIONIST",
    team_5_name: "AHMED NAGI",
    team_5_info: "LEGAL REASERCHER",
    team_3_phone: "+971 55 312 2302 ",
    team_1_phone: "+971 55 987 5671",
    team_2_phone: "+971 58 668 9000",
    home: "Home",
    about: "About",
    services: "Services",
    team: "Our Team",
    contact: "Contact Us",
    lawyer: "Lawyer",
    read_more: "Read more",
    why_choose_subhead: "More about us",
    why_choose_mainhead: "Why you choose us",
    hero_title: "Lawyers and Legal Consultants",
    contact_call: "Contact Us",
    about_title: "About Us",
    
    why_choose_text_3:
      "We take the role of the client and act on their behalf at the appropriate time to achieve the best results for them",
    why_choose_text_2:
      "The members of the Al-Kassadi’s law firm,are distinguished by integrity, diligence,Hardworking, able to assess legal situations, and effective service delivery, which is associated with our competence in finding solutions to any difficulties",
    why_choose_text_1:
      "Our team has been carefully selected in pursuit of finding the best legal solutions for our clients. Our team is professional, loyal, listener, creative and productive",
    about_content_1:
      "Our practical history testifies to our continued success in criminal justice and recovery cases. We also have a rich history in commercial cases, civil disputes, personal status cases, and labor cases. We have a distinctive style in understanding and studying all our clients' files, radically different from all traditional methods. We read, understand, comprehend, and innovate to find the best solutions that suit our clients' interests.",
    about_content_2:
      "Our practical history testifies to our continued success in criminal justice and recovery cases. We also have a rich history in commercial cases, civil disputes, personal status cases, and labor cases. We have a distinctive style in understanding and studying all our clients' files, radically different from all traditional methods. We read, understand, comprehend, and innovate to find the best solutions that suit our clients' interests.",

    our_team_subhead: "Our Team",
    our_team_mainhead: "Our Best Lawyers",
    our_services_subhead: "Our Services",
    our_services_mainhead: "Our Legal Services",
    about_hero: "About",
    quality_title: "Quality",
    important_advice_title: "Important advice",
    capicity_title: "Capicity and Credibility",

    capicity_text: "We have already laid the foundations Constant to prove our capabilities and credibility and we bear responsibility for our actions.",
    important_advice_text: "Offered by our staff who are highly experience,the right and important advice with regard to the law of the United Arab Emirates.",
    work_knowledg_title: "Knowledge of work",
    work_knowledg_text: "We take care of our customers,We give them all the care,We deal with caution in understanding their requirements.",
    quality_text: "We understan very well that often the customer inquiries about the information previously he/she has acknowledged,but we welcome the difficulties and challenges which comes down to the smallest details and the most difficult.",
    our_partner_title: "Our Partners",
    our_work_title: "How do we do it ?",
    our_partner: "Our partner list includes more tahn 20 Law firms and consultancies in the UAE for more than 10 years. We are proud to achieve a satisfaction rate that is not less than 85% for our partners.",
    about_services_title: "What we offer ?",
    about_services: "Qamar Al Kassadi Advocates and Legal Consultations appreciates the importance of an efficient team,and for this,our clients can reply on our extensive scientific and practical experience,in the thorny legal fields,we are a legal unstitution that offers its services in a range of languages,for example but not limited to:Arabic,English,French,Russian,Hindi,Urdu,Persian and Filipino.",
    text_about: "We are Qamar Al Kassadi Advocates & Legal Consultations,one of the senior law firms in the country.We are registered in all state courts and at all levels.We firmly believe that the interest of our clients is our priority in work and we always strive to achieve the best results.Our practicl history testifies to our skill and competence in various branches of law.Our team has been carefully selected in order to find the best legal solutions for our clients,we have a professional team that is loyal,sympathetic,listener,creative and productive.",
    paragraph_footer: "Qamar Al Kasadi Law Firm and Legal Consultations, with its branches in Sharjah - Ajman - Dubai - Ras Al Khaimah Abu Dhabi - Fujairah - Umm Al Quwain, specialize in providing assistance to legal service providers in the United Arab Emirates, whether law offices or legal consultations.",
    mainTitle1_footer: "Company",
    mainTitle2_footer: " Legal services",
    titleLink1_footer: "Home",
    titleLink2_footer: "About",
    titleLink3_footer: "Legal Services",
    titleLink4_footer: "Our team",
    titleLink5_footer: "Contact us",
    service_1_name: "Consulting and studies services",
    service_2_name: "Legal support services",
    service_3_name: "Corporate services  ",
    service_4_name: "Foreign Investment Services  ",
    service_5_name: "Contracts and Agreements Services  ",
    service_6_name: "Labor Services  ",
    service_7_name: "Litigation and Arbitration Services  ",
    service_1_contentDescription1: "Providing legal and Sharia consultations and studies to the client in various commercial, financial, investment and real estate matters.",
    service_1_contentDescription2: "Providing advice and opinion in a way that ensures the soundness of the client’s decisions and steps to implement them.",
    service_1_contentDescription3: "Attending meetings in everything that requires legal support. ",
    service_1_contentDescription4: " Reviewing and auditing letters issued by The client communicates with external parties, addresses legal and legal issues, and gives regularity to the client’s business.",
    service_2_contentDescription1: "Developing and preparing the organizational structure of the legal departments in private or public sector establishments and establishing work methods, mechanisms and procedures in the legal department within the facility. ",
    service_2_contentDescription2: "Providing distinguished legal competencies to work in the legal departments of the client or facility. ",
    service_2_contentDescription3: "Preparing the internal regulations and policies of the facility to ensure The integrity of the procedures and the regularity of the decisions issued in accordance with the regulations in force in the country.",
    service_3_contentDescription1:"Preparing company incorporation contracts, completing company incorporation procedures, and preparing amendment decisions at the Ministry of Commerce and Industry.",
    service_3_contentDescription2:"Preparing, drafting, and reviewing companies’ articles of association, incorporation contracts, corporate governance regulations, and internal audit regulations in accordance with the modern regulations of the Ministry of Commerce and Industry.",
    service_3_contentDescription3:" Conducting legal reviews and audits of companies’ contracts and internal regulations and ensuring their compliance with the regulations and requirements of the Ministry of Commerce and Industry and the authorities related to the company’s activity.",
    service_3_contentDescription4:"Addressing tax-related issues and disputes and providing recommendations and legal solutions to protect the client and ensure compliance of procedures with tax systems.",
    service_4_contentDescription1:"Providing legal advice to foreign investors in terms of the regulations followed in the country in terms of the amount and type of capital, the tax imposed, a statement of the rights of the investor, and proposing legal solutions to address any legal problems that he may face.",
    service_4_contentDescription2:"Preparing foreign investment and participation contracts, whether the project is completely foreign or mixed.",
    service_4_contentDescription3:"Establishing foreign or mixed companies and their branches and issuing licenses and commercial records to the foreign investor.",
    service_5_contentDescription1:"Preparing, reviewing and drafting all contracts, agreements and memorandums of understanding and reviewing them in a way that serves the client’s interest, including sales, purchase and construction contracts, contracting and supply contracts, technology transfer contracts, technology and communications, land investment and development contracts and contracts Real estate financing.",
    service_5_contentDescription2:"Drafting non-competition agreements, information confidentiality agreements, and all agreements that protect the client's interests.",
    service_5_contentDescription3:"Preparing and concluding settlements, legal settlement procedures, and reconciliation agreements.",
    service_6_contentDescription1:"Preparing and drafting all types of employment contracts in a way that is compatible with the company’s activity (fixed-term employment contract - indefinite-term employment contract - part-time employment contract - temporary employment contract - seasonal employment contract...).",
    service_6_contentDescription2:"Preparing internal work organization regulations and approving them from the Ministry of Labor, and preparing internal policies for human resources to ensure the safety and legality of internal procedures for human resources.",
    service_6_contentDescription3:"Representing the client in labor lawsuits and disputes of all kinds and addressing the financial problems resulting from the restructuring of establishments and their effects on workers, their rights, and their labor relations.",
    service_6_contentDescription4:"Holding development and educational workshops for human resources employees on work regulations and circulars of the Ministry of Labor and procedures for reviewing and legal auditing of internal procedures and ensuring their integrity and compatibility with the circulars and regulations of the Ministry of Labor and Social Affairs.",
    service_7_contentDescription1:"Providing a comprehensive legal study on the client's legal position in the event that he wishes to file a lawsuit or in the lawsuit filed against him and evaluate the strengths and weaknesses and the expected percentage of winning the lawsuit.",
    service_7_contentDescription2:"Representing the client in all lawsuits before all judicial authorities of all types and degrees, and judicial and quasi-judicial committees.",
    service_7_contentDescription3:"Preparing arbitration documents and representing the client in disputes pending before commercial or sports arbitration centers and other arbitration bodies.",
    service_7_contentDescription4:"Representing the client in all judicial enforcement cases and taking legal measures until collecting the financial amounts.",
    service_7_contentDescription5:"Judicial execution of executive documents from judicial rulings and arbitrators' rulings, local or foreign.",
    allLegalServices_mainhead: "Our legal services",
    readMore: "ReadMore",
    showAll: "ShowAll",

    capicity_text:
      "We have already laid the foundations Constant to prove our capabilities and credibility and we bear responsibility for our actions.",
    important_advice_text:
      "Offered by our staff who are highly experience,the right and important advice with regard to the law of the United Arab Emirates.",
    work_knowledg_title: "Knowledge of work",
    work_knowledg_text:
      "We take care of our customers,We give them all the care,We deal with caution in understanding their requirements.",
    quality_text:
      "We understan very well that often the customer inquiries about the information previously he/she has acknowledged,but we welcome the difficulties and challenges which comes down to the smallest details and the most difficult.",
    our_partner_title: "Our Partners",
    our_work_title: "How do we do it ?",
    our_partner:
      "Our partner list includes more tahn 20 Law firms and consultancies in the UAE for more than 10 years. We are proud to achieve a satisfaction rate that is not less than 85% for our partners.",
    about_services_title: "What we offer ?",
    about_services:
      "Qamar Al Kassadi Advocates and Legal Consultations appreciates the importance of an efficient team,and for this,our clients can reply on our extensive scientific and practical experience,in the thorny legal fields,we are a legal unstitution that offers its services in a range of languages,for example but not limited to:Arabic,English,French,Russian,Hindi,Urdu,Persian and Filipino.",
    text_about:
      "We are Qamar Al Kassadi Advocates & Legal Consultations,one of the senior law firms in the country.We are registered in all state courts and at all levels.We firmly believe that the interest of our clients is our priority in work and we always strive to achieve the best results.Our practicl history testifies to our skill and competence in various branches of law.Our team has been carefully selected in order to find the best legal solutions for our clients,we have a professional team that is loyal,sympathetic,listener,creative and productive.",
  },
  ar: {
    form_submit:"إرسال",
    form_email: "البريد الالكتروني",
    form_message: "الموضوع",
    form_name: "الاسم",
    form_phone: "رقم الهاتف",
    contact_hero: "اتصل بنا",
    work_time_title: "مواعيد العمل",
    conatct_us_subhead: "اتصل بنا",
    conatct_us_mainhead: "تواصل معنا",
    email_title: " البريد الإلكتروني",
    phone_title: " رقم الهاتف",
    conatct_us_info_title: "نستطيع حل جميع مشاكلك",
    justic_text:
      "ﺗﺤﻘﻴﻖ اﻟﻌﺪاﻟﺔ ﻳﻤﺜﻞ ﻗﻤﺔ اﻟﺘﺰاﻣﻨﺎ و أوﻟﻮﻳﺎت ﻋﻤﻠﻨﺎ ﻟﺜﻘﺘﻨﺎ اﻟﺮاﺳﺨﺔ ﺑﺄن ﺗﺤﻘﻴﻖ اﻟﻌﺪاﻟﺔ واﻟﺤﻔﺎظ ﻋﻠﻴﻬﺎ ﻳﺆدي اﻟﻰ ﺗﺄﺳﻴﺲ ﻣﺠﺘﻤﻊ ﺗﺴﻮد ﻓﻴﻪ اﻟﻄﻤﺄﻧﻴﻨﺔ وﻳﻨﻌﻢ ﻓﻴﻪ اﻷﻣﻦ واﻟﺴﻼم ﻟﺘﺤﻘﻴﻖ اﻟﺘﻘﺪم اﻟﻤﻨﺸﻮد.",
    justic_title: "العدالة",
    value_transparency_title: "الشفافية",
    value_transparency_text:
      "نؤمن بأن التواصل بنزاهة وشفافية هم أساس النجاح في أي علاقة مهنية",
    value_Honesty_title: "الصدق والنزاهة",
    value_Honesty_text:
      "ﻧﻌﻤﻞ ﻋﻠﻰ ﺗﻌﺰﻳﺰ ﻗﻴﻢ اﻟﺼﺪق واﻟﻨﺰاﻫﺔ واﻟﺜﻘﺔ ﻓﻲ ﻣﻜﺘﺐ ﻗﻤﺮ اﻟﻜﺴﺎدي ﻟﻠﻤﺤﺎﻣﺎة واﻻﺳﺘﺸﺎرات اﻟﻘﺎﻧﻮﻧﻴﺔ وﻧﺆﻣﻦ اﻳﻤﺎﻧًﺎ راﺳﺨًﺎ ﺑﺄﻫﻤﻴﺔ اﻟﺼﺪق واﻟﺜﻘﺔ واﻹﺣﺘﺮام اﻟﻤﺘﺒﺎدل. ﻛﻤﺎ ﻧﺪرك أﻫﻤﻴﺔ وﺿﺮورة أن ﻳﺸﻌﺮ ﻋﻤﻼﺋﻨﺎ ﺑﺎﻟﺜﻘﺔ وﻟﻬﺬا اﻟﺴﺒﺐ ﻓﺈﻧﻨﺎ ﻧﻀﻊ ﻋﻠﻰ ﻋﺎﺗﻘﻨﺎ ﺗﺤﻤﻞ اﻟﻤﺴﺆوﻟﻴﺔ اﻟﻜﺎﻣﻠﺔ ﻟﺒﻨﺎء اﻟﺜﻘﺔ اﻟﻤﻨﺸﻮدة ﻣﻊ ﻋﻤﻼﺋﻨﺎ واﻟﺤﻔﺎظ ﻋﻠﻴﻬﺎ.",
    value_excelence_title_1: "التميز",
    value_excelence_text_1:
      "ﻧﺴﻌﻰ دوﻣًﺎ ﻟﺘﺤﻘﻴﻖ ﻧﺘﺎﺋﺞ ﻣﺒﻬﺮة ﺑﺠﻮدة وﻣﻬﺎرة ﻋﺎﻟﻴﺔ ﻟﺠﻤﻴﻊ ﻋﻤﻼﺋﻨﺎ.",
    our_value_mainhead: "قيمنا",
    Our_team_Head_text_1: "أيا كان حجم أعمالك",
    Our_team_Head_text_2: "أو الضغوط التي تتعرض لها",
    Our_team_Head_text_3:
      "لدينا الخبرة والمهارة لنقدم لك شراكة استؤاتيجية نتحمل من خلالها كافة أعباء العمل من الناحية الفنية(إعداد المذكرات وصحف الدعاوى والطعون أمام جميع المحاكم بكافة درجاتها) حتى تتفرغ لتنمية شبكة علاقات وخدمة عملائك للوصول الى مستويات غير مسبوقة من التطور والنمو.",

    team_1_name: "أ. أﺣﻤﺪ ﺑﻐﺪادي",
    team_1_info: "ﻣﺴﺘﺸـــــــــــــــــــــــــــﺎر ﻗﺎﻧﻮﻧــــــــــــــــــﻲ",
    team_2_name: "أ. أﺣﻤﺪ ﺑﻦ ﻣﻮﺳﻰ",
    team_2_info: "اﻟﻤﺪﻳﺮ اﻟﺘﻨﻔﻴﺬي / اﻟﺮﺋﻴﺲ اﻟﺘﻨﻔﻴﺬي",
    team_3_name: "أ. ﻗﻤﺮ اﻟﻜﺴﺎدي",
    team_3_info: "ﻣﺤﺎﻣﻲ وﻣﺴﺘﺸﺎر ﻗﺎﻧﻮﻧﻲ/ ﻣﺆﺳﺲ",
    team_4_name: "ﻣﺎﻳــﻚ ﺳﻨﺘﺎوون",

    team_4_info: "ﻻﺳﺘﻘﺒـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــﺎل",
    team_5_name: "أﺣﻤﺪ ﻧﺎﺟـــــــــــــﻲ",
    team_5_info: "ﺑﺎﺣــــــــــــــــــــــــــــــــــــﺚ ﻗﺎﻧﻮﻧـــــــــــــــــــي",

    team_4_info:
      "ﻻﺳﺘﻘﺒـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــﺎل",
    team_5_name: "أﺣﻤﺪ ﻧﺎﺟـــــــــــــﻲ",
    team_5_info:
      "ﺑﺎﺣــــــــــــــــــــــــــــــــــــﺚ ﻗﺎﻧﻮﻧـــــــــــــــــــي",

    team_1_phone: "+971 55 987 5671",
    team_3_phone: "+971 55 312 2302 ",
    team_2_phone: "+971 58 668 9000",
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    team: "فريقنا",
    contact: "اتصل بنا",
    lawyer: "المحامي",
    read_more: "اقرأ المزيد",
    hero_title: "محامون واستشياريون قانونيون",
    contact_call: "اتصل بنا",
    about_title: "من نحن",

    why_choose_text_3: "ﻧﺄﺧﺬ دور اﻟﻌﻤﻴﻞ و ﻧﺘﺼﺮف ﺑﺎﻟﻮﻛﺎﻟﺔ ﻋﻨﻪ ﻓﻲ اﻟﻮﻗﺖ اﻟﻤﻨﺎﺳﺐ ﻟﺘﺤﻘﻴﻖ اﻓﻀﻞ واﺣﺴﻦ اﻟﻨﺘﺎﺋﺞ ﻟﻪ.",
    why_choose_text_2: "ﻳﺘﻤﻴﺰ أﻓﺮاد ﻣﺆﺳﺴﺔ اﻟﻜﺴﺎدي ﺑﺎﻟﻨﺰاﻫﺔ واﻟﺤﺮص واﻟﻌﻤﻞ اﻟﺠﺎد واﻟﻘﺪرة ﻋﻠﻰ ﺗﻘﻴﻴﻢ اﻷوﺿﺎع اﻟﻘﺎﻧﻮﻧﻴﺔ وﺗﻘﺪﻳﻢ اﻟﺨﺪﻣﺎت ﺑﻔﺎﻋﻠﻴﺔ ، واﻟﺘﻲ ﺗﻘﺘﺮن ﺑﻜﻔﺎءﺗﻨﺎ ﻓﻲ إﻳﺠﺎد اﻟﺤﻠﻮل ﻷي ﺻﻌﻮﺑﺎت.",
    why_choose_text_1: "ﻛﻮﻧﻨﺎ ﻓﺮﻳﻖ ﻣﺨﺘﺎر ﺑﻌﻨﺎﻳﺔ ﻣﻦ اﻟﻘﺎﻧﻮﻧﻴﻴﻦ اﻟﻤﺘﻤﺮﺳﻴﻦ ﻣﻦ ﺟﻨﺴﻴﺎت ﻣﺨﺘﻠﻔﺔ ﻧﺴﻌﻰ ﺟﺎﻫﺪﻳﻦ ﻟﺘﻮﻓﻴﺮ أﻓﻀﻞ ﻣﺴﺘﻮى ﻣﻦ اﻟﺨﺪﻣﺔ ﺑﻘﺪرة وﻛﻔﺎءة ﻋﺎﻟﻴﺔ.",
    about_content_1: "تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا العمالية, ولنا أسلوب متميز في فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا.",
    about_content_2: "تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا العمالية, ولنا أسلوب متميز في فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا.",

    why_choose_text_3:
      "ﻧﺄﺧﺬ دور اﻟﻌﻤﻴﻞ و ﻧﺘﺼﺮف ﺑﺎﻟﻮﻛﺎﻟﺔ ﻋﻨﻪ ﻓﻲ اﻟﻮﻗﺖ اﻟﻤﻨﺎﺳﺐ ﻟﺘﺤﻘﻴﻖ اﻓﻀﻞ واﺣﺴﻦ اﻟﻨﺘﺎﺋﺞ ﻟﻪ.",
    why_choose_text_2:
      "ﻳﺘﻤﻴﺰ أﻓﺮاد ﻣﺆﺳﺴﺔ اﻟﻜﺴﺎدي ﺑﺎﻟﻨﺰاﻫﺔ واﻟﺤﺮص واﻟﻌﻤﻞ اﻟﺠﺎد واﻟﻘﺪرة ﻋﻠﻰ ﺗﻘﻴﻴﻢ اﻷوﺿﺎع اﻟﻘﺎﻧﻮﻧﻴﺔ وﺗﻘﺪﻳﻢ اﻟﺨﺪﻣﺎت ﺑﻔﺎﻋﻠﻴﺔ ، واﻟﺘﻲ ﺗﻘﺘﺮن ﺑﻜﻔﺎءﺗﻨﺎ ﻓﻲ إﻳﺠﺎد اﻟﺤﻠﻮل ﻷي ﺻﻌﻮﺑﺎت.",
    why_choose_text_1:
      "ﻛﻮﻧﻨﺎ ﻓﺮﻳﻖ ﻣﺨﺘﺎر ﺑﻌﻨﺎﻳﺔ ﻣﻦ اﻟﻘﺎﻧﻮﻧﻴﻴﻦ اﻟﻤﺘﻤﺮﺳﻴﻦ ﻣﻦ ﺟﻨﺴﻴﺎت ﻣﺨﺘﻠﻔﺔ ﻧﺴﻌﻰ ﺟﺎﻫﺪﻳﻦ ﻟﺘﻮﻓﻴﺮ أﻓﻀﻞ ﻣﺴﺘﻮى ﻣﻦ اﻟﺨﺪﻣﺔ ﺑﻘﺪرة وﻛﻔﺎءة ﻋﺎﻟﻴﺔ.",
    about_content_1:
      "تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا العمالية, ولنا أسلوب متميز في فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا.",
    about_content_2:
      "تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا العمالية, ولنا أسلوب متميز في فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا.",

    our_team_subhead: "فريقنا",
    our_team_mainhead: "أفضل محامينا",
    our_services_subhead: "خدماتنا",
    our_services_mainhead: "خدماتنا القانونية",
    about_hero: "من نحن",
    why_choose_subhead: "المزيد حولنا",
    why_choose_mainhead: "لماذا تختارنا",
    important_advice_title: "النصيحة الهامة",
    capicity_title: "القدؤة والمصداقية",

    capicity_text: "نحن بالفعل وضعنا أسس ثابتة لإثبات قدراتنا ومصداقياتنا ونحن نتحمل مسؤولية أفعالنا.",
    important_advice_text: "يقدم فريق عملنا الذي يتمتع بالخبرة والكفاءى العالية النصائح الصحيحة والهامة فيما يختص بقانون الامارات العربية المتحدة.",
    work_knowledg_title: "الإلمام بالعمل",
    work_knowledg_text: "نحن نعتني بعملائنا ونمنحهم كل الرعاية ونتعامل بحذر في فهم متطلباتهم.",
    quality_title: " الجودة",
    quality_text: "نحن نفهم جيدا أنه في كثير من الأحيان يقوم العميل بالاستفسار عن معلومات قدسبق له معرفتها ولكننا نرحب بالصعوبات والتحديات التي تأتي بأجق التفاصيل وأكثرها صعوبة.",
    about_services_title: "ماذا نقدم ؟",
    our_partner_title: "شركاؤنا:",
    our_work_title: "طريقة عملنا ؟",
    our_partner: "تضم قائمة شركائنا أكثر من 20 مكتب محاماة واستشارات قانونية في الامارات العربية المتحدة لأكثر من 10 سنوات. نحن فخورين بتحقيق نسبة رضا لا تقل عن 85% لشركائنا.",
    about_services: " تقدر مؤسسة قمر الكسادي للمحاماة و الاستشارات القانونية وأهمية فريق العمل الكفء ولهذا فإن عملائنا يمكنهم الاعتماد على خبرتنا العلمية والعملية الواسعة في المجالات القانونية الشائكة فنحن مؤسسة قانونية تقدم خدماتها بمجموعة من اللغات منها على سبيل المثال لا الحصر:اللغة العربية,اللغة الانجليزية,اللغة الفرنسية ,اللغة الروسية ,اللغةالهندية,الأردو.اللغة الفارسية واللغة الفلبينية.",
    text_about: "نحن مكتب قمر الكسادي للمحاماة والاستشارات القانونية من أعرق  وأقدم مكاتب المحاماة في الدولة, مسجلون في كافة محاكم الدولة وبجميع درجاتها, نعتقد جازمين بأن مصلحة عملائنا هي  أولوياتنا في العمل ونسعى دائما لتحقيق أفضل النتائج. تاريخنا العملي يشهد لمهاراتنا وكفاءتنا في مختلف فروع القانون.     تم اختيار فريق العمل بعناية تامة سعيا لإيجاد أفضل الحلول القانونية لعملائنا, فلديتنا فريق عمل مخلص مهنيا, متجانس, مستمع, مبدع ومنتج.",
    paragraph_footer: " مكتب قمر الكسادي للمحاماة و الاستشارات القانونية بفروعه في الشارقة - عجمان - دبي -رأس الخيمة ابوظبي - الفجيرة - أم القيوين متخصصون في تقديم العون لمقدمي الخدمات القانونية في دولة الامارات العربية المتحدة سواء مكاتب المحاماة او الاستششارات القانونية .",
    mainTitle1_footer: "الشركة",
    mainTitle2_footer: "الخدمات القانونية",
    titleLink1_footer: "الرئيسية",
    titleLink2_footer: "من نحن",
    titleLink3_footer: "  الخدمات القانونية",
    titleLink4_footer: "فريقنا",
    titleLink5_footer: "تواصل معنا",
    service_1_name: "خدمات الاستشارات و الدراسات",
    service_2_name: "خدمات المساندة القانونية",
    service_3_name: "خدمات  الشركات",
    service_4_name: "خدمات  الاستثمار الأجنبي",
    service_5_name: "خدمات  العقود و الاتفاقيات",
    service_6_name: "خدمات  عمالية",
    service_7_name: "خدمات  التقاضي و التحكيم",
    service_1_contentDescription1: "تقديم الاستشارات و الدراسات القانونية و الشرعية للعميل في مختلف المسائل التجارية و المالية و الاستثمارية و العقارية . ",
    service_1_contentDescription2: "تقديم النصح و الرأي بما يضمن سلامة قرارات العميل و خطوات تنفيذها . ",
    service_1_contentDescription3: "حضور الاجتماعات في كل ما يستدعي الدعم القانوني .",
    service_1_contentDescription4: "مراجعة و تدقيق الخطابات الصادرة من العميل للجهات الخارجية  و معالجة الاشكاليات القانونية و الشرعية و اضفاء الصبغة النظامية على أعمال العميل .",
    service_2_contentDescription1: "تطوير و اعداد الهيكل التنظيمي للإدارات القانونية في منشآت القطاع الخاص أو العام و وضع أساليب و آليات و إجراءات العمل في الإدارة القانونية داخل المنشأة . ",
    service_2_contentDescription2: "توفير الكفاءات القانونية المتميزة للعمل في الإدارات القانونية للعميل او المنشأة . ",
    service_2_contentDescription3: "إعداد اللوائح و السياسات الداخلية للمنشأة بما يكفل سلامة الإجراءات و نظامية القرارات التي تصدر مع الأنظمة السارية في الدولة .",
    service_3_contentDescription1:"إعداد عقود تأسيس الشركات و إكمال إجراءات تأسيس الشركة  و إعداد قرارت التعديل لدى وزارة التجارة و الصناعة.",
    service_3_contentDescription2:"إعداد و صياغة و مراجعات الأنظمة الأساسية للشركات و عقود التأسيس و لوائح حوكمة الشركات و لوائح المراجعة الداخلية بما يتفق مع الأنظمة الحديثة لوزارة التجارة و الصناعة  .",
    service_3_contentDescription3:" إجراء عمليات المراجعة و التدقيق القانوني لعقود الشركات و لوائحها الداخلية و التأكد من توافقها مع أنظمة و متطلبات وزارة التجارة و الصناعة و الجهات ذات العلاقة بنشاط الشركة .",
    service_3_contentDescription4:"معالجة المشامل و النزاعات المتعلقة بالضرائب و تقديم التوصيات و الحلول القانونية لحماية العميل و توافق الإجراءات مع أنظمة الضريبة .",
    service_4_contentDescription1:"تقديم المشورة القانونية للمستثمرين الأجانب من حيث الأنظمة المتبعة في الدولة من حيث مقدار رأس المال و نوعه و الضريبة المفروضة و بيان حقوق المسثمر و اقتراح الحلول القانونية لمعالجة أي إشكالات قانونية قد تواجهه.",
    service_4_contentDescription2:"إعداد عقود الاستثمار الأجنبي و المشاركة سواء كان المشروع أجنبيا بالكامل  أو مختلط .",
    service_4_contentDescription3:"تأسيس الشركات الأجنبية أو المختلطة و فروعها و إصدار التراخيص و السجلات التجارية للمستثمر الأجنبي.",
    service_5_contentDescription1:"إعداد و مراجعة و صياغة كافة العقود و الاتفاقيات و مذكرات التفاهم و تدقيقها بما يخدم مصلحة العميل و منها عقود البيع و الشراء و الإنشاء و عقود المقاولات و التوريد و عقود نقل التقنية و التكنولوجيا و الاتصالات و عقود استثمار الأراضي و التطوير و عقود التمويل العقاري .",
    service_5_contentDescription2:"  صياغة اتفاقيات عدم المنافسة و اتفاقيات سرية المعلومات  و كافة  الاتفاقيات التي تحمي مصالح العميل .",
    service_5_contentDescription3:"    إعداد و إبرام المخالصات و إجراءات التسويات القانونية و اتفاقيات الصلح .",
    service_6_contentDescription1:"إعداد و صياغة عقود العمل بكافة أنواعها  بما يتلائم مع نشاط الشركة (عقد عمل محدد المدة - عقد عمل غير محدد المدة -عقد عمل لبعض الوقت - عقد العمل المؤقت -عقد العمل الموسمي ...).",
    service_6_contentDescription2:"إعداد لوائح تنظيم العمل الداخلية و اعتمادها من وزارة العمل و إعداد السياسات الداخلية للموارد البشرية بما يضمن سلامة و قانونية الإجراءات الداخلية للموارد البشرية .",
    service_6_contentDescription3:"تمثيل العميل في الدعاوى و المنازعات العمالية بكافة أنواعها و معالجة المشاكل المالية الناتجة عن اعادة هيكلة المنشآت و آثارها على العمالة و حقوقهم و علاقتهم العمالية .",
    service_6_contentDescription4:"عقد ورش عمل تطويرية و تثقيفية لمنسوبي الموارد البشرية على أنظمة العمل و تعاميم وزارة العمل و إجراءات عمليات المراجعة و التدقيق القانوني للإجراءات الداخلية و التأكد من سلامتها و توافقها مع تعاميم و أنظمةوزارة العمل و الشؤون الاجتماعية .",
    service_7_contentDescription1:"تقديم دراسة قانونيةمتكاملة عن الموقف القانوني للعميل في حالة رغبته إقامة دعوى قضائية أو في الدعوى القضائية المقامة ضده و تقييم نقاط القوة و الضعف و نسبة كسب الدعوى القضائية المتوقعة .",
    service_7_contentDescription2:"تمثيل العميل في جميع الدعاوي القضائية أمام كافة الجهات القضائية على اختلاف أنواعها و درجاتها و اللجان القضائية و شبه القضائية .",
    service_7_contentDescription3:"إعداد وثائق التحكيم و تمثيل العميل في المنازعات المنظورة لدى مراكز التحكيم التجارية أو الرياضية و غيرها من هيئات التحكيم .",
    service_7_contentDescription4:"تمثيل العميل في جميع دعاوى التنفيذ القضائي و اتخاذ الإجراءات النظامية حتى تحصيل المبالغ المالية .",
    service_7_contentDescription5:"التنفيذ القضائي للسندات التنفيذية من أحكام قضائية و أحكام المحكمين محلية أو أجنبية .",
    allLegalServices_mainhead: "خدماتنا القانونية",
    readMore: "اقرأ المزيد",
    showAll: "عرض الكل",
 
    capicity_text:
      "نحن بالفعل وضعنا أسس ثابتة لإثبات قدراتنا ومصداقياتنا ونحن نتحمل مسؤولية أفعالنا.",
    important_advice_text:
      "يقدم فريق عملنا الذي يتمتع بالخبرة والكفاءى العالية النصائح الصحيحة والهامة فيما يختص بقانون الامارات العربية المتحدة.",
    work_knowledg_title: "الإلمام بالعمل",
    work_knowledg_text:
      "نحن نعتني بعملائنا ونمنحهم كل الرعاية ونتعامل بحذر في فهم متطلباتهم.",
    quality_title: " الجودة",
    quality_text:
      "نحن نفهم جيدا أنه في كثير من الأحيان يقوم العميل بالاستفسار عن معلومات قدسبق له معرفتها ولكننا نرحب بالصعوبات والتحديات التي تأتي بأجق التفاصيل وأكثرها صعوبة.",
    about_services_title: "ماذا نقدم ؟",
    our_partner_title: "شركاؤنا:",
    our_work_title: "طريقة عملنا ؟",
    our_partner:
      "تضم قائمة شركائنا أكثر من 20 مكتب محاماة واستشارات قانونية في الامارات العربية المتحدة لأكثر من 10 سنوات. نحن فخورين بتحقيق نسبة رضا لا تقل عن 85% لشركائنا.",
    about_services:
      " تقدر مؤسسة قمر الكسادي للمحاماة و الاستشارات القانونية وأهمية فريق العمل الكفء ولهذا فإن عملائنا يمكنهم الاعتماد على خبرتنا العلمية والعملية الواسعة في المجالات القانونية الشائكة فنحن مؤسسة قانونية تقدم خدماتها بمجموعة من اللغات منها على سبيل المثال لا الحصر:اللغة العربية,اللغة الانجليزية,اللغة الفرنسية ,اللغة الروسية ,اللغةالهندية,الأردو.اللغة الفارسية واللغة الفلبينية.",
    text_about:
      "نحن مكتب قمر الكسادي للمحاماة والاستشارات القانونية من أعرق  وأقدم مكاتب المحاماة في الدولة, مسجلون في كافة محاكم الدولة وبجميع درجاتها, نعتقد جازمين بأن مصلحة عملائنا هي  أولوياتنا في العمل ونسعى دائما لتحقيق أفضل النتائج. تاريخنا العملي يشهد لمهاراتنا وكفاءتنا في مختلف فروع القانون.     تم اختيار فريق العمل بعناية تامة سعيا لإيجاد أفضل الحلول القانونية لعملائنا, فلديتنا فريق عمل مخلص مهنيا, متجانس, مستمع, مبدع ومنتج.",
  },

};

export default translation;
