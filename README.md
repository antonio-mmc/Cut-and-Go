# Cut & Go - Automatic Haircutting Tablet App 💈✂️

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

## 📖 Project Context
**Cut & Go** is an interactive mock interface designed for the tablet of an *automatic haircutting machine (helmet)*. The application simulates the entire customer journey: from selecting a desired haircut style, configuring parameters, and previewing the final look, to the actual (simulated) process of executing the automated haircut securely and comfortably.

## ✨ Key Features
- **💇‍♂️ Haircut Selection & Previews:** Browse through different haircut styles (Buzz Cut, High Fade, Caesar, etc.) with detailed visual representations.
- **⚙️ Dynamic Parameter Configuration:** Users can fine-tune hair lengths, fade types, and styling preferences before confirming the cut.
- **🔄 Execution Simulation:** A seamless flow simulating the physical machine's state (scanning, cutting, vacuuming) with real-time feedback and an emergency stop/continue feature.
- **📱 Responsive & Elegant UI:** Designed with modern aesthetics using Tailwind CSS for intuitive touch-based interaction (targeting tablet displays).
- **🎬 Fluid Animations:** Utilized Framer Motion to provide polished state transitions and interactive micro-animations.

## 🛠️ Technologies Used
- **Frontend Framework:** React 18
- **Styling:** Tailwind CSS (for rapid, responsive design)
- **Animations:** Framer Motion (for smooth layout and UI transitions)
- **Build Tool:** Vite (for fast, optimized bundling)

## 🎓 What I Learned
Through developing this project, I gained practical and deep experience in several areas:
- **Complex State Management:** Managing multi-step processes and user selections across different views and application states.
- **UI/UX for Hardware Simulation:** Designing interfaces that communicate physical processes (e.g., scanning a head, blade calibrations) through software.
- **Fluid Micro-Interactions:** Perfecting timing and animations to keep the user engaged and informed using Framer Motion.
- **Responsive Layout Design:** Structuring the container layouts efficiently to prevent unwanted scrollbars, ensuring a native-app feel on tablet devices.

## 🚀 Future Improvements
- **Hardware Integration/API:** Connect the UI with real (or mocked) backend APIs representing the robotic sensors and cutting motors.
- **User Accounts:** Allow returning users to save favorite presets or scan their head shape for personalized recommendations.
- **Custom 3D Rendering:** Incorporate WebGL to allow users to rotate a 3D model of their own scanned head.

## 💻 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   ```
2. **Navigate to the project directory**
   ```bash
   cd cut-and-go
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```
