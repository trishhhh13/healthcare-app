# Healthcare App

A modern healthcare management application built with React, TypeScript, and Vite. This application provides a comprehensive platform for managing patient records, appointments, analytics, and healthcare provider profiles.

## Project Overview

Healthcare App is a full-featured web application designed to streamline healthcare management. It provides healthcare providers and administrators with tools to manage patient information, track appointments, view analytics, and maintain detailed provider profiles. The application is built with a focus on performance, type safety, and user experience.

## Features

- **User Authentication**: Secure login and signup functionality with Firebase authentication
- **Dashboard**: Interactive dashboard with key metrics and recent activity widgets
- **Patient Management**: View and manage patient records and information
- **Analytics**: Comprehensive analytics dashboard with:
  - Patient demographics visualization
  - Top conditions analysis
  - Area charts for trend analysis
- **Appointments**: Track and manage patient appointments
- **User Profiles**: Detailed healthcare provider profiles
- **Responsive Design**: Mobile-friendly interface with drawer navigation
- **Real-time Notifications**: Toast notifications for user feedback
- **Progressive Web App**: Service worker support for offline functionality

## Technology Stack

- **Frontend Framework**: React 19.2.4
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 8.0.0
- **Routing**: React Router DOM 7.13.1
- **Backend Services**: Firebase 12.12.1
- **Data Visualization**: Recharts 3.8.1
- **UI Icons**: Lucide React 1.1.0
- **Code Quality**: ESLint 9.39.4

## Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthcare-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase** (if not already set up)
   - Update `src/services/firebase.ts` with your Firebase configuration
   - Ensure Firebase authentication is enabled in your Firebase project

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement (HMR)
- **`npm run build`** - Build the application for production (includes TypeScript compilation)
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview the production build locally

## Project Structure

```
healthcare-app/
├── public/                    # Static files and service worker
│   ├── manifest.json          # PWA manifest
│   └── sw.js                  # Service worker
├── src/
│   ├── components/            # Reusable React components
│   │   ├── appLogo/           # Application logo component
│   │   ├── commonAreaChart/   # Chart component
│   │   ├── drawer/            # Navigation drawer
│   │   ├── navBar/            # Navigation bar
│   │   ├── profileIcon/       # User profile icon
│   │   └── toast/             # Toast notification component
│   ├── pages/                 # Page components
│   │   ├── analytics/         # Analytics dashboard pages
│   │   ├── auth/              # Authentication pages (login, signup)
│   │   ├── dashboard/         # Main dashboard
│   │   ├── home/              # Home page with widgets
│   │   ├── overViewCards/     # Overview card components
│   │   ├── patients/          # Patient management page
│   │   └── profile/           # User profile page
│   ├── services/              # API and service layer
│   │   ├── firebase.ts        # Firebase configuration
│   │   └── serviceWorker.js   # Service worker registration
│   ├── utils/                 # Utility functions and constants
│   │   ├── constants.ts       # Application constants
│   │   ├── dummyData.ts       # Mock data for development
│   │   └── notifications.ts   # Notification utilities
│   ├── App.tsx                # Main App component
│   ├── App.css                # Global styles
│   └── main.tsx               # Application entry point
├── index.html                 # HTML template
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # This file
```

## Authentication Setup

The application uses Firebase Authentication for secure user login and signup. To set up authentication:

1. **Enable Firebase Authentication**
   - Go to your Firebase Console
   - Navigate to Authentication → Sign-in method
   - Enable Email/Password authentication

2. **Configure Firebase in the Application**
   - Update `src/services/firebase.ts` with your Firebase project credentials:
     ```typescript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     ```

3. **Authentication Flow**
   - Users can sign up for a new account via the signup page
   - Existing users can log in with their credentials
   - Authentication state is managed across the application via Firebase

## Development Notes

- The application uses TypeScript for type safety
- Components follow a modular structure for maintainability
- Styling is done with CSS modules and inline styles
- ESLint is configured for code quality enforcement
- Service Worker enables offline functionality (PWA)

## Browser Support

- Modern browsers with ES2020+ support
- Chrome, Firefox, Safari, and Edge (latest versions)
