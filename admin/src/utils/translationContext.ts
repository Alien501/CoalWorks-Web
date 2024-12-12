import React, { createContext, useState, useContext, useEffect, ComponentType } from 'react';
import { Button } from '@/components/ui/button';

// Define types for translation context
interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (text: string) => Promise<string>;
}

// Create a translation context with type
const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  setLanguage: () => {},
  translate: async (text) => text
});

// Typed Higher-Order Component for auto-translating text
function withAutoTranslation<P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  return function TranslatedComponent(props: P) {
    const { translate } = useContext(TranslationContext);
    
    // Recursively translate props
    const translateProps = async (obj: any): Promise<any> => {
      if (typeof obj === 'string') {
        return await translate(obj);
      }
      
      if (obj && typeof obj === 'object') {
        const translatedObj: any = {};
        for (const key of Object.keys(obj)) {
          translatedObj[key] = await translateProps(obj[key]);
        }
        return translatedObj;
      }
      
      return obj;
    };

    // Use state to handle async translations
    const [translatedProps, setTranslatedProps] = useState<P>(props);

    useEffect(() => {
      const translateAsyncProps = async () => {
        const translated = await translateProps(props);
        setTranslatedProps(translated);
      };

      translateAsyncProps();
    }, [props]);

    return <WrappedComponent {...translatedProps} />;
  };
}

// Translation Provider Component
const TranslationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, string>>({});

  // Function to translate text using Google Translate API
  const translateText = async (text: string, targetLanguage: string): Promise<string> => {
    // Check if translation exists in cache first
    const cacheKey = `${text}_${targetLanguage}`;
    const cachedTranslation = translations[cacheKey];
    
    if (cachedTranslation) {
      return cachedTranslation;
    }

    try {
      const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_GOOGLE_TRANSLATE_API_KEY'
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage
        })
      });

      const data = await response.json();
      const translatedText = data.data.translations[0].translatedText;

      // Cache the translation
      setTranslations(prev => ({
        ...prev,
        [cacheKey]: translatedText
      }));

      return translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  // Memoized translation function
  const translate = React.useCallback(async (text: string): Promise<string> => {
    if (language === 'en') return text;
    return await translateText(text, language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ 
      language, 
      setLanguage,
      translate 
    }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Example Interface for Component Props
interface WelcomeProps {
  title: string;
  description: string;
}

// Example Component using Auto-Translation
const WelcomeComponent = withAutoTranslation<WelcomeProps>(({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
});

// Language Selector Component
const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useContext(TranslationContext);

  return (
    <div className="language-selector">
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
    </div>
  );
};
