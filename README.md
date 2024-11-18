# 1. Project Setup
## 1. Initialize the project:
  npx create-react-app dynamic-form-generator --template typescript
  cd dynamic-form-generator

## 2.Install dependencies:
  npm install react-hook-form react-syntax-highlighter tailwindcss @tailwindcss/forms jest playwright @testing-library/react @testing-library/jest-dom
## 3.Set up Tailwind CSS:
   Install Tailwind and configure it:


# 2. Create JSON Editor and Form Components
## 1.JSON Editor Component (Left Panel):
     Provides syntax highlighting, validation, and updates form JSON schema in real time.
## 2.Form Generator Component (Right Panel):
    Dynamically renders form fields based on the JSON schema.
    Uses react-hook-form for state management and validation.
