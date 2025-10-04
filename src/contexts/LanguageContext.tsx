import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Header
  'header.title': { en: 'TIRUCHIRAPPALLI CITY', ta: 'திருச்சிராப்பள்ளி நகர' },
  'header.subtitle': { en: 'MUNICIPAL CORPORATION', ta: 'மாநகராட்சி' },
  'header.home': { en: 'HOME', ta: 'முகப்பு' },
  'header.search': { en: 'Search', ta: 'தேடு' },
  
  // Menu items
  'menu.city': { en: 'THE CITY', ta: 'நகரம்' },
  'menu.council': { en: 'COUNCIL', ta: 'சபை' },
  'menu.corporation': { en: 'CORPORATION', ta: 'நிறுவனம்' },
  'menu.departments': { en: 'DEPARTMENTS', ta: 'துறைகள்' },
  'menu.information': { en: 'INFORMATION', ta: 'தகவல்' },
  'menu.services': { en: 'SERVICES', ta: 'சேவைகள்' },
  
  // Hero Carousel
  'hero.slide1.title': { en: "Let's all Together.. Keep the City Cleaner !", ta: 'நாம் அனைவரும் சேர்ந்து... நகரை சுத்தமாக வைப்போம்!' },
  'hero.slide1.subtitle': { en: 'We join hands to make the City a Cleaner, Greener, Livable Tiruchirappalli', ta: 'நகரை சுத்தமான, பசுமையான, வாழக்கூடிய திருச்சிராப்பள்ளியாக மாற்ற கைகோர்ப்போம்' },
  'hero.slide2.title': { en: 'Practice Waste Segregation.. At Home/Office !', ta: 'வீடு/அலுவலகத்தில் கழிவுகளை பிரித்தெடுக்கும் பழக்கத்தை கடைபிடியுங்கள்!' },
  'hero.slide2.subtitle': { en: 'Even a minimal effort on your part, has significant impact on our City', ta: 'உங்கள் சிறிய முயற்சி கூட நம் நகரத்தில் பெரிய தாக்கத்தை ஏற்படுத்தும்' },
  'hero.slide3.title': { en: 'My City.. My Responsibility !', ta: 'என் நகரம்... என் பொறுப்பு!' },
  'hero.slide3.subtitle': { en: "People's Movement towards making our City, a Clean City Tiruchirappalli", ta: 'நம் நகரை சுத்தமான திருச்சிராப்பள்ளியாக மாற்ற மக்கள் இயக்கம்' },
  'hero.slide4.title': { en: 'Reach Out to Us.. Anywhere! Anytime !!', ta: 'எங்களை தொடர்பு கொள்ளுங்கள்... எங்கும்! எப்போதும்!!' },
  'hero.slide4.subtitle': { en: 'Feel free to connect us in Toll-free Phone, Social Media and WhatsApp', ta: 'இலவச தொலைபேசி, சமூக ஊடகம் மற்றும் வாட்ஸ்அப் மூலம் எங்களை தொடர்பு கொள்ளுங்கள்' },
  
  // Services Section
  'services.title': { en: 'Our Services', ta: 'எங்கள் சேவைகள்' },
  'services.subtitle': { en: 'Comprehensive municipal services for the citizens of Tiruchirappalli', ta: 'திருச்சிராப்பள்ளி குடிமக்களுக்கான விரிவான நகராட்சி சேவைகள்' },
  'services.waste.title': { en: 'Waste Management', ta: 'கழிவு மேலாண்மை' },
  'services.waste.desc': { en: 'Efficient waste collection and disposal services', ta: 'திறமையான கழிவு சேகரிப்பு மற்றும் அகற்றல் சேவைகள்' },
  'services.tax.title': { en: 'Property Tax', ta: 'சொத்து வரி' },
  'services.tax.desc': { en: 'Online property tax payment and assessment', ta: 'ஆன்லைன் சொத்து வரி செலுத்துதல் மற்றும் மதிப்பீடு' },
  'services.water.title': { en: 'Water Supply', ta: 'நீர் வழங்கல்' },
  'services.water.desc': { en: '24/7 water supply management and billing', ta: '24/7 நீர் வழங்கல் மேலாண்மை மற்றும் பில்லிங்' },
  'services.building.title': { en: 'Building Permits', ta: 'கட்டிட அனுமதிகள்' },
  'services.building.desc': { en: 'Apply for building plan approvals online', ta: 'கட்டிட திட்ட ஒப்புதலுக்கு ஆன்லைனில் விண்ணப்பிக்கவும்' },
  'services.certificate.title': { en: 'Birth/Death Certificate', ta: 'பிறப்பு/இறப்பு சான்றிதழ்' },
  'services.certificate.desc': { en: 'Register and download certificates online', ta: 'சான்றிதழ்களை பதிவு செய்து ஆன்லைனில் பதிவிறக்கவும்' },
  'services.grievance.title': { en: 'Grievance Redressal', ta: 'குறைதீர்ப்பு' },
  'services.grievance.desc': { en: 'Lodge complaints and track resolution', ta: 'புகார்களை பதிவு செய்து தீர்வை கண்காணிக்கவும்' },
  
  // Notifications
  'notifications.title': { en: 'Recent Notifications', ta: 'சமீபத்திய அறிவிப்புகள்' },
  'notifications.subtitle': { en: 'Stay updated with latest announcements', ta: 'சமீபத்திய அறிவிப்புகளுடன் புதுப்பித்த நிலையில் இருங்கள்' },
  'notifications.viewAll': { en: 'View All', ta: 'அனைத்தையும் பார்க்க' },
  'notifications.readMore': { en: 'Read More', ta: 'மேலும் வாசிக்க' },
  
  // Instagram
  'instagram.title': { en: 'Instagram Updates', ta: 'இன்ஸ்டாகிராம் புதுப்பிப்புகள்' },
  'instagram.subtitle': { en: 'Follow our latest activities', ta: 'எங்கள் சமீபத்திய நடவடிக்கைகளை பின்தொடரவும்' },
  'instagram.follow': { en: 'Follow Us', ta: 'எங்களை பின்தொடரவும்' },
  'instagram.followFull': { en: 'Follow Us on Instagram', ta: 'இன்ஸ்டாகிராமில் எங்களை பின்தொடரவும்' },
  
  // About Section
  'about.title': { en: 'About Tiruchirappalli', ta: 'திருச்சிராப்பள்ளி பற்றி' },
  'about.readMore': { en: 'Read More', ta: 'மேலும் வாசிக்க' },
  
  // Events
  'events.title': { en: 'Latest Events', ta: 'சமீபத்திய நிகழ்வுகள்' },
  'events.viewAll': { en: 'View All Events', ta: 'அனைத்து நிகழ்வுகளையும் பார்க்க' },
  
  // Footer
  'footer.quickLinks': { en: 'Quick Links', ta: 'விரைவு இணைப்புகள்' },
  'footer.contact': { en: 'Contact Us', ta: 'எங்களை தொடர்பு கொள்ளுங்கள்' },
  'footer.followUs': { en: 'Follow Us', ta: 'எங்களை பின்தொடரவும்' },
  'footer.copyright': { en: 'Tiruchirappalli Municipal Corporation. All rights reserved.', ta: 'திருச்சிராப்பள்ளி மாநகராட்சி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
