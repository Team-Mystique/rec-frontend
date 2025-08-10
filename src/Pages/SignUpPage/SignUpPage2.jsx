import React, { useState, useEffect } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignUpPage2.css';

const logoUrl = '/RecLogo.png';

const SignUpPage2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State for this step's form data
  const [formData, setFormData] = useState({
    occupation: '',
    educationLevel: '',
    location: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // State to hold data from the previous step
  const [previousData, setPreviousData] = useState(null);

  // Effect to retrieve data from Step 1 when the component loads
  useEffect(() => {
    if (location.state && location.state.user_data) {
      setPreviousData(location.state.user_data);
    } else {
      // If a user lands here directly without completing step 1, send them back.
      console.error("No data received from the previous step. Redirecting to sign-up start.");
      navigate('/signup'); // Assuming '/signup' is the route for the first step.
    }
  }, [location.state, navigate]);

  // Handle changes for all form fields
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
    if (!formData.occupation) {
      newErrors.occupation = 'Please select your occupation.';
    }
    if (!formData.educationLevel) {
      newErrors.educationLevel = 'Please select your education level.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location/Address is required.';
    }
    return newErrors;
  };

  // Handle form submission
  const handleContinue = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Combine data from Step 1 with data from this step
      const combinedData = { ...previousData, ...formData };
      console.log('Step 2 valid. Navigating with combined data:', combinedData);
      
      // Navigate to the final step with all collected data
      navigate('/signup3', { state: { user_data: combinedData } });
    }
  };

  const handleReturnHome = () => {
    navigate('/');
  };
  
  const handleBack = () => {
    navigate(-1); // Go back to the previous page in history (Step 1)
  };

  return (
    <div className="signup-page-step2">
      <img src={logoUrl} alt="REC - Rise Edu Consult Logo" className="signup-logo-step2" />

      <div className="signup-container-step2">
        <div className="signup-header-step2">
          <FaGraduationCap className="header-icon-step2" size={50} />
          <h2>Create Account</h2>
          <p>Join thousands of Learners on their educational journey</p>
        </div>
        <div className="progress-indicator-step2">
          <div className="progress-bar-background-step2">
            <div className="progress-bar-fill-step2" style={{ width: '66.66%' }}></div>
          </div>
          <span>2/3</span>
        </div>

        <form className="signup-form-step2" onSubmit={handleContinue} noValidate>
          <div className="form-group-step2">
            <label htmlFor="occupation">Occupation</label>
            <div className="select-wrapper">
              <select
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className={errors.occupation ? 'input-error' : ''}
              >
                <option value="" disabled>Select your occupation</option>
                <option value="student">Student</option>
                <option value="professional">Working Professional</option>
                <option value="unemployed">Unemployed</option>
                <option value="other">Other</option>
              </select>
            </div>
            {errors.occupation && <p className="error-text">{errors.occupation}</p>}
          </div>

          <div className="form-group-step2">
            <label htmlFor="educationLevel">Education Level</label>
            <div className="select-wrapper">
              <select
                id="educationLevel"
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className={errors.educationLevel ? 'input-error' : ''}
              >
                <option value="" disabled>Select level</option>
                <option value="high-school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            {errors.educationLevel && <p className="error-text">{errors.educationLevel}</p>}
          </div>

          <div className="form-group-step2">
            <label htmlFor="location">Location/Address</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleChange}
              className={errors.location ? 'input-error' : ''}
            />
            {errors.location && <p className="error-text">{errors.location}</p>}
          </div>

          <button type="submit" className="continue-button-step2">Continue</button>
        </form>

        <div className="signup-footer-step2">
          <button onClick={handleBack} className="footer-link-step2 button-link">← Back</button>
          <button onClick={handleReturnHome} className="footer-link-step2 button-link">Return to homepage</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage2;