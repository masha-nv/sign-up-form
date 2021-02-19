import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import PageContents from "./pageContents";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContents>
          <Navbar />
          <Form />
        </PageContents>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
