# Stellar Feedback Portal

An interactive React application featuring a custom dynamic star rating system and an overlay modal dialog box. The project is built using modern functional components, state hooks, and clean unidirectional data flow to provide an engaging user feedback experience.

## 🚀 Features

* **Interactive Star Rating Component:** Dynamically maps out 5 star icons using the `react-icons` library. Clicking a star updates the application state, coloring in all chosen stars up to that point.
* **Dynamic Feedback Phrases:** Displays custom, highly enthusiastic text descriptions matching the exact star level selected by the user.
* **Overlay Modal Dialog:** A state-managed modal window that prompts the user upon loading and gracefully closes when the dismiss button is triggered.
* **Unidirectional Data Flow:** Heavy utilization of React props to pass states down and execute callback actions back up to parent components.

## 🛠️ Tech Stack & Architecture

* **Framework:** React (Functional Components)
* **State Management:** `useState` Hook
* **Icons Library:** `react-icons` (FaStar)
* **Styling:** Custom CSS with modern container queries (`index.css`)

### Component Hierarchy
```text
src/
├── App.js           (Holds Dialog state, contains configuration arrays)
└── components/
    ├── Dialog.js     (Overlay modal controlled by App.js)
    ├── StarRating.js (Manages the count state of active stars)
    └── Star.js       (Individual clickable star icon)