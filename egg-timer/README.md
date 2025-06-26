# 🥚 Egg Timer App – Project Breakdown

A charming pixel-art inspired timer app designed using modern web technologies.

---

##  Technologies Used

- **React.js** – For building reusable UI components.
- **JavaScript** – Utilizes `useEffect`, `useState`, and timer logic.
- **JSX** – Embeds HTML within JavaScript.
- **CSS3** – Styles cards, animations, and adds pixel-art flair.
- **HTML5 Audio API** – Handles the playback of sound effects.

---

##  React Components

- `Soft.jsx`  
  Displays the Soft-Boiled Egg timer, egg image, title, and interaction interface.

- `Timer4mins.jsx`  
  Countdown timer logic. Triggers events like playing the sound effect at zero.

- `App.jsx`  
  Main wrapper that renders and routes components based on user interaction.

---

##  CSS Styling

- **Fonts & Effects**  
  Uses pixel fonts like `"Press Start 2P"` and animated pulse effects when the timer starts.

- **.card**  
  Visual blocks for timer options (Soft, Medium, Hard).

- **.box**, **.box-card**, **.card-container**  
  Layout wrappers for aligning and spacing elements.

---

##  Audio & Feedback

- **Ding Sound**  
  Plays three times when the countdown reaches zero.

- **Pulsing Animation**  
  Adds nostalgic visual feedback while the timer is active.

---

##  State Logic & Interactivity

- `useState`  
  Manages time, sound triggers, and animation flags.

- `useNavigate`  
  Handles navigation between screens or modes.

---

##  Media Assets

- **Egg Images**  
  AI-generated to match the visual theme.

- **Sound File**  
  `ding.mp3` sourced from [Pixabay](https://pixabay.com/).

---

##  Documentation

Be sure to read the full documentation inside the "egg-timer" folder for implementation details.

---


<p style="margin-bottom: 80px;"></p>



 
  
   










### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

