import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SignUpPage1.css';

// Assume the logo is in the public folder
const logoUrl = '/RecLogo.png';

const SignUpPage1 = () => {
  const navigate = useNavigate();

  // State to hold all form data in a single object
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Unified handler to update form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    const { firstName, lastName, email, phone } = formData;

    // First Name validation
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }

    // Last Name validation
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }

    // Phone Number validation (simple check for non-empty and basic format)
    if (!phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?([0-9\s-]{7,})$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    return newErrors;
  };

  // Handle form submission
  const handleContinue = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      // If there are errors, set them in state to display to the user
      setErrors(formErrors);
    } else {
      // If the form is valid, clear any old errors and proceed
      setErrors({});
      console.log('Form is valid. Navigating to next step with data:', formData);
      
      // Navigate to SignUpPage2 and pass the current form data
      // This data can be accessed in the next component via `useLocation` hook
      navigate('/signup2', { state: { user_data: formData } });
    }
  };

  return (
    <div className="signup-page">
      <img src={logoUrl} alt="REC - Rise Edu Consult Logo" className="signup-logo" />

      <div className="signup-container">
        <div className="signup-header">
          <FaGraduationCap className="header-icon" size={50} />
          <h2>Create Account</h2>
          <p>Join thousands of Learners on their educational journey</p>
        </div>

        <div className="progress-indicator">
          <div className="progress-bar-background">
            <div className="progress-bar-fill" style={{ width: '33.33%' }}></div> {/* Dynamic width */}
          </div>
          <span>1/3</span>
        </div>

        {/* Use noValidate to disable default browser validation, allowing our custom logic to take over */}
        <form className="signup-form" onSubmit={handleContinue} noValidate>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? 'input-error' : ''} // Apply error class
            />
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'input-error' : ''}
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <button type="submit" className="continue-button">Continue</button>
        </form>

        <div className="signup-footer">
          <a href="/login" className="footer-link">← Back to login</a>
          <a href="#home" className="footer-link">Return to homepage</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage1;