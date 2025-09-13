import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, redirect to login
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/register';
    }
    return Promise.reject(error);
  }
);

// Authentication API calls
export const authAPI = {
  // Student registration
  registerStudent: async (userData) => {
    const response = await api.post('/auth/register/student', userData);
    return response.data;
  },

  // Instructor registration
  registerInstructor: async (userData) => {
    const response = await api.post('/auth/register/instructor', userData);
    return response.data;
  },

  // Student login
  loginStudent: async (credentials) => {
    const response = await api.post('/auth/login/student', credentials);
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  // Instructor login
  loginInstructor: async (credentials) => {
    const response = await api.post('/auth/login/instructor', credentials);
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  // Admin login
  loginAdmin: async (credentials) => {
    const response = await api.post('/auth/login/admin', credentials);
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  // Send verification email
  sendVerificationEmail: async (email, userType) => {
    const response = await api.post('/auth/send-verification', { email, userType });
    return response.data;
  },

  // Verify email
  verifyEmail: async (token, code) => {
    const response = await api.post('/auth/verify-email', { token, code });
    return response.data;
  },

  // Reset password
  resetPassword: async (email, userType) => {
    const response = await api.post('/auth/reset-password', { email, userType });
    return response.data;
  },

  // Logout
  logout: async () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/register';
  },
};

// Student dashboard API calls
export const studentAPI = {
  // Get student dashboard data
  getDashboardData: async () => {
    const response = await api.get('/student/dashboard');
    return response.data;
  },

  // Get course progress
  getCourseProgress: async () => {
    const response = await api.get('/student/courses/progress');
    return response.data;
  },

  // Get assignments
  getAssignments: async () => {
    const response = await api.get('/student/assignments');
    return response.data;
  },

  // Submit assignment
  submitAssignment: async (assignmentId, submission) => {
    const response = await api.post(`/student/assignments/${assignmentId}/submit`, submission);
    return response.data;
  },

  // Get upcoming classes
  getUpcomingClasses: async () => {
    const response = await api.get('/student/classes/upcoming');
    return response.data;
  },

  // Get performance data
  getPerformance: async () => {
    const response = await api.get('/student/performance');
    return response.data;
  },

  // Get downloads
  getDownloads: async () => {
    const response = await api.get('/student/downloads');
    return response.data;
  },
};

// Teacher dashboard API calls
export const teacherAPI = {
  // Get teacher dashboard data
  getDashboardData: async () => {
    const response = await api.get('/teacher/dashboard');
    return response.data;
  },

  // Get class schedule
  getClassSchedule: async () => {
    const response = await api.get('/teacher/schedule');
    return response.data;
  },

  // Get assignments for review
  getAssignmentsForReview: async () => {
    const response = await api.get('/teacher/assignments/review');
    return response.data;
  },

  // Grade assignment
  gradeAssignment: async (assignmentId, grade, feedback) => {
    const response = await api.post(`/teacher/assignments/${assignmentId}/grade`, {
      grade,
      feedback,
    });
    return response.data;
  },

  // Get student performance
  getStudentPerformance: async () => {
    const response = await api.get('/teacher/students/performance');
    return response.data;
  },

  // Upload content
  uploadContent: async (courseId, content) => {
    const formData = new FormData();
    formData.append('courseId', courseId);
    if (content.file) {
      formData.append('file', content.file);
    }
    formData.append('title', content.title);
    formData.append('description', content.description);

    const response = await api.post('/teacher/content/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Create announcement
  createAnnouncement: async (announcement) => {
    const response = await api.post('/teacher/announcements', announcement);
    return response.data;
  },
};

// Admin dashboard API calls
export const adminAPI = {
  // Get admin dashboard data
  getDashboardData: async () => {
    const response = await api.get('/admin/dashboard');
    return response.data;
  },

  // User management
  getUsers: async () => {
    const response = await api.get('/admin/users');
    return response.data;
  },

  createUser: async (userData) => {
    const response = await api.post('/admin/users', userData);
    return response.data;
  },

  updateUser: async (userId, userData) => {
    const response = await api.put(`/admin/users/${userId}`, userData);
    return response.data;
  },

  deleteUser: async (userId) => {
    const response = await api.delete(`/admin/users/${userId}`);
    return response.data;
  },

  // Course management
  getCourses: async () => {
    const response = await api.get('/admin/courses');
    return response.data;
  },

  createCourse: async (courseData) => {
    const response = await api.post('/admin/courses', courseData);
    return response.data;
  },

  updateCourse: async (courseId, courseData) => {
    const response = await api.put(`/admin/courses/${courseId}`, courseData);
    return response.data;
  },

  deleteCourse: async (courseId) => {
    const response = await api.delete(`/admin/courses/${courseId}`);
    return response.data;
  },

  // Analytics
  getAnalytics: async () => {
    const response = await api.get('/admin/analytics');
    return response.data;
  },

  // Settings
  getSettings: async () => {
    const response = await api.get('/admin/settings');
    return response.data;
  },

  updateSettings: async (settings) => {
    const response = await api.put('/admin/settings', settings);
    return response.data;
  },
};

// Course catalog API calls
export const courseAPI = {
  // Get all courses for catalog
  getAllCourses: async (filters = {}) => {
    const response = await api.get('/courses', { params: filters });
    return response.data;
  },

  // Get course details
  getCourseDetails: async (courseId) => {
    const response = await api.get(`/courses/${courseId}`);
    return response.data;
  },

  // Enroll in course
  enrollInCourse: async (courseId) => {
    const response = await api.post(`/courses/${courseId}/enroll`);
    return response.data;
  },
};

export default api;