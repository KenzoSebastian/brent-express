import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MotionConfig } from "motion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig transition={{ duration: .7, ease: "easeInOut", bounce: 0.4, type: "spring" }}>
      <App />
    </MotionConfig>
  </StrictMode>
);
