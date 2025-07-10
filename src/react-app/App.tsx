// src/App.tsx
import "./App.css";
import IntroPage from "./pages/intro-page/intro-page";
import Menu from "./pages/menu/menu";

function App() {
  return (
    <div className="learnify-app-wrapper">
      <IntroPage />
      <Menu />
    </div>
  );
}

export default App;
