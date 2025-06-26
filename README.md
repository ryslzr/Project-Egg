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



