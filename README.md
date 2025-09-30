# ServiceNow Certification Hub 🚀

A comprehensive, all-in-one learning platform for ServiceNow CSA & CAD certification preparation. Built to solve the problem of scattered resources across multiple platforms.

![Dashboard](https://github.com/tanaygt/ServiceNow-CSA-Prep-By-Firbase/blob/main/Screenshot%202025-09-30%20163444.png)
*Clean, professional dashboard with quick access to all features*

## ✨ Features

### 📚 All Learning Resources in One Place
- **Official Documentation** - Direct integration with ServiceNow docs
- **Video Playlists** - Curated YouTube tutorials and courses
- **Practice Tests** - Real exam-style MCQs with explanations
- **Study Guides** - Community-shared materials and checklists
- **Flashcards** - 280+ interactive cards for quick revision

### 🤖 AI-Powered Learning Assistant
- Instant answers to ServiceNow concepts
- Personalized study recommendations
- 24/7 doubt resolution
- Exam preparation guidance

### 🎯 Structured Learning Path
- Step-by-step CSA preparation roadmap
- Progress tracking and analytics
- Interactive quizzes with instant feedback
- Mobile-responsive design

## 🖼️ Application Screenshots

### Dashboard Overview
![Dashboard](https://github.com/tanaygt/ServiceNow-CSA-Prep-By-Firbase/blob/main/Screenshot%202025-09-30%20163444.png)
*Welcome dashboard with quick stats and navigation*

### Learning Resources
![Resources](https://github.com/tanaygt/ServiceNow-CSA-Prep-By-Firbase/blob/main/Screenshot%202025-09-30%20163559.png)
*Organized resource library with direct links*

### AI Mentor Chat
![AI Mentor](https://github.com/tanaygt/ServiceNow-CSA-Prep-By-Firbase/blob/main/Screenshot%202025-09-30%20171632.png)
*AI-powered chat assistant for instant help*

### Interactive Flashcards
![Flashcards](https://github.com/tanaygt/ServiceNow-CSA-Prep-By-Firbase/blob/main/Screenshot%202025-09-30%20171615.png)
*Flip cards for quick concept revision*

## 🚀 Live Demo

**Experience the application live:**
👉 [https://studio--studio-3500934973-9c5d7.us-central1.hosted.app/](https://studio--studio-3500934973-9c5d7.us-central1.hosted.app/)

## 🛠️ Tech Stack

- **Frontend:** React.js + TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Firebase Functions
- **Database:** Firestore
- **Authentication:** Firebase Auth
- **AI Integration:** Google Generative AI
- **Hosting:** Firebase Hosting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanaygt/ServiceNow-CSA-Prep-By-Firbase.git
   cd ServiceNow-CSA-Prep-By-Firbase
Install dependencies

bash
npm install
Environment Setup
Create a .env file in the root directory:

env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_AI_API_KEY=your_ai_api_key
Start development server

bash
npm start
The application will open at http://localhost:3000

🗂️ Project Structure
text
src/
├── components/          # Reusable UI components
│   ├── Dashboard/       # Main dashboard
│   ├── Flashcards/      # Flashcard system
│   ├── AIMentor/        # AI chat assistant
│   └── Resources/       # Learning resources
├── pages/              # Application pages
├── hooks/              # Custom React hooks
├── services/           # Firebase and API services
├── utils/              # Utility functions
└── styles/             # Global styles
🔧 Configuration
Firebase Setup
Create a new Firebase project

Enable Authentication (Email/Password & Google)

Create a Firestore database

Enable Firebase Hosting

Update the Firebase configuration in src/firebase.js

AI Integration
Get Google Generative AI API key

Configure Firebase Functions for AI endpoints

Set up environment variables

🎯 Learning Domains Covered
The platform covers all 6 official CSA learning domains:

Platform Overview and Navigation (7%)

Instance Configuration (11%)

Configuring Applications for Collaboration (20%)

Self-Service and Automation (20%)

Database Management (27%)

Data Migration and Integration (15%)

🤝 Contributing
We welcome contributions! Here's how you can help:

Fork the repository

Create a feature branch

bash
git checkout -b feature/amazing-feature
Commit your changes

bash
git commit -m 'Add some amazing feature'
Push to the branch

bash
git push origin feature/amazing-feature
Open a Pull Request

Areas for Contribution
Add more practice questions

Improve UI/UX design

Add new learning resources

Enhance AI mentor capabilities

Add CAD certification materials

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Developer
Tanay Shrivastava - ServiceNow CSA Certified

LinkedIn: tanayshrivastava-cse

GitHub: @tanaygt

🙏 Acknowledgments
ServiceNow Community for shared resources

Firebase for amazing backend services

React and Tailwind CSS communities

All contributors and testers

📞 Support
If you have any questions or need help:

Open an Issue

Connect on LinkedIn

Email: tanay@servicenow.com

⭐ If this project helped you, please give it a star! ⭐

text

## Additional Files You Might Want:

### 1. `.gitignore`
```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Firebase
.firebase/
firebase-debug.log
firebase-debug.*.log

# Build
build/
dist/
2. package.json (Example structure)
json
{
  "name": "servicenow-certification-hub",
  "version": "1.0.0",
  "description": "All-in-one learning platform for ServiceNow certifications",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "firebase deploy"
  },
  "dependencies": {
    "react": "^18.2.0",
    "firebase": "^10.0.0",
    "react-router-dom": "^6.0.0"
  }
}
This README provides:

✅ Professional presentation

✅ Clear screenshots with descriptions

✅ Comprehensive feature list

✅ Easy setup instructions

✅ Contribution guidelines

✅ Proper attribution and licensing

✅ Contact information
