import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initEmailJS } from './lib/emailjs'

// Inicializa o EmailJS
initEmailJS();

createRoot(document.getElementById("root")!).render(<App />);
