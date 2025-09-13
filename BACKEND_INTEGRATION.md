# Backend Integration Guide

## Overview

This frontend application is now fully configured to connect to the rec-backend. All authentication and data fetching has been implemented with proper error handling and fallback mechanisms.

## Backend Configuration

### Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your backend URL:
   ```
   REACT_APP_API_URL=http://localhost:8000/api
   REACT_APP_ENV=development
   ```

### API Endpoints

The application expects the following backend endpoints:

#### Authentication Endpoints
- `POST /auth/register/student` - Student registration
- `POST /auth/register/instructor` - Instructor registration  
- `POST /auth/login/student` - Student login
- `POST /auth/login/instructor` - Instructor login
- `POST /auth/login/admin` - Admin login
- `POST /auth/send-verification` - Send verification email
- `POST /auth/verify-email` - Verify email with code
- `POST /auth/reset-password` - Reset password

#### Student Dashboard Endpoints
- `GET /student/dashboard` - Get dashboard data
- `GET /student/courses/progress` - Get course progress
- `GET /student/assignments` - Get assignments
- `POST /student/assignments/{id}/submit` - Submit assignment
- `GET /student/classes/upcoming` - Get upcoming classes
- `GET /student/performance` - Get performance data
- `GET /student/downloads` - Get downloads

#### Teacher Dashboard Endpoints
- `GET /teacher/dashboard` - Get dashboard data
- `GET /teacher/schedule` - Get class schedule
- `GET /teacher/assignments/review` - Get assignments for review
- `POST /teacher/assignments/{id}/grade` - Grade assignment
- `GET /teacher/students/performance` - Get student performance
- `POST /teacher/content/upload` - Upload content
- `POST /teacher/announcements` - Create announcement

#### Admin Dashboard Endpoints
- `GET /admin/dashboard` - Get dashboard data
- `GET /admin/users` - Get users
- `POST /admin/users` - Create user
- `PUT /admin/users/{id}` - Update user
- `DELETE /admin/users/{id}` - Delete user
- `GET /admin/courses` - Get courses
- `POST /admin/courses` - Create course
- `PUT /admin/courses/{id}` - Update course
- `DELETE /admin/courses/{id}` - Delete course
- `GET /admin/analytics` - Get analytics
- `GET /admin/settings` - Get settings
- `PUT /admin/settings` - Update settings

#### Course Catalog Endpoints
- `GET /courses` - Get all courses (with optional filters)
- `GET /courses/{id}` - Get course details
- `POST /courses/{id}/enroll` - Enroll in course

## Authentication Flow

1. User logs in through appropriate login page (student/instructor/admin)
2. Backend returns JWT token and user data
3. Token is stored in localStorage
4. All subsequent API calls include the token in Authorization header
5. If token expires (401 response), user is redirected to login

## Error Handling

The application includes comprehensive error handling:

- **Network errors**: Shows "Unable to connect to server" message
- **Authentication errors**: Shows appropriate login error messages
- **Validation errors**: Shows field-specific error messages
- **Server errors**: Shows user-friendly error messages

## Fallback Mechanisms

When the backend is not available, the application:

- Uses mock data for course catalog
- Shows cached data for dashboards
- Displays appropriate error messages to users
- Maintains full UI functionality

## Testing the Integration

1. **Without Backend**: The application works with mock data and shows error messages for API calls
2. **With Backend**: Once the rec-backend is running on http://localhost:8000, all API calls will work

## Features Implemented

### ✅ Authentication Pages
- Student login with backend integration
- Instructor login with backend integration  
- Admin login with backend integration
- Form validation and error handling
- Loading states and user feedback

### ✅ Dashboard Integration
- Student dashboard ready for backend data
- Teacher dashboard ready for backend data
- Admin dashboard ready for backend data
- Loading states and error handling
- Fallback to default data when API unavailable

### ✅ Course Catalog
- Backend API integration for course data
- Filter and search functionality preserved
- Error handling with fallback to mock data
- Loading states

### ✅ API Service Layer
- Centralized API configuration
- Automatic token management
- Request/response interceptors
- Comprehensive error handling
- Type-safe API methods

## Development Workflow

1. Start the frontend development server:
   ```bash
   npm start
   ```

2. Start the rec-backend server (when available):
   ```bash
   # In the rec-backend directory
   npm start  # or whatever command starts the backend
   ```

3. The frontend will automatically connect to the backend when it's available

## Production Deployment

Update the environment variables for production:
```
REACT_APP_API_URL=https://your-backend-domain.com/api
REACT_APP_ENV=production
```

## Notes

- All API calls are non-blocking and include proper error handling
- The UI remains fully functional even when the backend is unavailable
- Token-based authentication is implemented and ready to use
- All dashboard components are ready to receive real data from the backend