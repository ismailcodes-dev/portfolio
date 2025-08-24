# Mohammed Ismail K - Personal Portfolio

Welcome to the repository for my personal portfolio website. This project showcases my skills, featured projects, and professional background as a Full Stack Developer. It's built with a modern tech stack and designed to be clean, responsive, and performant.

![Screenshot of the portfolio website](<"H:\Job and shit\portfolio\src\assets\screenshot of portfolio.png">)


---

### **Tech Stack**

* **Frontend:** React, Vite, Material-UI (MUI), Framer Motion
* **Languages:** JavaScript (ES6+)
* **Deployment:** Vercel / Netlify (or wherever you host it)

---

### **Getting Started**

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ismailcodes-dev/portfolio.git(https://github.com/ismailcodes-dev/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install @mui/material @emotion/react @emotion/styled @mui/icons-material framer-motion react-type-animation react-fast-marquee react-animated-cursor
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

### **Development Process & Tooling**

This project was a great opportunity to modernize an old codebase. My development process involved a "human-in-the-loop" approach with AI tools.

* **Core Logic & Architecture:** The main application structure and component design were architected and written by me.
* **AI-Assisted Refactoring:** I used **GitHub Copilot** to analyze my codebase for improvements. For instance, it identified redundant global CSS and suggested consolidating all styling into the Material-UI themeing and `sx` prop system for better performance and maintainability.
* **Code Decoupling:** To improve scalability, I prompted an AI assistant to help me refactor the components by separating the presentation logic from the portfolio data. This led to the creation of a centralized `portfolioData.js` module, which now serves as a single source of truth for all content.
* **Accessibility Audit:** I used AI-powered accessibility tools to check the site's structure. These tools recommended converting key containers to semantic `<section>` tags to improve the document outline for assistive technologies.

This approach allowed me to focus on high-level architecture while accelerating the more routine aspects of development and refactoring.