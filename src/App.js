import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import PageContents from "./pageContents";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

function App(props) {
  return (
    <ThemeProvider>
      <PageContents>
        <Navbar />
        <Form />
      </PageContents>
    </ThemeProvider>
  );
}

export default App;
