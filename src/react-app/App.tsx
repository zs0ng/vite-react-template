// src/App.tsx

import "./App.css";

function App() {


  return (
    
    <div className="learnify-landing-page">
      <h1>
        <img className="logo learnify fade-in-up" 
        src="https://learnify-landing-page.pages.dev/assets/learnify-BydvyBxx.svg" 
        alt="Learnify" 
        style={{ height: "20px" }} 
       
        />
      </h1>
      <p className="title fade-in-up delay-1" style={{ paddingTop: "90px"}}>LEARN EVERYTHING </p>
      <p className="title fade-in-up delay-2">FASTER AND BETTER </p>
      <p className="description fade-in-up delay-3" style={{ color: "#ffffff", fontWeight: "300" }}>
      Build to help you master new skills, learn a vast amount of knowledge and even do a deep search.
      </p>
      <p className="description fade-in-up delay-3" style={{ color: "#838383", fontWeight: "300", paddingTop: "20px"}}>
      Learnify is an powerful assistant that can inspire you, impress you and improve you.
      </p>
      <button className="button fade-in-up delay-3" style={{ backgroundColor: "#000", color: "#ffffff", fontWeight: "300", padding: "10px 20px", borderRadius: "5px", marginTop: "20px" }}>Try it now</button>
    </div>
  );
}

export default App;
