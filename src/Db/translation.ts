// src/Db/translation.ts
export type Language = 'en' | 'ar';

export interface TranslationStrings {
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
  about_hero:string;
  text_about:string
  about_services:string
  about_services_title:string
  our_partner:string
  our_partner_title:string
  our_work_title:string
  quality_title:string
  quality_text:string
  work_knowledg_text:string
  work_knowledg_title:string
  important_advice_title:string
  important_advice_text:string
  capicity_title:string
  capicity_text:string
  read_more:string
  why_choose_subhead:string
  why_choose_mainhead:string
  why_choose_text_3:string
  why_choose_text_2:string
  why_choose_text_1:string
}

export type Translation = Record<Language, TranslationStrings>;

const translation: Translation = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    team: "Our Team",
    contact: "Contact Us",
    lawyer: "Lawyer",
    read_more:"Read more",
    why_choose_subhead:"More about us",
    why_choose_mainhead:"Why you choose us",
    hero_title: "Lawyers and Legal Consultants",
    contact_call: "Contact Us",
    about_title: "About Us",
    why_choose_text_3:"We take the role of the client and act on their behalf at the appropriate time to achieve the best results for them",
    why_choose_text_2:"The members of the Al-Kassadi’s law firm,are distinguished by integrity, diligence,Hardworking, able to assess legal situations, and effective service delivery, which is associated with our competence in finding solutions to any difficulties",
    why_choose_text_1:"Our team has been carefully selected in pursuit of finding the best legal solutions for our clients. Our team is professional, loyal, listener, creative and productive",
    about_content_1: "Our practical history testifies to our continued success in criminal justice and recovery cases. We also have a rich history in commercial cases, civil disputes, personal status cases, and labor cases. We have a distinctive style in understanding and studying all our clients' files, radically different from all traditional methods. We read, understand, comprehend, and innovate to find the best solutions that suit our clients' interests.",
    about_content_2: "Our practical history testifies to our continued success in criminal justice and recovery cases. We also have a rich history in commercial cases, civil disputes, personal status cases, and labor cases. We have a distinctive style in understanding and studying all our clients' files, radically different from all traditional methods. We read, understand, comprehend, and innovate to find the best solutions that suit our clients' interests.",
    our_team_subhead: "Our Team",
    our_team_mainhead: "Our Best Lawyers",
    our_services_subhead: "Our Services",
    our_services_mainhead: "Our Legal Services",
    about_hero:"About",
    quality_title:"Quality",
    important_advice_title:"Important advice",
    capicity_title:"Capicity and Credibility",
    capicity_text:"We have already laid the foundations Constant to prove our capabilities and credibility and we bear responsibility for our actions.",
    important_advice_text:"Offered by our staff who are highly experience,the right and important advice with regard to the law of the United Arab Emirates.",
    work_knowledg_title:"Knowledge of work",
    work_knowledg_text:"We take care of our customers,We give them all the care,We deal with caution in understanding their requirements.",
    quality_text:"We understan very well that often the customer inquiries about the information previously he/she has acknowledged,but we welcome the difficulties and challenges which comes down to the smallest details and the most difficult.",
    our_partner_title:"Our Partners",
    our_work_title:"How do we do it ?",
    our_partner:"Our partner list includes more tahn 20 Law firms and consultancies in the UAE for more than 10 years. We are proud to achieve a satisfaction rate that is not less than 85% for our partners.",
    about_services_title:"What we offer ?",
    about_services:"Qamar Al Kassadi Advocates and Legal Consultations appreciates the importance of an efficient team,and for this,our clients can reply on our extensive scientific and practical experience,in the thorny legal fields,we are a legal unstitution that offers its services in a range of languages,for example but not limited to:Arabic,English,French,Russian,Hindi,Urdu,Persian and Filipino.",
    text_about:"We are Qamar Al Kassadi Advocates & Legal Consultations,one of the senior law firms in the country.We are registered in all state courts and at all levels.We firmly believe that the interest of our clients is our priority in work and we always strive to achieve the best results.Our practicl history testifies to our skill and competence in various branches of law.Our team has been carefully selected in order to find the best legal solutions for our clients,we have a professional team that is loyal,sympathetic,listener,creative and productive."
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    team: "فريقنا",
    contact: "اتصل بنا",
    lawyer: "المحامي",
    read_more:"اقرأ المزيد",
    hero_title: "محامون واستشياريون قانونيون",
    contact_call: "اتصل بنا",
    about_title: "من نحن",
    why_choose_text_3:"ﻧﺄﺧﺬ دور اﻟﻌﻤﻴﻞ و ﻧﺘﺼﺮف ﺑﺎﻟﻮﻛﺎﻟﺔ ﻋﻨﻪ ﻓﻲ اﻟﻮﻗﺖ اﻟﻤﻨﺎﺳﺐ ﻟﺘﺤﻘﻴﻖ اﻓﻀﻞ واﺣﺴﻦ اﻟﻨﺘﺎﺋﺞ ﻟﻪ.",
    why_choose_text_2:"ﻳﺘﻤﻴﺰ أﻓﺮاد ﻣﺆﺳﺴﺔ اﻟﻜﺴﺎدي ﺑﺎﻟﻨﺰاﻫﺔ واﻟﺤﺮص واﻟﻌﻤﻞ اﻟﺠﺎد واﻟﻘﺪرة ﻋﻠﻰ ﺗﻘﻴﻴﻢ اﻷوﺿﺎع اﻟﻘﺎﻧﻮﻧﻴﺔ وﺗﻘﺪﻳﻢ اﻟﺨﺪﻣﺎت ﺑﻔﺎﻋﻠﻴﺔ ، واﻟﺘﻲ ﺗﻘﺘﺮن ﺑﻜﻔﺎءﺗﻨﺎ ﻓﻲ إﻳﺠﺎد اﻟﺤﻠﻮل ﻷي ﺻﻌﻮﺑﺎت.",
    why_choose_text_1:"ﻛﻮﻧﻨﺎ ﻓﺮﻳﻖ ﻣﺨﺘﺎر ﺑﻌﻨﺎﻳﺔ ﻣﻦ اﻟﻘﺎﻧﻮﻧﻴﻴﻦ اﻟﻤﺘﻤﺮﺳﻴﻦ ﻣﻦ ﺟﻨﺴﻴﺎت ﻣﺨﺘﻠﻔﺔ ﻧﺴﻌﻰ ﺟﺎﻫﺪﻳﻦ ﻟﺘﻮﻓﻴﺮ أﻓﻀﻞ ﻣﺴﺘﻮى ﻣﻦ اﻟﺨﺪﻣﺔ ﺑﻘﺪرة وﻛﻔﺎءة ﻋﺎﻟﻴﺔ.",
    about_content_1: "تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا العمالية, ولنا أسلوب متميز في فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا.",
    about_content_2: "تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا العمالية, ولنا أسلوب متميز في فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا.",
    our_team_subhead: "فريقنا",
    our_team_mainhead: "أفضل محامينا",
    our_services_subhead: "خدماتنا",
    our_services_mainhead: "خدماتنا القانونية",
    about_hero:"من نحن",
    why_choose_subhead:"المزيد حولنا",
    why_choose_mainhead:"لماذا تختارنا",
    important_advice_title:"النصيحة الهامة",
    capicity_title:"القدؤة والمصداقية",
    capicity_text:"نحن بالفعل وضعنا أسس ثابتة لإثبات قدراتنا ومصداقياتنا ونحن نتحمل مسؤولية أفعالنا.",
    important_advice_text:"يقدم فريق عملنا الذي يتمتع بالخبرة والكفاءى العالية النصائح الصحيحة والهامة فيما يختص بقانون الامارات العربية المتحدة.",
    work_knowledg_title:"الإلمام بالعمل",
    work_knowledg_text:"نحن نعتني بعملائنا ونمنحهم كل الرعاية ونتعامل بحذر في فهم متطلباتهم.",
    quality_title:" الجودة",
    quality_text:"نحن نفهم جيدا أنه في كثير من الأحيان يقوم العميل بالاستفسار عن معلومات قدسبق له معرفتها ولكننا نرحب بالصعوبات والتحديات التي تأتي بأجق التفاصيل وأكثرها صعوبة.",
    about_services_title:"ماذا نقدم ؟",
    our_partner_title:"شركاؤنا:",
    our_work_title:"طريقة عملنا ؟",
    our_partner:"تضم قائمة شركائنا أكثر من 20 مكتب محاماة واستشارات قانونية في الامارات العربية المتحدة لأكثر من 10 سنوات. نحن فخورين بتحقيق نسبة رضا لا تقل عن 85% لشركائنا.",
     about_services:" تقدر مؤسسة قمر الكسادي للمحاماة و الاستشارات القانونية وأهمية فريق العمل الكفء ولهذا فإن عملائنا يمكنهم الاعتماد على خبرتنا العلمية والعملية الواسعة في المجالات القانونية الشائكة فنحن مؤسسة قانونية تقدم خدماتها بمجموعة من اللغات منها على سبيل المثال لا الحصر:اللغة العربية,اللغة الانجليزية,اللغة الفرنسية ,اللغة الروسية ,اللغةالهندية,الأردو.اللغة الفارسية واللغة الفلبينية.",
    text_about:"نحن مكتب قمر الكسادي للمحاماة والاستشارات القانونية من أعرق  وأقدم مكاتب المحاماة في الدولة, مسجلون في كافة محاكم الدولة وبجميع درجاتها, نعتقد جازمين بأن مصلحة عملائنا هي  أولوياتنا في العمل ونسعى دائما لتحقيق أفضل النتائج. تاريخنا العملي يشهد لمهاراتنا وكفاءتنا في مختلف فروع القانون.     تم اختيار فريق العمل بعناية تامة سعيا لإيجاد أفضل الحلول القانونية لعملائنا, فلديتنا فريق عمل مخلص مهنيا, متجانس, مستمع, مبدع ومنتج.",
  }
};

export default translation;
