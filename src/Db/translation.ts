// src/Db/translation.ts
export type Language = 'en' | 'ar';

interface TranslationStrings {
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
    hero_title: "Lawyers and Legal Consultants",
    contact_call: "Contact Us",
    about_title: "About Us",
    about_content_1: "Our practical history testifies to our continued success in criminal justice and recovery cases. We also have a rich history in commercial cases, civil disputes, personal status cases, and labor cases. We have a distinctive style in understanding and studying all our clients' files, radically different from all traditional methods. We read, understand, comprehend, and innovate to find the best solutions that suit our clients' interests.",
    about_content_2: "Our practical history testifies to our continued success in criminal justice and recovery cases. We also have a rich history in commercial cases, civil disputes, personal status cases, and labor cases. We have a distinctive style in understanding and studying all our clients' files, radically different from all traditional methods. We read, understand, comprehend, and innovate to find the best solutions that suit our clients' interests."
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    team: "فريقنا",
    contact: "اتصل بنا",
    lawyer: "المحامي",
    hero_title: "محامون واستشياريون قانونيون",
    contact_call: "اتصل بنا",
    about_title: "من نحن",
    about_content_1: "تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا العمالية, ولنا أسلوب متميز في فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا.",
    about_content_2: "تاريخنا العملي يشهد لنا بالنجاح المستمر في القضاء الجنائي وقضايا الاسترداد. كما أنه لنا تاريخ زاخر في القضايا التجارية والنزاعات المدنية وقضايا الأحوال الشخصية والقضايا العمالية, ولنا أسلوب متميز في فهم ودراسة كافة ملفات عملائنا نختلف جذريا عن كافة الأساليب التقليدية.نقرأ,نفهم وندرك ونبدع لإيجاد الحلول الأفضل التي تتلائم مع صملحة عملائنا."
  }
};

export default translation;
