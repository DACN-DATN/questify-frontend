import React, { useEffect, useRef } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Islands from "./Islands/Islands";
import "./style.css";

function App() {
  const islandsRef = useRef(null);

  useEffect(() => {
    if (islandsRef.current) {
      islandsRef.current.focus();
    }
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div ref={islandsRef} tabIndex="-1">
        <Islands />
      </div>
      <Footer />
    </div>
  );
}

export default App;