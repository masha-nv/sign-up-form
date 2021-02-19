import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const languages = [
    {
      name: "English",
      search: "search",
      username: "Username",
      password: "Password",
      signup: "Sign Up",
      emoji: "EN",
      remember: "Remember Me",
    },
    {
      name: "Française",
      search: "cherche",
      username: "Nom d'utilisateur",
      password: "le mot de passe",
      signup: "S'inscrire",
      emoji: "FR",
      remember: "Souviens-toi de moi",
    },
    {
      name: "Español",
      search: "buscar",
      username: "nombre de usuario",
      password: "contraseña",
      signup: "inscribirse",
      emoji: "ES",
      remember: "Recuérdame",
    },
  ];
  const [language, setLanguage] = useState("English");
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const getLanguage = () =>
    languages.find((lang) => {
      console.log(lang);
      return lang.name === language;
    });
  const textData = getLanguage();

  return (
    <LanguageContext.Provider
      value={{ languages, language, changeLanguage, textData }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};
