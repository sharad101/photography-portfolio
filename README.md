# Moments by Mansi | Digital Photography Portfolio

A cinematic, high-end photography portfolio built with a modern decoupled architecture. This project serves as a professional showcase of architectural, portrait, and travel photography, featuring a stateless backend and a dynamic React frontend.

## 🏗️ Architecture Overview

The project uses a **decoupled monorepo** structure:
- **Frontend**: A fast, client-side application built with **React** and **Vite**, styled with **Tailwind CSS**.
- **Backend**: A minimal, stateless **Django** engine serving as a secure **REST API** for email relay.

### Technical Rationale (Interview Notes)
- **Decoupled Design**: By separating the frontend and backend, the UI is extremely fast (SPA) and can be deployed independently to platforms like Vercel or Netlify, while the backend can reside on Heroku or a VPS.
- **Stateless Backend**: Unlike traditional Django apps, this backend does not use a database (`models.py` is empty). This reduces server overhead and security surface area. It acts purely as a secure proxy for SMTP email delivery.
- **Security**: 
  - **CORS Protection**: The Django backend is configured with `django-cors-headers` to only accept requests from the specific frontend domain.
  - **Environment Variables**: Sensitive SMTP credentials and API keys are stored in a `.env` file and never committed to version control.
  - **Data Validation**: Uses Django Rest Framework (DRF) serializers to validate and sanitize incoming contact form data.

---

## 📁 Project Structure

```text
/website
├── /frontend           # React + Vite application
│   ├── /src/assets     # Optimized local images
│   ├── /src/components # Reusable UI pieces (Gallery, ContactForm)
│   └── tailwind.config.js # Custom design tokens
├── /backend            # Django REST API
│   ├── /config         # Centralized settings and URL routing
│   ├── /api            # Business logic (serializers, views)
│   └── .env.example    # Template for environment configuration
└── .gitignore          # Root-level git management
```

---

## 🚀 Getting Started

### Backend Setup
1. Navigate to `/backend`.
2. Install dependencies: `pip install django djangorestframework django-cors-headers python-dotenv`.
3. Create a `.env` file based on `.env.example`.
4. Run the server: `python manage.py runserver`.

### Frontend Setup
1. Navigate to `/frontend`.
2. Install dependencies: `npm install`.
3. Run in development: `npm run dev`.

---

## 🎨 Key Features

### Cinematic Gallery
A full-screen, three-tiered gallery with custom CSS transitions.
- **Grayscale Integration**: Images start as grayscale and transition to color on hover.
- **Motion Effects**: Subtle scaling and opacity shifts for a "premium" feel.

### Optimized Contact Flow
An asynchronous contact form that provides real-time feedback.
- **Loading States**: Button triggers a loading overlay during API transit.
- **Success Feedback**: Immediate confirmation upon successful email relay.
- **Console Debugging**: In development mode, emails print to the terminal instead of sending, allowing for rapid testing.

---

## 📦 Deployment

- **Backend**: Pre-configured with a `Procfile` for Heroku/Gunicorn deployment.
- **Frontend**: Pre-configured with `vercel.json` for Vercel's Edge network.

---
*Built as a professional portfolio showcase - 2026*
