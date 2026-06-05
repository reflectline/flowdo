# 🚀 FlowDo

A modern task management application built with **React**, **TypeScript**, **TanStack Query**, and **Feature-Sliced Design (FSD)**.

FlowDo helps users organize tasks across multiple todo lists, track progress, manage priorities, and focus on what matters with a clean and responsive interface.

🌐 **Live Demo:** https://reflectline.github.io/flowdo/
#### If the app doesn't load, try using a VPN.

---

## ✨ Features

### Todo Lists

* Create and delete todo lists
* View aggregated statistics for each list
* Filter lists by status:

    * All Lists
    * Today
    * In Process
    * Done

### Tasks

* Create, edit, and delete tasks
* Change task status
* Set task priority
* Sort tasks by:

    * Title
    * Date
    * Status
    * Priority
* Filter tasks by status and priority

### User Experience

* Dark / Light theme support
* Responsive layout
* Pagination
* Configurable table view
* Dynamic breadcrumbs navigation
* Optimistic and cached server state handling

---

## 🏗 Architecture

The project follows **Feature-Sliced Design (FSD)** principles.

Structure is organized into layers:

```text
src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/
```

---

## 🛠 Tech Stack

- **Core:** React 19, TypeScript, Vite
- **State:** Redux Toolkit, TanStack Query
- **Routing:** React Router
- **Forms & Validation:** React Hook Form, Zod
- **Styling:** SCSS Modules, CSS Variables, Responsive Design
- **Networking:** Axios
- **UI & Animations:** Lucide React, Framer Motion
---

## 📊 Functionality

### Dashboard

Displays all available todo lists with automatically calculated statistics:

* Total tasks
* Completed tasks
* Active tasks
* Progress information

### Task Table

Supports:

* Sorting
* Filtering
* Pagination
* Dynamic column visibility

### Navigation

Dynamic breadcrumbs are generated based on the current route and selected todo list.

---

## 🚀 Getting Started

### Installation

```bash
git clone YOUR_REPOSITORY_URL
cd flowdo
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```
---

