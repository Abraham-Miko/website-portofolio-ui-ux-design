<div align="center">

# 🚀 Group Portfolio & Task Submission Website 
*A simple Next.js based website for portfolio and group task submission for the UI/UX Design course.*

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 About Project

This project is both a portfolio website and a group task submission system designed specifically to streamline task coordination. The website categorizes submissions into two main domains industrial and educational and features a centralized member profile page for easy access to team information.

---

## ✨ Key Features

*   👥 **Group Member Profiles:** Displays comprehensive profiles of each group member.
*   🏭 **Industrial Domain Task Submission:** Dedicated pages to manage, view, and submit assignments related to industrial case studies.
*   🎓 **Educational Domain Task Submission:** Dedicated pages for managing assignments focusing on the educational sector.
*   ⚡ **Interactive & Responsive:** Built with dynamic modular components utilizing *modals* and the *Context API*.

---

## 🛠️ Technologies Used

*   **Framework :** [Next.js (App Router)](https://nextjs.org/)
*   **UI Library / Styling :** Tailwind CSS
*   **Language :** TypeScript / JavaScript
*   **State Management :** React Context (`AppContext`)
*   **Public Repository :** GitHub

---

## 🚀 How to Run the Project

Follow the steps below to download and run this project locally on your computer

### 📋 Prerequisites 
Ensure your computer has the following software installed:
* Node.js (Version 18.x or newer is recommended)
* Git

### ⚙️ Installation Steps

1. **Clone this repository :**
  ```bash
  git clone https://github.com/Abraham-Miko/website-portofolio-ui-ux-design.git
  ```
2. **Navigate to the project directory :**
  ```bash
  cd website-portofolio-ui-ux-design
  ```
3. **Install the required dependencies/packages :**
  ```bash
  npm install
  ```
4. **Run the development server :**
  ```bash
  npm run dev
  ```
5. **Open in your Browser :**
  ```bash
  http://localhost:3000
  ```
---

## 📂 Project Structure

```text
website-portofolio-ui-ux-design/
├── app/
│   ├── components/
│   │   ├── LayoutWrapper.tsx
│   │   ├── MemberCard.tsx
│   │   ├── TaskCard.tsx
│   │   └── TaskModal.tsx
│   ├── context/
│   │   └── AppContext.tsx
│   ├── industri/
│   │   └── page.tsx
│   ├── pendidikan/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── types/
│   └── index.ts
├── package.json
└── tsconfig.json
