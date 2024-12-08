// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "./components/ProfileCard.jsx";


createRoot(document.getElementById("root")).render(
  <div>
      <App />
      <Card username="John Doe"  />
  </div>
    
  
);
