import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignUpPage3.css';

const logoUrl = '/logo.png';

const SignUpPage3 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    terms: false,
  });
  
  const [errors, setErrors] = useState({});
  const [allUserData, setAllUserData] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState({ level: '', percent: 0 });

  // Retrieve data from previous steps when the component loads
  useEffect(() => {
    if (location.state && location.state.user_data) {
      setAllUserData(location.state.user_data);
    } else {
      console.error("No data from previous steps. Redirecting to start.");
      navigate('/signup'); // Redirect to the first step
    }
  }, [location.state, navigate]);

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/\d/.test(password)) score++; // contains number
    if (/[a-z]/.test(password)) score++; // contains lowercase
    if (/[A-Z]/.test(password)) score++; // contains uppercase
    if (/[^A-Za-z0-9]/.test(password)) score++; // contains special character

    switch (score) {
      case 5:
        return { level: 'strong', percent: 100 };
      case 4:
        return { level: 'medium', percent: 75 };
      case 3:
        return { level: 'weak', percent: 50 };
      default:
        return { level: 'very-weak', percent: 25 };
    }
  };
  
  // Update password strength as user types
  useEffect(() => {
    if (formData.password) {
      const strength = checkPasswordStrength(formData.password);
      setPasswordStrength(strength);
    } else {
      setPasswordStrength({ level: '', percent: 0 });
    }
  }, [formData.password]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    const { password, confirmPassword, terms } = formData;

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!terms) {
      newErrors.terms = 'You must accept the terms and conditions.';
    }
    
    return newErrors;
  };


  const handleCreateAccount = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Combine all data and exclude the confirmPassword field
      const finalUserData = {
        ...allUserData,
        password: formData.password,
      };

      // --- Simulate API call ---
      console.log('ACCOUNT CREATED. FINAL DATA:', finalUserData);
      
      // Navigate to the success page
      navigate('/create-account-success', { state: { email: allUserData.email } });
    }
  };
  
  const handleBack = () => navigate(-1);

  return (
    <div className="signup-page-step3">
      <img src={logoUrl} alt="REC - Rise Edu Consult Logo" className="signup-logo-step3" />

      <div className="signup-container-step3">
        <div className="signup-header-step3">
          <FaGraduationCap className="header-icon-step3" size={50} />
          <h2>Create Account</h2>
          <p>Join thousands of Learners on their educational journey</p>
        </div>

        <div className="progress-indicator-step3">
          <div className="progress-bar-background-step3">
            <div className="progress-bar-fill-step3" style={{ width: '100%' }}></div>
          </div>
          <span>3/3</span>
        </div>

        <form className="signup-form-step3" onSubmit={handleCreateAccount} noValidate>
          <div className="form-group-step3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'input-error' : ''}
            />
            <div className="password-strength-container">
              <div className={`strength-bar strength-${passwordStrength.level}`} style={{ width: `${passwordStrength.percent}%` }}></div>
            </div>
            {formData.password && <label className="strength-label">Strength: {passwordStrength.level.replace('-', ' ')}</label>}
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="form-group-step3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'input-error' : ''}
            />
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
          </div>
          
          <div className="terms-group-step3">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className={errors.terms ? 'input-error' : ''}
            />
            <label htmlFor="terms">
              I accept the <a href="/terms" className="terms-link">terms and conditions</a>.
            </label>
            {errors.terms && <p className="error-text error-text-terms">{errors.terms}</p>}
          </div>

          <button type="submit" className="create-account-button">Create Account</button>
        </form>

        <div className="social-divider">
          <span>Or create account with</span>
          <div className="social-icons-step3">
            <a href="#instagram" aria-label="Sign up with Instagram"><FaInstagram /></a>
            <a href="#twitter" aria-label="Sign up with X/Twitter"><FaXTwitter /></a>
            <a href="#facebook" aria-label="Sign up with Facebook"><FaFacebookF /></a>
            <a href="#google" aria-label="Sign up with Google"><FaGoogle /></a>
          </div>
        </div>

        <div className="signup-footer-step3">
            <button onClick={handleBack} className="footer-link-step3 button-link">← Back</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage3;