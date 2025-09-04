# Freshcell Interview Project

A simple React/Next.js application demonstrating GraphQL authentication and user profile management.

## Features

- **Login Screen**: Email/password authentication with GraphQL
- **Profile Screen**: Display user information and logout functionality
- **Form Validation**: Client-side input validation
- **Error Handling**: Backend error handling and user feedback
- **Unit Tests**: Jest testing setup with validation tests

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

4. **Login with test credentials** (check the GraphQL endpoint for valid users)

5. **Run tests:**
   ```bash
   npm test
   ```

## Tech Stack

- Next.js 15 + React 19
- TypeScript
- GraphQL (urql client)
- Tailwind CSS
- Jest + Testing Library

## Project Structure

```
src/
├── app/           # Next.js app router pages
├── utils/         # Utility functions (validation)
├── hooks/         # Custom React hooks (useAuth)
├── libs/          # GraphQL client configuration
└── __tests__/     # Unit tests
```