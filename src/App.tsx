import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import { i18n } from './translations/i18n';



function App() {
  const [language, setLanguage] = useState('')
  
  const getLangauge = (lang: any) => {
    setLanguage(lang);
    // console.log("appLang", language)
  }
  i18n.changeLanguage(language);

  return (
    
    <div className={language != "en" ? "noEn":'en' }>
      <Layout getlang={getLangauge} />
    </div>
  );
}

export default App;
