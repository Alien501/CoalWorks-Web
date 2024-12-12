import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/context/TranslationContext';

export const Translate: React.FC<{ children: string }> = ({ children }) => {
  const { translate, currentLanguage } = useTranslation();
  const [translatedText, setTranslatedText] = useState(children);

  useEffect(() => {
    const translateText = async () => {
      const translated = await translate(children);
      setTranslatedText(translated);
    };
    
    translateText();
  }, [children, currentLanguage, translate]);

  return <>{translatedText}</>;
};

